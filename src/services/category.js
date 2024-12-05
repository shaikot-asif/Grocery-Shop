import axios from "axios";

export const getCategory = async () => {
  try {
    const data = await axios.get(
      `https://api-fresh-harvest.code-commando.com/api/v1/category`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
