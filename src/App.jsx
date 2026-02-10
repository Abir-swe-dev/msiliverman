import React from 'react';
import { LandingPage } from './pages/LandingPage';
export function App() {
  return <>
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #0E2A1F;
        }
      `}</style>
    <LandingPage />
  </>;
}