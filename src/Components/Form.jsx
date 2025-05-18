import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';
import * as XLSX from 'xlsx';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    humidity: '',
    phValue: '',
    season: '',
    temperature: '',
    rainfall: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  // const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
  // const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      if (jsonData.length < 2 || jsonData[1].length < 5) {
        setErrorMessage("The uploaded file does not have the required data format.");
        return;
      }

      setFormData({
        ...formData,
        nitrogen: jsonData[1][0] || '',
        phosphorus: jsonData[1][1] || '',
        potassium: jsonData[1][2] || '',
        humidity: jsonData[1][3] || '',
        phValue: jsonData[1][4] || '',
        season: jsonData[1][5] || '',
        temperature: jsonData[1][6] || '',
        rainfall: jsonData[1][7] || ''
      });
    };

    reader.onerror = () => {
      setErrorMessage("Failed to read the uploaded file. Please try again.");
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Fetch crop predictions from your backend
      const response = await fetch(
        `https://capstone-backend-ayix.onrender.com/predict?state=${formData.state}&district=${formData.city}&season=${formData.season}&n=${formData.nitrogen}&p=${formData.phosphorus}&k=${formData.potassium}&temperature=${formData.temperature}&humidity=${formData.humidity}&ph=${formData.phValue}&rainfall=${formData.rainfall}`
      );
      
      const data = await response.json();
      console.log('Backend Response:', data);  // Log the response to inspect it
  
      // Check if crops data exists and is an array
      if (!data || !Array.isArray(data) || data.length === 0) {
        setErrorMessage('No crop predictions were found. Please try again with valid data.');
        return;
      }
  
      // Fetch information for each crop from OpenAI and image from Unsplash API
      const cropInformationPromises = data.map(async (cropItem) => {
        const crop = cropItem.Crop;  // Extract the crop name from the response
  
        // Request crop information from OpenAI
        // const aiResponse = await openai.chat.completions.create({
        //   model: 'gpt-3.5-turbo',
        //   messages: [{ role: 'system', content: `Provide very brief information about the crop: ${crop} in less than 5 lines. And also suggest the best fertilizer for that specific crop.` }]
        // });
  
        // const cropInfo = aiResponse.choices[0].message.content;
  
        // Unsplash API integration for crop image
        const imageResponse = await fetch(`https://api.unsplash.com/search/photos?query=${crop}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
        const imageData = await imageResponse.json();
        const cropImage = imageData.results[0]?.urls?.small || '';
  
        return { name: crop, image: cropImage, probability: cropItem.Probability };
      });
  
      const cropDetails = await Promise.all(cropInformationPromises);
  
      // Navigate to the result page with crop details
      navigate('/result', { state: { cropDetails } });
  
    } catch (error) {
      console.error('Error during prediction or data fetching:', error);
      setErrorMessage('There was an error processing your request. Please try again.');
    } finally{
      setIsLoading(false);
    }
  };
  

  return (
    <section id="CropPredictionForm">
      <div className="py-0 lg:py-0 px-4 mx-auto max-w-screen-md">
        <h2 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">
          Crop Prediction Form
        </h2>
        <p className="text-md p-2 mb-5 text-black text-center">
          Please fill in the details below to help us recommend the best crops for your farm.
        </p>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        {isLoading && <p className="text-center text-blue-500">Loading...</p>}

        <div className="mb-5 bg-white bg-opacity-10 backdrop-blur-md border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-500 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Contact Number and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactNumber" className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            {/* City, State, and Pincode */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your City"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your State"
                  required
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your Pincode"
                  required
                />
              </div>
            </div>

            {/* Nitrogen, Phosphorus, Potassium, Humidity */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label htmlFor="nitrogen" className="block mb-2 text-sm font-medium text-gray-900">Nitrogen (N)</label>
                <input
                  type="number"
                  id="nitrogen"
                  name="nitrogen"
                  value={formData.nitrogen}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Nitrogen level"
                  required
                />
              </div>
              <div>
                <label htmlFor="phosphorus" className="block mb-2 text-sm font-medium text-gray-900">Phosphorus (P)</label>
                <input
                  type="number"
                  id="phosphorus"
                  name="phosphorus"
                  value={formData.phosphorus}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Phosphorus level"
                  required
                />
              </div>
              <div>
                <label htmlFor="potassium" className="block mb-2 text-sm font-medium text-gray-900">Potassium (K)</label>
                <input
                  type="number"
                  id="potassium"
                  name="potassium"
                  value={formData.potassium}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Potassium level"
                  required
                />
              </div>
              <div>
                <label htmlFor="humidity" className="block mb-2 text-sm font-medium text-gray-900">Humidity</label>
                <input
                  type="number"
                  id="humidity"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Humidity"
                  required
                />
              </div>
            </div>

            {/* pH Value, Season, Temperature, Rainfall */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <label htmlFor="phValue" className="block mb-2 text-sm font-medium text-gray-900">pH Value</label>
                <input
                  type="number"
                  id="phValue"
                  name="phValue"
                  value={formData.phValue}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="pH value"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="season" className="block mb-2 text-sm font-medium text-gray-900">Season</label>
                <input
                  type="text"
                  id="season"
                  name="season"
                  value={formData.season}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Season"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="temperature" className="block mb-2 text-sm font-medium text-gray-900">Temperature</label>
                <input
                  type="number"
                  id="temperature"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Temperature"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="rainfall" className="block mb-2 text-sm font-medium text-gray-900">Rainfall</label>
                <input
                  type="number"
                  id="rainfall"
                  name="rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Rainfall"
                  required
                />
              </div>
            </div>


            {/* Submit and File Upload */}
            <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm w-full">
              <button type="submit" className="bg-gradient-to-r from-green-500 to-green-900 py-3 px-4 mb-2 rounded-md">
                Submit
              </button>
              <div className="relative">
              {/* Hidden file input */}
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {/* Custom button */}
                <button
                  className="bg-gradient-to-r from-green-500 to-green-900 py-3 px-4 mb-2 rounded-md text-white focus:outline-none"
                >
                  Choose File
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
