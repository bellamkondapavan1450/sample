const express = require("express");
const app = express();
const { Board, Led } = require("johnny-five");
const board = new Board();
var isReady = false;
board.on("ready", () => {
    isReady = true;
});

app.get("/ledon", (req, res) => {
    // const { Board, Led } = require("johnny-five");
    // const board = new Board();
    if(isReady) {
        console.log(parseInt(req.query['pin']));
        const led = new Led(parseInt(req.query['pin']));
        led.on();
        res.json("Done");
    } else {
        res.json("Board not ready");
    }
});

app.get("/ledoff", (req, res) => {
    if(isReady) {
        console.log(parseInt(req.query['pin']));
        const led = new Led(parseInt(req.query['pin']));
        led.off();
        res.json("Done");
    } else {
        res.json("Board not ready");
    }
});

app.listen(5000, () => console.log("server started, listening on port 5000"));