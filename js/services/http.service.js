class Http {
  static get = async (url, headers = {}) => {
    const config = {
      method: "GET",
      headers: headers,
    };

    console.log("GET", url);

    const response = await fetch(url, config);
    if (!response.ok) {
      const { status, message: statusText } = response;
      return Promise.reject({
        status,
        message,
      });
    }
    await this._delay(response);
    return response.json();
  };

  static _delay = (response) =>
    new Promise((resolve) =>
      setTimeout(
        resolve.bind(null, response),
        parseInt(Math.random() * 2000 + 500)
      )
    );

  static getQueryString = (params) =>
    Object.keys(params)
      .filter((key) => !!params[key])
      .map((key) => `${key}=${params[key]}`)
      .join("&");

  notImplemented = (url, headers) => Promise.reject("Not implemented");
}

export default Http;
