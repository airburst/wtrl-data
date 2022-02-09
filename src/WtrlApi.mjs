import * as https from "https";
import fetch from "node-fetch";

const BASE_URL = "https://www.wtrl.racing/wtrl_api/json/cache.php";

const options = {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "access-control-allow-origin": "https://www.wtrl.racing",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua":
      '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "wtrl-api-version": "2.5",
    "wtrl-token": "22257",
    "x-requested-with": "XMLHttpRequest",
    // cookie: "wtrl_sid=f8f91be216c0c223d5bbd893c9cc26f9;",
    Referer: "https://www.wtrl.racing/zrl-results/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
};

export class WtrlApi {
  // Using https.request allows for correct login
  async login(email, password) {
    const xFormBody = `email=${encodeURI(email)}&password=${encodeURI(
      password
    )}&rememberMe=1&loginSubmit=Sign+In`;

    return this.performRequest(xFormBody);
  }

  async getData({ season = 5, race = 3, division }) {
    const { div, region, cat, mix } = division;

    return fetch(
      `${BASE_URL}?competition=zrl&do=results&season=${season}&race=${race}&division=${div}`,
      {
        body: null,
        method: "GET",
        ...options,
      }
    )
      .then((res) => res.json())
      .then((data) => ({ div, region, cat, mix, ...data }))
      .catch((err) => console.error(err));
  }

  performRequest(requestBody) {
    return new Promise((resolve, reject) => {
      const authOptions = {
        hostname: "www.wtrl.racing",
        port: 443,
        path: "/userAccount.php",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(requestBody),
          Referer: "https://www.wtrl.racing/login/",
        },
      };

      const req = https.request(authOptions, function (res) {
        const cookie = res.headers["set-cookie"]?.[0];
        options.headers.cookie = cookie;
        console.log("Cookie:", cookie);

        resolve(cookie);
      });
      // Make sure to write the request body.
      req.write(requestBody);
      req.end();
      req.on("error", function (e) {
        reject(e);
      });
    });
  }
}

export default WtrlApi;
