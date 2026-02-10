import { Header } from '../components/Header';
import { HeroContent } from '../components/HeroContent';
import { VideoSection } from '../components/VideoSection';
import FrameImage from '../assets/Frame.jpg';

export function LandingPage() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F]">
      {/* Background Image - Full width display */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FrameImage})`
        }}>

        {/* Top gradient for header/nav section */}
        <div
          className="absolute top-0 left-0 right-0 h-[300px]"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)'
          }} />

        {/* Light dark shadow overlay for better text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.25)'
          }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <Header />

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column (Text) */}
          <div className="lg:col-span-5">
            <HeroContent />
          </div>

          {/* Right Column (Video/Interactive) */}
          <div className="lg:col-span-7 pt-8 lg:pt-20">
            <VideoSection />
          </div>
        </main>
      </div>
    </div>);

}