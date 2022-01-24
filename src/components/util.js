import numeral from "numeral";

export const prettyPrintNum = (num) => {
  return numeral(num).format("0,0");
};
