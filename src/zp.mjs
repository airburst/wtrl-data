import "dotenv/config";
import fs from "fs";
import ZPApi from "./ZPApi.mjs";
import Workbook from "./Export/Excel.mjs";

export const writeToExcel = (race, results) =>
  new Promise(async (resolve, reject) => {
    const reportName = `results-zp-${race}.xlsx`;
    let workbook = new Workbook();

    try {
      await workbook.addSheet("Race Results", results);

      // Save to local file system
      await workbook.save(reportName);

      resolve();
    } catch (e) {
      console.error(e);
      reject(Error(e.message));
    }

    workbook = null;
  });

const writeFile = (filename, content) => {
  fs.writeFile(`${process.cwd()}/${filename}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const makeNumber = (field) => +field[0];

const makeTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) - hours * 60;
  const remainder = Math.floor(seconds - hours * 3600 - minutes * 60);
  const time = `${hours}:${minutes.toString().padStart(2, "0")}:${remainder
    .toString()
    .padStart(2, "0")}`;

  return time;
};

const transformResult = (result) => {
  if (!result) {
    return;
  }

  const swapList = ["watts", "wkg", "bpm", "race_time", "wkg_ftp", "wkg1200"];
  const transformed = {};

  Object.entries(result).forEach(([key, value]) => {
    if (swapList.includes(key)) {
      transformed[key] = makeNumber(value);
    } else {
      transformed[key] = value;
    }
    // Format time
    if (key === "race_time") {
      transformed[key] = makeTime(transformed[key]);
    }
  });

  return transformed;
};

const getData = async (race) => {
  // Copy fetch cookie from website
  const zpApi = new ZPApi();
  const results = await zpApi.getData({ race });

  console.log("🚀 ~ Results:", results?.data?.length);

  writeFile(`zp-${race}-results.json`, JSON.stringify(results));

  const cleanResults = results.data.map((result) => transformResult(result));

  await writeToExcel(race, cleanResults);
};

// getData("3190428");
getData("3563534");
