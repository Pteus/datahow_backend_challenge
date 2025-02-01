import request from "supertest";
import logsApp from "../src/logsApp";
import { getUniqueIpCount } from "../src/services/ipServices";

describe("POST /logs", () => {
  it("should add a new unique IP address and update the count", async () => {
    const newIp = "83.150.59.250";

    // Send a POST request with a new IP address
    const response = await request(logsApp)
      .post("/logs")
      .send({
        timestamp: "2025-01-30T10:00:00Z",
        ip: newIp,
        url: "/home",
      })
      .expect(200);

    const count = getUniqueIpCount();
    expect(count).toBe(1);
  });

  it("should not count duplicate IP addresses", async () => {
    const existingIp = "83.150.59.250";

    // Send a POST request with the same IP address again
    const response = await request(logsApp)
      .post("/logs")
      .send({
        timestamp: "2025-01-30T10:00:00Z",
        ip: existingIp,
        url: "/about",
      })
      .expect(200);

    const count = getUniqueIpCount();
    expect(count).toBe(1);
  });

  it("should another add a new unique IP address and update the count", async () => {
    const newIp = "83.150.59.251";

    // Send a POST request with a new IP address
    const response = await request(logsApp)
      .post("/logs")
      .send({
        timestamp: "2025-01-31T10:00:00Z",
        ip: newIp,
        url: "/home",
      })
      .expect(200);

    const count = getUniqueIpCount();
    expect(count).toBe(2);
  });
});
