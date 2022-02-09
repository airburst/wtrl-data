export default (results = []) => {
  const flattened = results.flatMap(({ div, region, cat, mix, data }) =>
    data.map((team) => ({ div, region, cat, mix, ...team }))
  );

  const teamData = flattened.map(({ a, ...team }) => team);
  const riderData = flattened.flatMap(({ a, ...team }) =>
    a.map((rider) => ({
      teamName: team.teamname,
      ...rider,
    }))
  );
  return { teamData, riderData };
};
