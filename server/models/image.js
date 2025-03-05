import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  imageUrl: { type: String, required: true },
  orientation: {
    type: String,
    enum: ["portrait", "landscape"],
    required: true,
  },
  uploadedAt: { type: Date, default: Date.now },
});

const Image = mongoose.model("Image", ImageSchema);
export default Image;
