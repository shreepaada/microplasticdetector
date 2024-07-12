// api/imageApi.js

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://ocrly-image-to-text.p.rapidapi.com/',
  params: {
    imageurl: 'https://i.pinimg.com/originals/42/1b/e6/421be6184e75937bb223c764ecbc2f2e.jpg',
    filename: './sample.png'
  },
  headers: {
    'x-rapidapi-key': '4f2a2255e1msh99aa5d30fbebe75p117a48jsn9676e1cf4000',
    'x-rapidapi-host': 'ocrly-image-to-text.p.rapidapi.com'
  }
};

export const getImageText = async () => {
  try {
    const response = await axios.request(options);
    return response.data; // Return the data from the API call
  } catch (error) {
    console.error('Error fetching image text:', error);
    throw error; // Re-throw or handle the error as needed
  }
};
