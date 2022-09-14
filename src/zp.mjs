import "dotenv/config";
import fs from "fs";
import ZPApi from "./ZPApi.mjs";

const writeFile = (filename, content) => {
  fs.writeFile(`${process.cwd()}/${filename}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const getData = async (race) => {
  const zpApi = new ZPApi();
  const results = await zpApi.getData({ race });

  // const emptyRecords = results.reduce(
  //   (prev, cur) => (cur.data.length === 0 ? (prev += 1) : prev),
  //   0
  // );

  console.log({ results });

  // writeFile(`race-${race}-results.json`, JSON.stringify(results));

  // const { teamData, riderData } = transformResults(results);

  // await doWtrlExport({ stage: race, results: transformResults(results) });
};

getData("2873274");
