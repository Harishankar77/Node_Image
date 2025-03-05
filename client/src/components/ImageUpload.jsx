import { useState } from "react";
import axios from "axios";

const ImageUpload = ({ refreshImages }) => {
  const [file, setFile] = useState(null);
  const [orientation, setOrientation] = useState("portrait");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("orientation", orientation);

    try {
      await axios.post("https://upload-image-backend.onrender.com
/api/upload-image", formData);
      refreshImages(); // Refresh  karne ke liye use kiya
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-md rounded-lg border border-gray-300">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        Upload an Image
      </h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <select
          onChange={(e) => setOrientation(e.target.value)}
          className="block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
