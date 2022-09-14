import * as https from "https";
import fetch from "node-fetch";

const BASE_URL = "https://zwiftpower.com/cache3/results";

// fetch("https://zwiftpower.com/cache3/results/2858356_zwift.json?_=1646857984152", {
//   "headers": {
//     "accept": "application/json, text/javascript, */*; q=0.01",
//     "accept-language": "en-US,en;q=0.9",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest",

//     "Referer": "https://zwiftpower.com/events.php?zid=2858356",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });

const options = {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    // "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "_ga=GA1.2.534719630.1646856775; _gid=GA1.2.598181643.1646856775; phpbb3_lswlk_k=; _gat_gtag_UA_77990933_1=1; CloudFront-Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly96d2lmdHBvd2VyLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ3NDgzNjQ3fX19XX0_; CloudFront-Signature=7f6sOCtlQZRe90rpvVq9l84rRNbxl4HBsyEqJByfkMsXWzVe2JkpWGGMZ~KZ1W5w9lm~wYTaQM8ZHFO-MCBokO9EsyeeAcxFOd7gIu5OTcFFFankW4L6RBR-o3oS48dIi22zpWjLZAyku4SXlXbhtMUJrLsASioVG~UDe00Kvc3OWw~WAf0a8LkrdMxG4kIOlb7vvKYEKONo7IO5-JxNVq5WDwMJqB43qRrI2dSK3TMDUsugJHd6QmWpaPxQPHDxrH7MkuBaumdUS1138NbwLL8KwVfcLlV~VnooURL~ID~9lLQHfQ11tkASNzeJgYczkBXTGiKeOh9npbElvqlfOg__; CloudFront-Key-Pair-Id=K2HE75OK1CK137; phpbb3_lswlk_u=139153; phpbb3_lswlk_sid=60b0c2e0d1aac4245c67a3e5983aa98c; _dd_s=rum=1&id=d8e2e7a7-1bc0-4387-bf09-71eafe7d6d0e&created=1646856774582&expire=1646858884081",
    Referer: "https://zwiftpower.com/events.php?zid=2873274",
    // "Referrer-Policy": "strict-origin-when-cross-origin",
  },
};

export class ZPApi {
  async getData({ race }) {
    return fetch(`${BASE_URL}/${race}_zwift.json?_=${new Date().getTime()}`, {
      body: null,
      method: "GET",
      ...options,
    })
      .then((res) => res.json())
      .then((data) => data)
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

export default ZPApi;
