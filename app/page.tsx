"use client";

import Image from "next/image";
import ImageUploader from "./imageuploader";

// pages/index.js (or Home.js)

import { useEffect } from 'react';

// Adjust the path as per your project structure

export default function Home() {
  useEffect(() => {
    const fetchImageText = async () => {
      try {
        const imageData = await fetchImageText();
        console.log('Image Data:', imageData);
        // Handle the imageData as needed (e.g., update state, display information)
      } catch (error) {
        // Handle errors (e.g., show error message to user)
        console.error('Error fetching image text:', error);
      }
    };

    fetchImageText();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <p>Hello susuuu</p>
      <ImageUploader />
      {/* Render other components or UI elements as needed */}
    </div>
  );
}
