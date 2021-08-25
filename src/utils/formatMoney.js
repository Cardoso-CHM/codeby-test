export default function formatMoney(val) {
  const number = val.toFixed(2);

  const [integerPart, decimalPart] = `${number}`.split(".");

  return `R$ ${integerPart},${decimalPart}`;
}