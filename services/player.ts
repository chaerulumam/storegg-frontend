import axios from "axios";
import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getFeaturedGame() {
  const URL_ENDPOINT = "players/landingpage";

  const response = await axios.get(
    `${ROOT_API}/${API_VERSION}/${URL_ENDPOINT}`
  );
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailVoucher(id: string) {
  const URL_ENDPOINT = `players/${id}/detail`;

  const response = await axios.get(
    `${ROOT_API}/${API_VERSION}/${URL_ENDPOINT}`
  );
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getGameCategory() {
  const URL_ENDPOINT = `players/category`;

  const response = await axios.get(
    `${ROOT_API}/${API_VERSION}/${URL_ENDPOINT}`
  );
  const axiosResponse = response.data;

  return axiosResponse.data;
}
