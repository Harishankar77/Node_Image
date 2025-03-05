import express from "express";
import { uploadImage, getImages } from "../controllers/imageController.js";
import upload from "../middleware/imageUpload.js";

const router = express.Router();

router.post("/upload-image", upload.single("photo"), uploadImage);
router.get("/images", getImages);

export default router;
