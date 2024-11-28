import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Workflow from './Components/Workflow';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Dashboard from './Components/Dashboard';
import Result from './Components/Result';
import FertilizerForm from './Components/FertilizerForm'; // Import FertilizerForm
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FertilizerResult from './Components/FertilizerResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <HeroSection />
          <Workflow />
          <Contact />
        </div>
      </>
    ),
  },
  {
    path: '/form',
    element: (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <Form />
        </div>
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <div className="max-w-7xl mx-auto pt-0 px-0">
          <Dashboard />
        </div>
      </>
    ),
  },
  {
    path: '/result',
    element: (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <Result />
        </div>
      </>
    ),
  },
  {
    path: '/fertilizer-form', // Add FertilizerForm route
    element: (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <FertilizerForm />
        </div>
      </>
    ),
  },
  {
    path: '/fertilizer-result', // Add FertilizerForm route
    element: (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <FertilizerResult/>
        </div>
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
