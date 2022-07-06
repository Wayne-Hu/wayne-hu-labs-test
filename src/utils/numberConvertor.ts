const ValueUnder20 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const ValueOf10s = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
const Thousand = "Thousand";

export const convertToString = (value: number): string => {
  if (value === 0) return "Zero";
  else if (value < 20) return ValueUnder20[value];
  else if (value < 100) {
    return (
      ValueOf10s[Math.trunc(value / 10)] + " " + convertToString(value % 10)
    );
  } else if (value < 1000) {
    return `${ValueUnder20[Math.trunc(value / 100)]} Hundred ${convertToString(
      value % 100
    )}`;
  } else
    return `${convertToString(
      Math.trunc(value / 1000)
    )} Thousand ${convertToString(value % 1000)}`;
};
