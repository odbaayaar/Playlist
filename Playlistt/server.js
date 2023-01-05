const express = require("express")
const cors = require("cors")
const connect = require('./config/db')
const { playlistRoutes } = require("./routes/playlistRoutes")
const { songRoutes } = require("./routes/songRoutes")
const { userRoutes } = require("./routes/userRoutes")
require('dotenv').config()

const app = express();

const port = process.env.PORT || 8000;

connect();

app.use(cors());
app.use(express.json(),playlistRoutes);
app.use(songRoutes)
app.use(userRoutes)





app.get('/', (req,res) => {
    res.send("Hello world :(");
})

app.listen(port, () => {
    console.clear()
    console.log("Server running at:", port)
})