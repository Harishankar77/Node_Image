import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://upload-image-backend.onrender.com
/api/images")
      .then((res) => setImages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Image Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image._id}
            className={`overflow-hidden rounded-lg shadow-md border border-gray-300 ${
              image.orientation === "portrait" ? "h-[300px]" : "h-[200px]"
            }`}
          >
            <img
              src={`https://upload-image-backend.onrender.com
${image.imageUrl}`}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;
