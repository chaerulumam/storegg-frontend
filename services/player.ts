import axios from "axios";

export async function getFeaturedGame() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = "api/v1";
  const URL_ENDPOINT = "players/landingpage";

  const response = await axios.get(
    `${ROOT_API}/${API_VERSION}/${URL_ENDPOINT}`
  );
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailVoucher() {
  return null;
}