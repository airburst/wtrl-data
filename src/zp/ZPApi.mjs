import fetch from "node-fetch";

const BASE_URL = "https://zwiftpower.com/cache3/results";

export class ZPApi {
  constructor(race, options) {
    this.race = race;
    this.options = options;
  }

  fetchData(url) {
    return fetch(url, {
      body: null,
      method: "GET",
      ...this.options,
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  }

  async getData() {
    const dt = new Date().getTime();
    const viewResults = await this.fetchData(
      `${BASE_URL}/${this.race}_view.json?_=${dt}`
    );
    const zwiftResults = await this.fetchData(
      `${BASE_URL}/${this.race}_zwift.json?_=${dt}`
    );

    return {
      viewResults,
      zwiftResults,
    };
  }
}

export default ZPApi;
