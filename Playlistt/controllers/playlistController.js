const { Playlist } = require("../models");

createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

getPlaylists = async (req, res) => {
  const uid = req.query.userId;
  if (uid) {
    console.log(uid)
    const result = await Playlist.find({ user: uid });
    return res.send(result);
  }
  res.sendStatus(404);
};

getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate({
    path: "songs",
    populate: {
      path: "artist",
    },
  });
  res.send(result);
};

addToPlaylist = async (req, res) => {
  const data = req.body
  const result = await Playlist.findByIdAndUpdate(req.params.id,data);
  res.sendStatus(200)

}


module.exports = { createPlaylist, getPlaylists, getPlaylist, addToPlaylist };