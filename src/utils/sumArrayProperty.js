export default function sumArrayProperty(arr, prop) {
  return arr.reduce((acc, curr) => {
    return curr[prop] + acc;
  }, 0);
}