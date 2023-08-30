type Entrie = {
  fields: {
    image: {
      url: string;
    };
  };
  meta: {
    name: string;
  };
};

export const shuffleCards = (cards: Entrie[]) => {
  const mappedCards = [...cards, ...cards].map((entrie, index) => ({
    url: entrie.fields.image.url,
    name: entrie.meta.name,
    id: index,
  }));
  return mappedCards.sort(() => Math.random() - 0.5);
};
