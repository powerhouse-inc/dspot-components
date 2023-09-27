export const usLocalizedNumber = (num: number, decimalPlace = 0): string => {
  num = num === 0 ? 0 : num; // avoid "-0"

  return num?.toLocaleString("en-US", {
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: decimalPlace,
    maximumFractionDigits: decimalPlace,
  });
};
