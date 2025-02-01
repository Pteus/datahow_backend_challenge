// Set to store unique IP addresses
import { Counter } from "prom-client";

const uniqueIpAddresses = new Set<string>();

// Add IP address to the set
export const addIp = (ip: string): void => {
  if (!uniqueIpAddresses.has(ip)) {
    uniqueIpAddresses.add(ip);

    prometheusUniqueIpCounter.inc();
  }
};

// !For testing purposes only!
export const getUniqueIpCount = (): number => {
  return uniqueIpAddresses.size;
};

// Create a Prometheus Counter to track the number of unique IP addresses
export const prometheusUniqueIpCounter = new Counter({
  name: "unique_ip_addresses",
  help: "Total number of unique IP addresses",
});
