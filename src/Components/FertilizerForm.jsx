import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";

const FertilizerForm = () => {
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    moisture: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    soilType: "",
    cropType: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const openai = new OpenAI({
  //   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //   dangerouslyAllowBrowser: true,
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !formData.temperature ||
      !formData.humidity ||
      !formData.moisture ||
      !formData.nitrogen ||
      !formData.phosphorus ||
      !formData.potassium ||
      !formData.soilType ||
      !formData.cropType
    ) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      // Send data to backend
      const response = await fetch(
        "https://fertilizer-recommend.onrender.com/recommend-fertilizer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch recommendations. Status: ${response.status}`);
      }

      const backendData = await response.json();

      if (!backendData || !backendData.recommended_fertilizer) {
        setErrorMessage("No recommendation received. Please try again.");
        return;
      }

      // Use OpenAI to generate a user-friendly description
      // const aiResponse = await openai.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [
      //     {
      //       role: "system",
      //       content: `Explain the fertilizer ${backendData.recommended_fertilizer} in simple terms for farmers and keep it very brirf (5 lines). Also state the correct process to use the suggested fertilizer.`,
      //     },
      //   ],
      // });

      // const description = aiResponse.choices[0]?.message?.content || "No description available.";

      // Navigate to the result page with data
      navigate("/fertilizer-result", {
        state: { recommendation: backendData.recommended_fertilizer},
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="FertilizerForm">
      <div className="py-0 lg:py-0 px-4 mx-auto max-w-screen-md">
        <h2 className="text-3xl sm:text-6xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">
          Fertilizer Recommendation Form
        </h2>
        <p className="text-md p-2 mb-5 text-black text-center">
          Please fill in the details below to help us recommend the best fertilizer for your crop.
        </p>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        {isLoading && <p className="text-center text-blue-500">Loading...</p>}

        <div className="mb-5 bg-white bg-opacity-10 backdrop-blur-md border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-500 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Temperature, Humidity, Moisture */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["temperature", "humidity", "moisture"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)} (%)
                  </label>
                  <input
                    type="number"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder={`Enter ${field}`}
                    required
                  />
                </div>
              ))}
            </div>

            {/* Nitrogen, Phosphorus, Potassium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["nitrogen", "phosphorus", "potassium"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)} (N, P, K)
                  </label>
                  <input
                    type="number"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder={`Enter ${field}`}
                    required
                  />
                </div>
              ))}
            </div>

            {/* Soil Type and Crop Name */}
            <div>
              <label htmlFor="soilType" className="block mb-2 text-sm font-medium text-gray-900">
                Soil Type
              </label>
              <select
                id="soilType"
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="" disabled>
                  Select Soil Type
                </option>
                <option value="Sandy">Sandy</option>
                <option value="Loamy">Loamy</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
              </select>
            </div>

            <div>
              <label htmlFor="cropType" className="block mb-2 text-sm font-medium text-gray-900">
                Crop Name
              </label>
              <select
                id="cropType"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="" disabled>
                  Select Crop Name
                </option>
                {[
                  "Maize",
                  "Sugarcane",
                  "Cotton",
                  "Tobacco",
                  "Paddy",
                  "Barley",
                  "Wheat",
                  "Millets",
                  "Oil Seeds",
                  "Pulses",
                  "Ground Nuts",
                ].map((crop) => (
                  <option value={crop} key={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-900 py-3 px-6 rounded-md text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FertilizerForm;
