const splitToDot = (text: string) => {
  let sentences = text.split(". ");
  sentences = sentences.map((sentence) => sentence + ".");

  sentences[sentences.length - 1] = sentences[sentences.length - 1].slice(
    0,
    -1
  );

  return sentences;
};

export default splitToDot;
