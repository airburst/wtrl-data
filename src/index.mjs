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

const getData = async ({ race, season }) => {
  const wtrlApi = new WtrlApi();

  await wtrlApi.login(WTRL_USER, WTRL_PASSWORD);

  const divisionList = getDivisions();
  const fetchPromises = divisionList.map((division) =>
    wtrlApi.getData({ division, race, season })
  );

  const results = await Promise.all(fetchPromises);

  // Filter out empty records (no data)
  const resultsWithData = results.filter((r) => r.data?.length > 0);

  console.log({
    total: results.length,
    goodRecords: resultsWithData.length,
    emptyRecords: results.length - resultsWithData.length,
  });

  await writeFile(`race-${race}-results.json`, JSON.stringify(resultsWithData));

  // const { teamData, riderData } = transformResults(resultsWithData);

  await doWtrlExport({
    stage: race,
    results: transformResults(resultsWithData),
  });
};

getData({ season: 8, race: 2 });
