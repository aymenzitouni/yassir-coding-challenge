import axios from "axios";
import { httpHelper } from "../../../helpers";

jest.mock("axios");

describe("http helper", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("get", () => {
    it("should call axios.get with the correct URL", async () => {
      const url = "https://example.com/api/data";
      const expectedResponse = { data: "test data" };
      //  mockign response for axios.get
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
        expectedResponse
      );
      const response = await httpHelper.get({ url });
      expect(axios.get).toHaveBeenCalledWith(url);
      expect(response).toEqual(expectedResponse);
    });
  });
});
