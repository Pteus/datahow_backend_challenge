import request from "supertest";
import metricsApp from "../src/metricsApp";
import logsApp from "../src/logsApp";

describe("GET /metrics", () => {
  it("should return 200 and contain unique_ip_addresses metric", async () => {
    const res = await request(metricsApp).get("/metrics").expect(200);

    // Check if the response contains the unique_ip_addresses metric
    expect(res.text).toContain("unique_ip_addresses");
  });

  it("should increase the unique_ip_addresses count when a new IP is logged", async () => {
    // Get the initial count of unique IPs
    const initialMetrics = await request(metricsApp).get("/metrics");
    const initialMatch = initialMetrics.text.match(/unique_ip_addresses (\d+)/);
    const initialCount = initialMatch ? parseInt(initialMatch[1], 10) : 0;

    // Send a new IP log entry
    await request(logsApp)
      .post("/logs")
      .send({
        timestamp: "2025-01-30T10:00:00Z",
        ip: "192.168.1.101",
        url: "/test",
      })
      .expect(200);

    // Get the updated metric count
    const updatedMetrics = await request(metricsApp).get("/metrics");
    const updatedMatch = updatedMetrics.text.match(/unique_ip_addresses (\d+)/);
    const updatedCount = updatedMatch ? parseInt(updatedMatch[1], 10) : 0;

    // Ensure the count has increased by 1
    expect(updatedCount).toBe(initialCount + 1);
  });

  it("should not increase the count for duplicate IP addresses", async () => {
    const initialMetrics = await request(metricsApp).get("/metrics");
    const initialMatch = initialMetrics.text.match(/unique_ip_addresses (\d+)/);
    const initialCount = initialMatch ? parseInt(initialMatch[1], 10) : 0;

    await request(logsApp).post("/logs").send({
      timestamp: "2025-01-30T10:00:00Z",
      ip: "192.168.1.102",
      url: "/duplicate",
    });

    await request(logsApp).post("/logs").send({
      timestamp: "2025-01-30T10:00:00Z",
      ip: "192.168.1.102",
      url: "/duplicate",
    });

    const updatedMetrics = await request(metricsApp).get("/metrics");
    const updatedMatch = updatedMetrics.text.match(/unique_ip_addresses (\d+)/);
    const updatedCount = updatedMatch ? parseInt(updatedMatch[1], 10) : 0;

    expect(updatedCount).toBe(initialCount + 1);
  });
});
