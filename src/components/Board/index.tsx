import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import Card from "../Card";
import { CardType } from "@/types/general";
import { getImages } from "@/api";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { shuffleCards } from "@/utils/shuffleCards";
import Spinner from "../Spinner";
import Score from "../Score";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["images"], getImages);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

interface BoardProps {
  onSuccess: () => void;
}

export default function Board({ onSuccess }: PropsWithChildren<BoardProps>) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      setCards(shuffleCards(data.entries));
    }
  }, [data?.entries, isSuccess]);

  useEffect(() => {
    if (matchedPairs.length === data?.entries?.length) {
      onSuccess();
    }
  }, [data?.entries?.length, matchedPairs.length, onSuccess]);

  const handleCardClick = (clickedCard: CardType) => {
    if (flippedCards.length === 2 || clickedCard.isFlipped) {
      return;
    }
    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    setCards(updatedCards);
    setFlippedCards([...flippedCards, clickedCard]);

    if (flippedCards.length === 1) {
      if (flippedCards[0].name === clickedCard.name) {
        setMatchedPairs([...matchedPairs, clickedCard.name]);
        setFlippedCards([]);
      } else {
        setErrors(errors + 1);
        setTimeout(() => {
          const resetCards = cards.map((card) =>
            flippedCards.some((flipped) => flipped.id === card.id)
              ? { ...card, isFlipped: false }
              : card
          );
          setCards(resetCards);
          setFlippedCards([]);
        }, 500);
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-center mt-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Score errors={errors} matches={matchedPairs.length} />
          <div className="grid grid-cols-minmax-64 sm:grid-cols-minmax-128 sm:gap-4 gap-2 mt-4 w-full">
            {cards.map((card) => (
              <Card key={card.id} card={card} onClick={handleCardClick} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
