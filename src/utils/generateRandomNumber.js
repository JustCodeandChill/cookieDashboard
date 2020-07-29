export default () => {
  return Math.floor(Math.random() * 100);
};

export const generateRandomNumberArray = (size, range = 1000) => {
  if (size < 0) return new Error("invalid size");
  if (size === 1) return Math.floor(Math.random() * range);
  else {
    const randomNumberArray = [];
    for (let i = 0; i < size; i++)
      randomNumberArray.push(Math.floor(Math.random() * range));
    return randomNumberArray;
  }
};

export const generateRandomPercentageNumberArray = (size) => {
  if (size < 0) return new Error("invalid size");
  if (size === 1) return 100;
  else {
    const randomPercentageNumberArray = [];
    let randomPercentageNumber;
    let left = 100;
    while (randomPercentageNumberArray.length < size) {
      randomPercentageNumber = Math.floor(Math.random() * left);

      if (randomPercentageNumber > left) return new Error("calculation wrong");
      randomPercentageNumberArray.push(randomPercentageNumber);
      left -= randomPercentageNumber;

      if (randomPercentageNumberArray.length === size - 1) {
        randomPercentageNumberArray.push(Math.round(left));
        break;
      }
    }

    return randomPercentageNumberArray;
  }
};

export const generateRandomKPI = (range = 100) => {
  let total,
    completed = 0;
  total = Math.round(Math.random() * range);
  completed = Math.round(Math.random() * range);

  while (completed > total) {
    completed = Math.round(Math.random() * range);
  }
  return {
    total,
    completed
  }
};
