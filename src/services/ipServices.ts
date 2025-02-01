// Set to store unique IP addresses
const uniqueIpAddresses = new Set<string>();

// Add IP address to the set
export const addIp = (ip: string): void => {
  uniqueIpAddresses.add(ip);
};

// !For testing purposes only!
export const getUniqueIpCount = (): number => {
  return uniqueIpAddresses.size;
};
