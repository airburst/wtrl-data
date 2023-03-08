import "dotenv/config";
import ZPApi from "./ZPApi.mjs";
import { makeViewMap, transformResult } from "./transform.mjs";
import { writeToExcel, writeFile } from "./writeFiles.mjs";
import options from "./options.mjs";

const getData = async (race) => {
  const zpApi = new ZPApi(race, options);
  const { viewResults, zwiftResults } = await zpApi.getData();

  console.log("🚀 ~ Results:", zwiftResults?.data?.length);
  writeFile(`zp-${race}-results.json`, JSON.stringify(zwiftResults));
  writeFile(`zp-view-${race}-results.json`, JSON.stringify(viewResults));

  const viewMap = makeViewMap(viewResults);
  const cleanResults = zwiftResults.data.map((result) =>
    transformResult(result, viewMap)
  );

  await writeToExcel(race, cleanResults);
};

// getData("3190428");
// getData("3563534");
getData("3565244");
