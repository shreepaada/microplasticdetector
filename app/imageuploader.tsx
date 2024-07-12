"use client";
import React, { useState } from "react";

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await fetch("/api/analyze", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setResult(data.result);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Analyze</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default ImageUploader;
