import "dotenv/config";
import fs from "fs";
import WtrlApi from "./WtrlApi.mjs";
import { getDivisions } from "./divisionList.mjs";
import { doWtrlExport } from "./Export/index.mjs";
import transformResults from "./transformResults.mjs";

const { WTRL_USER, WTRL_PASSWORD } = process.env;

const writeFile = (filename, content) => {
  fs.writeFile(`${process.cwd()}/${filename}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const getData = async (race) => {
  const wtrlApi = new WtrlApi();

  await wtrlApi.login(WTRL_USER, WTRL_PASSWORD);

  const divisionList = getDivisions();
  const fetchPromises = divisionList.map((division) =>
    wtrlApi.getData({ division, race })
  );

  const results = await Promise.all(fetchPromises);
  const emptyRecords = results.reduce(
    (prev, cur) => (cur.data.length === 0 ? (prev += 1) : prev),
    0
  );

  console.log({ total: results.length, emptyRecords });

  writeFile(`race-${race}-results.json`, JSON.stringify(results));

  const { teamData, riderData } = transformResults(results);

  await doWtrlExport({ stage: race, results: transformResults(results) });
};

getData(5);
