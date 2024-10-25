import axios from "axios";

const URL = "http://numbersapi.com";

export async function fetchFact(type: String, query: Number | String) {
  try {
    const result = await axios.get(`${URL}/${query}/${type}`);
    console.log(result);

    return result;
  } catch (e) {
    alert("Server Error");
  }
}
