import { CardType } from "@/types/general";
import Image from "next/image";
import { PropsWithChildren } from "react";
import question from "@/assets/question.png";

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
}

export default function Card({ card, onClick }: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`h-16 w-16 sm:w-32 sm:h-32 rounded-md overflow-hidden bg-orange-300 hover:bg-orange-200 cursor-pointer transition-transform flex items-center justify-center ${
        card.isFlipped ? "[transform:rotateY(180deg)]" : ""
      }`}
      onClick={() => onClick(card)}
    >
      <Image
        alt={card.name}
        {...(card.isFlipped && { width: 300, height: 300 })}
        src={card.isFlipped ? card.url : question}
        className={
          card.isFlipped ? "w-full h-full" : "sm:w-20 sm:h-20 w-10 h-10"
        }
      />
    </div>
  );
}
