export default function sumArrayProperty(arr, prop) {
  if(Array.isArray(arr) && arr.length) {
    let total = 0;

    arr.forEach(item => {
      const value = item[prop];
      if(typeof value === 'number') {
        total += value;
      }
    });

    return total;
  }

  return 0;
}