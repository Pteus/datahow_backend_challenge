import express from "express";

const logsApp = express()

logsApp.use(express.json());

logsApp.post("/logs", (req, res) => {
    console.log('logs');

    res.status(200).json({ status: 'success', message: 'Log entry received' });
})
export default logsApp
