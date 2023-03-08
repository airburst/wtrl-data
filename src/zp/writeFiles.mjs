import fs from "fs";
import Workbook from "../Export/Excel.mjs";

const FOLDER = "files";

export const writeToExcel = (race, results) =>
  new Promise(async (resolve, reject) => {
    const reportName = `results-zp-${race}.xlsx`;
    let workbook = new Workbook();

    try {
      await workbook.addSheet("Race Results", results);

      // Save to local file system
      await workbook.save(`${FOLDER}/${reportName}`);

      resolve();
    } catch (e) {
      console.error(e);
      reject(Error(e.message));
    }

    workbook = null;
  });

export const writeFile = (filename, content) => {
  fs.writeFile(`${process.cwd()}/${FOLDER}/${filename}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
