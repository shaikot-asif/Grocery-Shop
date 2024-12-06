import axios from "axios";

export const getProducts = async () => {
  try {
    const data = await axios.get(
      `https://api-fresh-harvest.code-commando.com/api/v1/products`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
