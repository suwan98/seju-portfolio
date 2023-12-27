const splitToDot = (text: string) => {
  const sentences = text.split(". ");
  return sentences.map((sentence) => sentence);
};

export default splitToDot;
