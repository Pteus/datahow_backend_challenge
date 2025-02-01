import logsApp from "./logsApp";
import metricsApp from "./metricsApp";

const PORT_LOGS = 5000;
const PORT_METRICS = 9102;

logsApp.listen(PORT_LOGS, () => {
  console.log(`Logs service listening on http://localhost:${PORT_LOGS}/logs`);
});

metricsApp.listen(PORT_METRICS, () => {
  console.log(
    `Prometheus metrics exposed on http://localhost:${PORT_METRICS}/metrics`,
  );
});
