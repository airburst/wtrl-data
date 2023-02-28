import fetch from "node-fetch";

const BASE_URL = "https://zwiftpower.com/cache3/results";

const options = {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    pragma: "no-cache",
    "sec-ch-ua":
      '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "phpbb3_lswlk_k=; _ga=GA1.2.2017571960.1677587280; _gid=GA1.2.381714881.1677587280; CloudFront-Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly96d2lmdHBvd2VyLmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ3NDgzNjQ3fX19XX0_; CloudFront-Signature=7f6sOCtlQZRe90rpvVq9l84rRNbxl4HBsyEqJByfkMsXWzVe2JkpWGGMZ~KZ1W5w9lm~wYTaQM8ZHFO-MCBokO9EsyeeAcxFOd7gIu5OTcFFFankW4L6RBR-o3oS48dIi22zpWjLZAyku4SXlXbhtMUJrLsASioVG~UDe00Kvc3OWw~WAf0a8LkrdMxG4kIOlb7vvKYEKONo7IO5-JxNVq5WDwMJqB43qRrI2dSK3TMDUsugJHd6QmWpaPxQPHDxrH7MkuBaumdUS1138NbwLL8KwVfcLlV~VnooURL~ID~9lLQHfQ11tkASNzeJgYczkBXTGiKeOh9npbElvqlfOg__; CloudFront-Key-Pair-Id=K2HE75OK1CK137; phpbb3_lswlk_u=139153; phpbb3_lswlk_sid=ba47c488b967faa36fe991c71bb2d692; _dd_s=rum=1&id=533292ac-e409-458d-bba0-34a0cd631e62&created=1677587280251&expire=1677588343943; _gat_gtag_UA_77990933_1=1",
    Referer: "https://zwiftpower.com/events.php?zid=3157418",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: null,
  method: "GET",
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
}

export default ZPApi;
