export default () => {
  let newLabel = new Date();
  let currentTime = `${newLabel.getHours()}:${newLabel.getMinutes()}:${newLabel.getSeconds()}`;
  return currentTime;
};
