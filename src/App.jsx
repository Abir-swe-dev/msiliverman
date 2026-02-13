import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>

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