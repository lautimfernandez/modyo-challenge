import axios from "axios";

const api = axios.create({
  baseURL: "https://fed-team.modyo.cloud/api",
});

export const getImages = async () => {
  const response = await api.get(
    "/content/spaces/animals/types/game/entries?per_page=20"
  );
  return response.data;
};
