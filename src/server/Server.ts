import express from "express";

const server = express();

server.get('/', (req, res) => {
    return res.send("OI FILHO DA PUTA")
});

export { server };