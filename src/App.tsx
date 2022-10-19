import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import LoadingSpinner from './pages/LoadingSpinner';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>{AppRoutes}</Routes>
      </Suspense>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
