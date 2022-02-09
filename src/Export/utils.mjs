import dayjs from "dayjs";

export const formatStandardDateTime = (date) => {
  if (!date) {
    return null;
  }
  return dayjs(parseInt(date, 10)).format("DD/MM/YYYY HH:mm");
};

export const makeFilename = (stage) => {
  // const d = new Date().toISOString().split(".")[0];
  // const withoutTimeColons = d.replace(/:/gm, "").replace("T", "_");
  return `Results-Stage-${stage}.xlsx`;
};

const MIN = 6;
const MAX = 40;
const getLength = (val) => {
  let len = (val && val.length) || MIN;
  len = len > MAX ? MAX : len;
  len = len < MIN ? MIN : len;
  return len;
};

export const getColumnLengths = (data) => {
  const columnLength = [];
  data.forEach((row) => {
    Object.values(row).forEach((val, i) => {
      const len = columnLength[i];
      if (!len) {
        columnLength[i] = getLength(val);
      } else {
        columnLength[i] = Math.max(len, getLength(val));
      }
    });
  });
  return columnLength.map((wch) => ({ wch }));
};
