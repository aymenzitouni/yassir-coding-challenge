import supertest from "supertest";
import { createServer } from "../../helpers";
import { apisHelper } from "../../helpers";
import { airQualityService } from "../../services";
import configs from "../../configs";

const { server } = createServer();
const BASIC_PATH = "/api/air-quality";

describe("air-quality-controller", () => {
  describe("get-air-quality-by-longitude-and-latitude", () => {
    describe("given a valid longitude and latitude", () => {
      it("it sould return pollution data", async () => {
        jest
          .spyOn(apisHelper.airQualityApi, "getAirQualityByZone")
          .mockResolvedValue({
            ts: "2023-03-20T22:00:00.000Z",
            aqius: 61,
            mainus: "p2",
            aqicn: 32,
            maincn: "p1",
          });
        const {
          body,
          status,
          headers = [],
        } = await supertest(server)
          .get(
            `${BASIC_PATH}?longitude=${configs.ZONE_CORDINATES.LONGITUDE}&latitude=${configs.ZONE_CORDINATES.LATITUDE}`
          )
          .send();
        expect(status).toBe(200);
        expect(body).toEqual({
          result: {
            pollution: {
              ts: "2023-03-20T22:00:00.000Z",
              aqius: 61,
              mainus: "p2",
              aqicn: 32,
              maincn: "p1",
            },
          },
        });
      });
    });
  });
  describe("get-most-polluted-zone", () => {
    it("should return an object containing data at the most poullted time", async () => {
      jest
        .spyOn(airQualityService, "findAirQualityRecordWithHighestPollution")
        .mockResolvedValue({
          id: 1,
          longitude: configs.ZONE_CORDINATES.LONGITUDE,
          latitude: configs.ZONE_CORDINATES.LATITUDE,
          aqius: 61,
          mainus: "p2",
          aqicn: 32,
          maincn: "p1",
          createdAt: new Date("2023-03-20T22:00:00.000Z"),
        });

      const {
        body,
        status,
        headers = [],
      } = await supertest(server)
        .get(`${BASIC_PATH}/most-polluted-time-zone`)
        .send();
      console.log("@body", body);

      expect(status).toBe(200);
      expect(body).toEqual({
        result: {
          id: 1,
          longitude: configs.ZONE_CORDINATES.LONGITUDE,
          latitude: configs.ZONE_CORDINATES.LATITUDE,
          aqius: 61,
          mainus: "p2",
          aqicn: 32,
          maincn: "p1",
          createdAt: "2023-03-20T22:00:00.000Z",
        },
      });
    });
  });
});
