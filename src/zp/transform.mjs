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

// Pluck relevant data from view
const getViewData = (view) => {
  const { tname: team, name, pos, position_in_cat } = view;

  return { team, name, pos, position_in_cat };
};

export const makeViewMap = (viewResults) => {
  const viewMap = new Map();

  (viewResults?.data || []).forEach((view) => {
    viewMap.set(view.zwid.toString(), getViewData(view));
  });
  return viewMap;
};

export const transformResult = (result, viewMap) => {
  // console.log("🚀 ~ Transform zwift id:", result.zwid);
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
  // Add view data
  const viewData = viewMap.get(transformed.zwid) || {};

  return { ...viewData, ...transformed };
};
