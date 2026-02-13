import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #0E2A1F;
        }
      `}</style>

      {currentPage === 'landing' && (
        <LandingPage onNavigate={(page) => setCurrentPage(page)} />
      )}

      {currentPage === 'privacy' && (
        <PrivacyPolicy
          onBack={() => setCurrentPage('landing')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === 'terms' && (
        <TermsOfService
          onBack={() => setCurrentPage('landing')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
    </>
  );
}