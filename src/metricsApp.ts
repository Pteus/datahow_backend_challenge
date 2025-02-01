import express from "express";

const metricsApp = express()

metricsApp.get("/metrics", (req, res) => {
    console.log('metrics')
    res.status(200).json({ status: 'success', message: 'metrics' });
})

export default metricsApp
