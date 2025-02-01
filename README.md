# Solution to DataHow Code Challenge

This is my solution to the code challenge provided by **DataHow**. The goal of this challenge was to create a microservice that tracks and counts unique IP addresses that visit a company's website and exposes the count as a Prometheus metric.

### Features:
- **POST 5000/logs**: Receives a JSON log entry with IP address information and counts unique IP addresses.
- **GET 9102/metrics**: Exposes the current count of unique IP addresses in a Prometheus-compatible format.

**Technologies Used:**
- **Node.js**:The framework used to create the server.
- **Express**:The framework for routing and handling HTTP requests.
- **Prometheus client**:For exposing the metric of unique IP addresses.
- **TypeScript** The programming language used for development.
- **Jest**: For integration testing.


---

### How to Run

1. **Clone the repository**:

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/Pteus/datahow_backend_challenge.git
   cd datahow_backend_challenge
   ```

2. **Install dependencies**:

    ```
    npm install
    ```

3. **Run the application in development mode**:
   
    For development with hot reload (using ts-node-dev):
    ```
    npm run dev
    ```
    
4. **Alternatively, build and run the app**:
   ```
   npm run build-and-start
   ```

### Testing
   ```
   npm run test
   ```

### cURL
1. **POST request to /logs**
```
curl -X POST http://localhost:5000/logs -H "Content-Type: application/json" -d '{"timestamp": "2020-06-24T15:27:00.123456Z", "ip": "83.150.59.250", "url": "/home"}'
```
2. **GET request to /metrics**
```bash
curl -X GET http://localhost:9102/metrics
```
