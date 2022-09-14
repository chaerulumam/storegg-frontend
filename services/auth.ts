import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data) {
  const URL_ENDPOINT = "auth/signup";

  const response = await axios.post(
    `${ROOT_API}/${API_VERSION}/${URL_ENDPOINT}`,
    data
  );
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function setSignIn() {
  return null;
}
