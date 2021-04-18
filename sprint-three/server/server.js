const express = require("express");
const app = express();
const videoDetails = require("./data/videos.json");
const  cors = require("cors");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path")
require('dotenv').config();

const {PORT, BACKEND_URL} = process.env
console.log(PORT);
console.log(BACKEND_URL);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function requestLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

app.get("/videos", (_req, res) => {
    let videoList = fs.readFileSync("./data/videos.json")
    let parsedVideoList = JSON.parse(videoList)
    compressedVideoList = parsedVideoList.map(video => ({id: video.id, title: video.title, channel: video.channel, image: video.image}))
    res.status(200).send(JSON.stringify(compressedVideoList));
})

app.get("/videos/:id", (req, res) => {
    console.log(req.params.id);
    let mainVideo = videoDetails.filter(video => video.id === req.params.id);
    res.status(200).send(mainVideo);
})

app.post("/videos", (req, res) => {
    let vID = uuid.v4();
    
    let videoDetail = {
        id: vID,
        title: req.body.title,
        channel: "My Channel",
        image: "http://localhost:8080/images/Upload-video.jpg",
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "5:00",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [
        {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            "likes": 0,
            "timestamp": 1545162149000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            "likes": 0,
            "timestamp": 1544595784046
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
            "likes": 0,
            "timestamp": 1542262984046
        }
        ]
    }

    let videoDetailsData = fs.readFileSync("./data/videos.json")

    let videoDetailsJS = JSON.parse(videoDetailsData)
    videoDetailsJS.push(videoDetail);

    fs.writeFile("./data/videos.json", JSON.stringify(videoDetailsJS, null, 2), function(err) {
        if (err) {
            console.log(err)}
        console.log("new Video Added to Details")
    })
    res.status(201).send(videoDetail);
    
});


app.listen(8080, (error) => {
if (error) {
    console.log(error);
} else {
    console.log("Server Running...")
}})





