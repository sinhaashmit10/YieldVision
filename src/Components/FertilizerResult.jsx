import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FertilizerResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { recommendation, description } = location.state || {};

  if (!recommendation || !description) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-lg">No data available. Please submit the form again.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-5 bg-white bg-opacity-10 backdrop-blur-md border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-500 p-8">
      <h2 className="text-3xl font-bold mb-6 sm:text-5xl lg:text-5xl lg:font-semibold text-center tracking-wide bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">Fertilizer Recommendation</h2>
      <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text mb-6">{recommendation}</p>
      <div className="bg-white shadow-lg rounded-lg p-6 border">
        <h2 className="text-xl font-semibold text-green-600">Explanation:</h2>
        <p className="text-gray-700 mt-4">{description}</p>
      </div>
      <button
        onClick={() => navigate('/fertilizer-form')}
        className="mt-6 bg-gradient-to-r from-green-500 to-green-900 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Submit Another Query
      </button>
    </div>
  );
};

export default FertilizerResult;
