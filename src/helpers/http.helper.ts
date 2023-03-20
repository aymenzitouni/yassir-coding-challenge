import axios, { AxiosResponse } from "axios";

export const httpHelper = {
  get: async ({ url }: { url: string }): Promise<AxiosResponse<any>> => {
    return await axios.get(url);
  },
};
