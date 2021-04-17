const express = require("express");
const app = express();
const videoList = require("./data/videos.json");
const videoDetails = require("./data/video-details.json");
const  cors = require("cors");
const uuid = require("uuid");

app.use(express.json());
app.use(cors());

app.use(function requestLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

app.get("/videos", (_req, res) => {
    res.status(200).send(videoList);
})

app.get("/videos/:id", (req, res) => {
    console.log(req.params.id);
    let mainVideo = videoDetails.filter(video => video.id === req.params.id);
    res.status(200).send(mainVideo);
})


app.listen(8080, (error) => {
if (error) {
    console.log(error);
} else {
    console.log("Server Running...")
}})