import xlsx from "xlsx";
import { getColumnLengths, makeFilename } from "./utils.mjs";

export default class Workbook {
  constructor() {
    this.SheetNames = [];
    this.Sheets = {};
  }

  // Write a flat, tabular json array {data} into sheet {name}
  addSheet(name, data) {
    this.SheetNames.push(name);
    const converted = xlsx.utils.json_to_sheet(data);
    this.Sheets[name] = converted;
    this.formatColumns(name, data);
  }

  formatColumns(name, data) {
    const colLengths = getColumnLengths(data);
    this.Sheets[name]["!cols"] = colLengths;
  }

  save(filename = makeFilename()) {
    xlsx.writeFile(this, filename);
  }
}

/*
// Add formulae to calculate slope and intercept of trendline
const worksheet = this.Sheets[name];

worksheet["C1"] = { v: "Slope" };
worksheet["D1"] = { f: `INDEX(LINEST(LN(B1:B${data.length}), A1:A${data.length}), 1)` };

// Write new range to worksheet
worksheet["!ref"] = xlsx.utils.encode_range({
  s: { r: 0, c: 0 },
  e: { r: data.length, c: data.length + 2 }, // Added 2 columns
});
*/
