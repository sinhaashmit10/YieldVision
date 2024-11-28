import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { cropDetails } = location.state || { cropDetails: [] }; // Get cropDetails from the location state
  const [selectedCrop, setSelectedCrop] = useState(cropDetails[0] || null); // Set first crop as default
  const [cropTitle, setCropTitle] = useState('');
  const [cropImage, setCropImage] = useState('');

  useEffect(() => {
    if (selectedCrop) {
      setCropTitle(selectedCrop.name);
      fetchCropImage(selectedCrop.name);
    }
  }, [selectedCrop]);

  const fetchCropImage = async (title) => {
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; // Ensure you have your access key
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${title}&client_id=${accessKey}`);
      const imageData = await response.json();
      const imageUrl = imageData.results[0]?.urls?.small || '';
      setCropImage(imageUrl);
    } catch (error) {
      console.error('Error fetching crop image:', error);
    }
  };

  return (
    <section id="CropPredictionResult">
      <div className="py-0 lg:py-0 px-4 mx-auto max-w-screen-md text-black">
        <h2 className="text-5xl mb-6 sm:text-6xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">
          Crop Prediction Results
        </h2>

        {cropDetails.length === 0 ? (
          <p className="text-md p-2 mb-5 text-black text-center">No crop predictions available. Please go back and try again.</p>
        ) : (
          <>
            <div className="mb-5 bg-white bg-opacity-10 backdrop-blur-md border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-500 p-8">
              <div className="text-center">
                <h3 className="text-3xl bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text font-bold">{cropTitle}</h3>
                <img
                  src={cropImage}
                  alt={cropTitle}
                  className="mx-auto mt-4 max-w-full h-auto rounded-lg"
                />
                <p className="text-lg mt-4">{selectedCrop?.info}</p>
                <p className="mt-2 text-lg font-semibold">Probability: {selectedCrop?.probability}%</p>
              </div>
            </div>

            <div className="mb-8 mt-8">
              <h3 className="text-2xl text-center bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text font-semibold mb-4">Other Crop Predictions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cropDetails.map((crop, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-300 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedCrop(crop)}
                  >
                    <h4 className="text-xl bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text font-semibold">{crop.name}</h4>
                    <p className="text-sm">Probability: {crop.probability}%</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Result;
