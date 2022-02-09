import Workbook from "./Excel.mjs";
import { makeFilename } from "./utils.mjs";

export const doWtrlExport = (wtrl) =>
  new Promise(async (resolve, reject) => {
    const reportName = makeFilename(wtrl.stage);
    let workbook = new Workbook();

    try {
      const { teamData, riderData } = wtrl.results;
      await workbook.addSheet("Team Results", teamData);
      await workbook.addSheet("Rider Results", riderData);

      // Save to local file system
      await workbook.save(reportName);

      resolve();
    } catch (e) {
      console.error(e);
      reject(Error(e.message));
    }

    workbook = null;
  });
