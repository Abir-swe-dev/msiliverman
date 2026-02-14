import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { FAQ } from './pages/FAQ';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy onBack={() => { }} />} />
      <Route path="/terms-of-service" element={<TermsOfService onBack={() => { }} />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}