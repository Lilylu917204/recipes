import numeral from "numeral";

const prettyPrintNum = (num) => {
  return numeral(num).format("0,0");
};

const truncate = (string, num) =>
  string?.length > num ? string.substring(0, num - 1) + "..." : string;

export { prettyPrintNum, truncate };
