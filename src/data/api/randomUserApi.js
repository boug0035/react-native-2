import axios from "axios";

const BASE_URL = "https://random-data-api.com/api/v2/users";

export const fetchRandomUsers = async (count = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}?size=${count}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random users:", error);
    throw error;
  }
};
