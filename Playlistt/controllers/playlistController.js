const { Playlist } = require("../models");

createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

getPlaylists = async (req, res) => {
  const result = await Playlist.findById({});
  res.send(result);
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

module.exports = { createPlaylist, getPlaylists, getPlaylist };