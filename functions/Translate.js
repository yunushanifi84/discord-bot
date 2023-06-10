const axios = require("axios");
const { xrapidApi } = require("../config.json");

async function TurkishTranslate(text) {
  const encodedParams = new URLSearchParams();
  encodedParams.set("source_language", "auto");
  encodedParams.set("target_language", "tr");
  encodedParams.set("text", text);
  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": xrapidApi,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };
  try {
    const response = await axios.request(options);
    const translation = response.data.data.translatedText;
    return translation;
  } catch (error) {
    return text;
  }
}

module.exports = { TurkishTranslate };
