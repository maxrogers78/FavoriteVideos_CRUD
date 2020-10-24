// Express
import { RequestHandler } from "express";
// Schemas
import Video from "./Video";

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });

  if (videoFound) {
    return res.status(301).json({ msg: "The URL already exists" });
  }

  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  const videos = await Video.find();
  return res.json(videos);
};

export const getVideo: RequestHandler = (req, res) => {
  res.json("getting a single video");
};

export const deleteVideo: RequestHandler = (req, res) => {
  res.json("deleting video");
};

export const updateVideo: RequestHandler = (req, res) => {
  res.json("updating video");
};
