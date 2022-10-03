const express = require("express");
const PORT = 5000
const app = express();


app.get("/", (req, res) => {
    res.status(200).send("Hello World!!");
})


app.listen(PORT, () => {
    console.log("listening on port " +PORT);
})