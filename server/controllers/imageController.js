import Image from "../models/image.js";

// Upload Image
export const uploadImage = async (req, res) => {
  try {
    const { orientation } = req.body;
    if (!req.file || !["portrait", "landscape"].includes(orientation)) {
      return res.status(400).json({ message: "Invalid file or orientation" });
    }

    const newImage = new Image({
      filename: req.file.filename,
      imageUrl: `/uploads/${req.file.filename}`,
      orientation,
    });

    await newImage.save();
    res
      .status(201)
      .json({ message: "Image uploaded successfully!", image: newImage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch All Images
export const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
