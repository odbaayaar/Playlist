const express = require("express");
const { playlistController } = require("../controllers");

const router = express.Router();

router
  .get("/playlists", playlistController.getPlaylists)
  .get("/playlist/:id", playlistController.getPlaylist)
  .post("/playlists", playlistController.createPlaylist)
  .put("/playlist/:id", playlistController.addToPlaylist)
  .delete("/playlist/:id", () => {});

exports.playlistRoutes = router