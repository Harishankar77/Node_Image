import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [refresh, setRefresh] = useState(false);

  // Function to refresh images after upload
  const refreshImages = () => setRefresh(!refresh);

  return (
    <div className="App">
      {/* Image Upload Component */}
      <ImageUpload refreshImages={refreshImages} />

      {/* Image Gallery Component */}
      <ImageGallery key={refresh} />
    </div>
  );
}

export default App;
