import { Link } from "wouter";
import bannerImage from "@assets/Photos/hero image-1.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-[80vh] lg:max-h-[900px] overflow-hidden">
      {/* Background - Desktop */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src={bannerImage}
          alt="Marine Survey Services - Boat on water"
          className="w-full h-full object-cover"
          style={{ objectPosition: '60% 20%' }}
        />
        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-700/20"></div>
      </div>

      {/* Background - Mobile */}
      <div className="absolute inset-0 block sm:hidden">
        {/* Mobile Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900"></div>
        
        {/* Mobile Hero Image positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3">
          <img
            src={bannerImage}
            alt="Marine Survey Services - Boat on water"
            className="w-full h-full object-contain object-bottom"
          />
          {/* Light overlay on mobile image for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          
          {/* Hero Title and Subtitle */}
          <div className="text-center lg:text-left mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Pre-Purchase | Insurance<br />
              <span className="text-blue-300">Marine Surveyors</span><br />
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-medium leading-relaxed max-w-4xl mx-auto lg:mx-0">
              Professional Marine Surveyor And Vessel Inspection Services Across Florida's East Coast
            </p>
          </div>

          {/* Hexagonal Buttons - Side by Side */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
            <Link href="/contact">
              <div
                className="bg-blue-100 hover:bg-blue-100/80 text-primary px-6 lg:px-8 py-4 text-lg font-semibold shadow-lg transition-colors cursor-pointer flex items-center justify-center w-64"
                style={{
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                  minHeight: '52px'
                }}
                data-testid="button-schedule-survey"
              >
                Schedule A Survey
              </div>
            </Link>
            
            <a href="tel:5615049576">
              <div
                className="bg-blue-100 hover:bg-blue-100/80 text-primary px-6 lg:px-8 py-4 text-lg font-semibold transition-colors cursor-pointer flex items-center justify-center shadow-lg w-64"
                style={{
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                  minHeight: '52px'
                }}
                data-testid="button-call-now"
              >
                Call (561) 504-9576
              </div>
            </a>
          </div>
        </div>

        {/* Certifications Line - Bottom of Hero */}
        <div className="w-full text-center mt-6 sm:mt-0">
          <p className="text-sm sm:text-base text-blue-200 font-medium">
            SAMS® SA Member — ABYC Standards Certified — Chapman Graduate
          </p>
        </div>
      </div>
    </section>
  );
}