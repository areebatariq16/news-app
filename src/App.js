import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Changed Switch to Routes
import { AnimatePresence } from 'framer-motion';

const Newsapp = lazy(() => import('./components/Newsapp'));
const Health = lazy(() => import('./components/Health'));  // Added lazy loading for Health
const Sports = lazy(() => import('./components/Sports'));  // Added lazy loading for Sports
const Entertainment = lazy(() => import('./components/Entertainment'));  // Added lazy loading for Entertainment
const Fitness = lazy(() => import('./components/Fitness'));  // Added lazy loading for Fitness
const Politics = lazy(() => import('./components/Politics'));  // Added lazy loading for Politics

const App = () => {
  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Suspense fallback={<div>Loading...</div>}>  {/* Added Suspense with fallback */}
          <Routes>  {/* Changed Switch to Routes */}
            <Route path="/" element={<Newsapp />} />  {/* Adjusted Route for Newsapp */}
            <Route path="/health" element={<Health />} />  {/* Adjusted Route for Health */}
            <Route path="/sports" element={<Sports />} />  {/* Adjusted Route for Sports */}
            <Route path="/entertainment" element={<Entertainment />} />  {/* Adjusted Route for Entertainment */}
            <Route path="/fitness" element={<Fitness />} />  {/* Adjusted Route for Fitness */}
            <Route path="/politics" element={<Politics />} />  {/* Adjusted Route for Politics */}
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Router>
  );
};

export default App;


