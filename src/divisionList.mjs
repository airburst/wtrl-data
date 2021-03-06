const DIVISIONS = [
  { division: "021B1", name: "APAC Division B1 (Women's)" },
  { division: "021C1", name: "APAC Division C1 (Women's)" },
  { division: "021D1", name: "APAC Division D1 (Women's)" },
  { division: "033A1", name: "EMEA Central Division A1 (Women's)" },
  { division: "033B1", name: "EMEA Central Division B1 (Women's)" },
  { division: "033C1", name: "EMEA Central Division C1 (Women's)" },
  { division: "033C2", name: "EMEA Central Division C2 (Women's)" },
  { division: "033D1", name: "EMEA Central Division D1 (Women's)" },
  { division: "036A1", name: "EMEA West Division A1 (Women's)" },
  { division: "036B1", name: "EMEA West Division B1 (Women's)" },
  { division: "036B2", name: "EMEA West Division B2 (Women's)" },
  { division: "036C1", name: "EMEA West Division C1 (Women's)" },
  { division: "036C2", name: "EMEA West Division C2 (Women's)" },
  { division: "036D1", name: "EMEA West Division D1 (Women's)" },
  { division: "037A1", name: "EMEA North Division A1 (Women's)" },
  { division: "037B1", name: "EMEA North Division B1 (Women's)" },
  { division: "037C1", name: "EMEA North Division C1 (Women's)" },
  { division: "037C2", name: "EMEA North Division C2 (Women's)" },
  { division: "037D1", name: "EMEA North Division D1 (Women's)" },
  { division: "052A1", name: "AMERICAS EAST Division A1 (Women's)" },
  { division: "052B1", name: "AMERICAS EAST Division B1 (Women's)" },
  { division: "052B2", name: "AMERICAS EAST Division B2 (Women's)" },
  { division: "052C1", name: "AMERICAS EAST Division C1 (Women's)" },
  { division: "052C2", name: "AMERICAS EAST Division C2 (Women's)" },
  { division: "052D1", name: "AMERICAS EAST Division D1 (Women's)" },
  { division: "052D2", name: "AMERICAS EAST Division D2 (Women's)" },
  { division: "053B1", name: "AMERICAS WEST Division B1 (Women's)" },
  { division: "053C1", name: "AMERICAS WEST Division C1 (Women's)" },
  { division: "099A1", name: "ZRL PLAYOFFS - A1 Division (Women's)" },
  { division: "099B1", name: "ZRL PLAYOFFS - B1 Division (Women's)" },
  { division: "099C1", name: "ZRL PLAYOFFS - C1 Division (Women's)" },
  { division: "099D1", name: "ZRL PLAYOFFS - D1 Division (Women's)" },
  { division: "211B1", name: "OCEANIA Division B1 (Men's/Mixed)" },
  { division: "211C1", name: "OCEANIA Division C1 (Men's/Mixed)" },
  { division: "221A1", name: "APAC Division A1 (Men's/Mixed)" },
  { division: "221A2", name: "APAC Division A2 (Men's/Mixed)" },
  { division: "221B1", name: "APAC Division B1 (Men's/Mixed)" },
  { division: "221B2", name: "APAC Division B2 (Men's/Mixed)" },
  { division: "221C1", name: "APAC Division C1 (Men's/Mixed)" },
  { division: "221C2", name: "APAC Division C2 (Men's/Mixed)" },
  { division: "221D1", name: "APAC Division D1 (Men's/Mixed)" },
  { division: "231A1", name: "EMEA Middle East Division A1 (Men's/Mixed)" },
  { division: "231A2", name: "EMEA Middle East Division A2 (Men's/Mixed)" },
  { division: "231B1", name: "EMEA Middle East Division B1 (Men's/Mixed)" },
  { division: "231B2", name: "EMEA Middle East Division B2 (Men's/Mixed)" },
  { division: "231C1", name: "EMEA Middle East Division C1 (Men's/Mixed)" },
  { division: "232A1", name: "EMEA East Division A1 (Men's/Mixed)" },
  { division: "232A2", name: "EMEA East Division A2 (Men's/Mixed)" },
  { division: "232A3", name: "EMEA East Division A3 (Men's/Mixed)" },
  { division: "232B1", name: "EMEA East Division B1 (Men's/Mixed)" },
  { division: "232B2", name: "EMEA East Division B2 (Men's/Mixed)" },
  { division: "232B3", name: "EMEA East Division B3 (Men's/Mixed)" },
  { division: "232B4", name: "EMEA East Division B4 (Men's/Mixed)" },
  { division: "232B5", name: "EMEA East Division B5 (Men's/Mixed)" },
  { division: "232C1", name: "EMEA East Division C1 (Men's/Mixed)" },
  { division: "232C2", name: "EMEA East Division C2 (Men's/Mixed)" },
  { division: "232D1", name: "EMEA East Division D1 (Men's/Mixed)" },
  { division: "233A1", name: "EMEA Central Division A1 (Men's/Mixed)" },
  { division: "233A2", name: "EMEA Central Division A2 (Men's/Mixed)" },
  { division: "233A3", name: "EMEA Central Division A3 (Men's/Mixed)" },
  { division: "233B1", name: "EMEA Central Division B1 (Men's/Mixed)" },
  { division: "233B2", name: "EMEA Central Division B2 (Men's/Mixed)" },
  { division: "233B3", name: "EMEA Central Division B3 (Men's/Mixed)" },
  { division: "233B4", name: "EMEA Central Division B4 (Men's/Mixed)" },
  { division: "233B5", name: "EMEA Central Division B5 (Men's/Mixed)" },
  { division: "233C1", name: "EMEA Central Division C1 (Men's/Mixed)" },
  { division: "233C2", name: "EMEA Central Division C2 (Men's/Mixed)" },
  { division: "233C3", name: "EMEA Central Division C3 (Men's/Mixed)" },
  { division: "233D1", name: "EMEA Central Division D1 (Men's/Mixed)" },
  { division: "234A1", name: "EMEA Africa Division A1 (Men's/Mixed)" },
  { division: "234A2", name: "EMEA Africa Division A2 (Men's/Mixed)" },
  { division: "234B1", name: "EMEA Africa Division B1 (Men's/Mixed)" },
  { division: "234B2", name: "EMEA Africa Division B2 (Men's/Mixed)" },
  { division: "234B3", name: "EMEA Africa Division B3 (Men's/Mixed)" },
  { division: "234B4", name: "EMEA Africa Division B4 (Men's/Mixed)" },
  { division: "234C1", name: "EMEA Africa Division C1 (Men's/Mixed)" },
  { division: "234C2", name: "EMEA Africa Division C2 (Men's/Mixed)" },
  { division: "235A1", name: "EMEA South Division A1 (Men's/Mixed)" },
  { division: "235A2", name: "EMEA South Division A2 (Men's/Mixed)" },
  { division: "235A3", name: "EMEA South Division A3 (Men's/Mixed)" },
  { division: "235B1", name: "EMEA South Division B1 (Men's/Mixed)" },
  { division: "235B2", name: "EMEA South Division B2 (Men's/Mixed)" },
  { division: "235B3", name: "EMEA South Division B3 (Men's/Mixed)" },
  { division: "235B4", name: "EMEA South Division B4 (Men's/Mixed)" },
  { division: "235C1", name: "EMEA South Division C1 (Men's/Mixed)" },
  { division: "235C2", name: "EMEA South Division C2 (Men's/Mixed)" },
  { division: "235C3", name: "EMEA South Division C3 (Men's/Mixed)" },
  { division: "235C4", name: "EMEA South Division C4 (Men's/Mixed)" },
  { division: "235D1", name: "EMEA South Division D1 (Men's/Mixed)" },
  { division: "236A1", name: "EMEA West Division A1 (Men's/Mixed)" },
  { division: "236A2", name: "EMEA West Division A2 (Men's/Mixed)" },
  { division: "236B1", name: "EMEA West Division B1 (Men's/Mixed)" },
  { division: "236B2", name: "EMEA West Division B2 (Men's/Mixed)" },
  { division: "236B3", name: "EMEA West Division B3 (Men's/Mixed)" },
  { division: "236B4", name: "EMEA West Division B4 (Men's/Mixed)" },
  { division: "236C1", name: "EMEA West Division C1 (Men's/Mixed)" },
  { division: "236C2", name: "EMEA West Division C2 (Men's/Mixed)" },
  { division: "236C3", name: "EMEA West Division C3 (Men's/Mixed)" },
  { division: "236D1", name: "EMEA West Division D1 (Men's/Mixed)" },
  { division: "237A1", name: "EMEA North Division A1 (Men's/Mixed)" },
  { division: "237A2", name: "EMEA North Division A2 (Men's/Mixed)" },
  { division: "237B1", name: "EMEA North Division B1 (Men's/Mixed)" },
  { division: "237B2", name: "EMEA North Division B2 (Men's/Mixed)" },
  { division: "237B3", name: "EMEA North Division B3 (Men's/Mixed)" },
  { division: "237B4", name: "EMEA North Division B4 (Men's/Mixed)" },
  { division: "237C1", name: "EMEA North Division C1 (Men's/Mixed)" },
  { division: "237C2", name: "EMEA North Division C2 (Men's/Mixed)" },
  { division: "237C3", name: "EMEA North Division C3 (Men's/Mixed)" },
  { division: "238A1", name: "EMEA North East Division A1 (Men's/Mixed)" },
  { division: "238A2", name: "EMEA North East Division A2 (Men's/Mixed)" },
  { division: "238B1", name: "EMEA North East Division B1 (Men's/Mixed)" },
  { division: "238B2", name: "EMEA North East Division B2 (Men's/Mixed)" },
  { division: "238B3", name: "EMEA North East Division B3 (Men's/Mixed)" },
  { division: "238C1", name: "EMEA North East Division C1 (Men's/Mixed)" },
  { division: "238C2", name: "EMEA North East Division C2 (Men's/Mixed)" },
  { division: "238D1", name: "EMEA North East Division D1 (Men's/Mixed)" },
  { division: "239A1", name: "EMEA South West Division A1 (Men's/Mixed)" },
  { division: "239A2", name: "EMEA South West Division A2 (Men's/Mixed)" },
  { division: "239B1", name: "EMEA South West Division B1 (Men's/Mixed)" },
  { division: "239B2", name: "EMEA South West Division B2 (Men's/Mixed)" },
  { division: "239B3", name: "EMEA South West Division B3 (Men's/Mixed)" },
  { division: "239C1", name: "EMEA South West Division C1 (Men's/Mixed)" },
  { division: "239C2", name: "EMEA South West Division C2 (Men's/Mixed)" },
  { division: "240A1", name: "EMEA North West Division A1 (Men's/Mixed)" },
  { division: "240B1", name: "EMEA North West Division B1 (Men's/Mixed)" },
  { division: "240B2", name: "EMEA North West Division B2 (Men's/Mixed)" },
  { division: "240B3", name: "EMEA North West Division B3 (Men's/Mixed)" },
  { division: "240C1", name: "EMEA North West Division C1 (Men's/Mixed)" },
  { division: "251A1", name: "ATLANTIC Division A1 (Men's/Mixed)" },
  { division: "251A2", name: "ATLANTIC Division A2 (Men's/Mixed)" },
  { division: "251B1", name: "ATLANTIC Division B1 (Men's/Mixed)" },
  { division: "251B2", name: "ATLANTIC Division B2 (Men's/Mixed)" },
  { division: "251C1", name: "ATLANTIC Division C1 (Men's/Mixed)" },
  { division: "252A1", name: "AMERICAS EAST Division A1 (Men's/Mixed)" },
  { division: "252A2", name: "AMERICAS EAST Division A2 (Men's/Mixed)" },
  { division: "252A3", name: "AMERICAS EAST Division A3 (Men's/Mixed)" },
  { division: "252B1", name: "AMERICAS EAST Division B1 (Men's/Mixed)" },
  { division: "252B2", name: "AMERICAS EAST Division B2 (Men's/Mixed)" },
  { division: "252B3", name: "AMERICAS EAST Division B3 (Men's/Mixed)" },
  { division: "252B4", name: "AMERICAS EAST Division B4 (Men's/Mixed)" },
  { division: "252B5", name: "AMERICAS EAST Division B5 (Men's/Mixed)" },
  { division: "252C1", name: "AMERICAS EAST Division C1 (Men's/Mixed)" },
  { division: "252C2", name: "AMERICAS EAST Division C2 (Men's/Mixed)" },
  { division: "252C3", name: "AMERICAS EAST Division C3 (Men's/Mixed)" },
  { division: "252C4", name: "AMERICAS EAST Division C4 (Men's/Mixed)" },
  { division: "252D1", name: "AMERICAS EAST Division D1 (Men's/Mixed)" },
  { division: "253A1", name: "AMERICAS WEST Division A1 (Men's/Mixed)" },
  { division: "253B1", name: "AMERICAS WEST Division B1 (Men's/Mixed)" },
  { division: "253B2", name: "AMERICAS WEST Division B2 (Men's/Mixed)" },
  { division: "253B3", name: "AMERICAS WEST Division B3 (Men's/Mixed)" },
  { division: "253C1", name: "AMERICAS WEST Division C1 (Men's/Mixed)" },
  { division: "253C2", name: "AMERICAS WEST Division C2 (Men's/Mixed)" },
  { division: "253D1", name: "AMERICAS WEST Division D1 (Men's/Mixed)" },
  { division: "254A1", name: "AMERICAS CENTRAL Division A1 (Men's/Mixed)" },
  { division: "254A2", name: "AMERICAS CENTRAL Division A2 (Men's/Mixed)" },
  { division: "254B1", name: "AMERICAS CENTRAL Division B1 (Men's/Mixed)" },
  { division: "254B2", name: "AMERICAS CENTRAL Division B2 (Men's/Mixed)" },
  { division: "254B3", name: "AMERICAS CENTRAL Division B3 (Men's/Mixed)" },
  { division: "254C1", name: "AMERICAS CENTRAL Division C1 (Men's/Mixed)" },
  { division: "254C2", name: "AMERICAS CENTRAL Division C2 (Men's/Mixed)" },
  { division: "254D1", name: "AMERICAS CENTRAL Division D1 (Men's/Mixed)" },
  { division: "299A1", name: "ZRL PLAYOFFS - A1 Division (Men's/Mixed)" },
  { division: "299B1", name: "ZRL PLAYOFFS - B1 Division (Men's/Mixed)" },
  { division: "299C1", name: "ZRL PLAYOFFS - C1 Division (Men's/Mixed)" },
  { division: "299D1", name: "ZRL PLAYOFFS - D1 Division (Men's/Mixed)" },
];

export const getDivisions = () =>
  DIVISIONS.map(({ division, name }) => {
    const race = name
      .replace(" (Women's)", "")
      .replace(" (Men's/Mixed)", "")
      .replace(" Division", "")
      .replace(" - ", " ");
    const parts = race.split(" ");
    const cat = parts[parts.length - 1][0];

    return {
      div: division,
      name,
      region: parts[0],
      cat,
      mix: name.indexOf("(Women's)") > -1 ? "W" : "M",
    };
  });

export default DIVISIONS;
