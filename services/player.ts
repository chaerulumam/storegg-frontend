import axios from "axios";

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

export async function getDetailVoucher(id) {
  const URL_ENDPOINT = `players/${id}/detail`;

  const response = await axios.get(
    `${ROOT_API}/${API_VERSION}/${URL_ENDPOINT}`
  );
  const axiosResponse = response.data;

  return axiosResponse.data;
}
