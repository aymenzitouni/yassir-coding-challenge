import axios from "axios";

const get = async ({ url }: { url: string }) => {
  return await axios.get(url);
};

export default { get };
