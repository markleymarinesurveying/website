import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import bannerImage from "@assets/Photos/hero image-1.png";
import samsLogo from "@assets/Photos/SAMS Logo-Photoroom.png";
import abycLogo from "@assets/Photos/abyc-cert-blue-small.jpeg";
import chapmanLogo from "@assets/Photos/chpaman.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-[80vh] lg:max-h-[900px] flex flex-col lg:flex-row">
      {/* Left Sidebar - White Background */}
      <div className="w-full lg:w-1/4 bg-white p-4 sm:p-6 lg:p-10 flex flex-col justify-center relative z-10 min-h-[60vh] lg:min-h-full">
        {/* Hexagonal Buttons */}
        <div className="space-y-3 sm:space-y-4 mb-8 lg:mb-12">
          <Link href="/contact">
            <div
              className="w-full bg-blue-100 hover:bg-blue-100/80 text-primary px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg transition-colors cursor-pointer flex items-center justify-center"
              style={{
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                minHeight: '48px'
              }}
              data-testid="button-schedule-survey"
            >
              Schedule A Survey
            </div>
          </Link>
          
          <a href="tel:5615049576" className="block">
            <div
              className="w-full bg-blue-100 hover:bg-blue-100/80 text-primary px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-colors cursor-pointer flex items-center justify-center shadow-lg"
              style={{
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                minHeight: '48px'
              }}
              data-testid="button-call-now"
            >
              Call (561) 504-9576
            </div>
          </a>
        </div>
        
        {/* Certification Logos */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center">
            <img
              src={samsLogo}
              alt="SAMS SA Member"
              className="h-16 sm:h-20 lg:h-24 w-auto mb-2"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-600">SAMS® SA Member</span>
          </div>
          
          <div className="flex flex-col items-center">
            <img
              src={abycLogo}
              alt="ABYC Standards"
              className="h-16 sm:h-20 lg:h-24 w-auto mb-2"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <img
              src={chapmanLogo}
              alt="Chapman"
              className="h-16 sm:h-20 lg:h-24 w-auto mb-2"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Banner Image */}
      <div className="w-full lg:w-3/4 relative h-64 sm:h-80 md:h-96 lg:h-full">
        <img
          src={bannerImage}
          alt="Marine Survey Services - Boat on water"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 40%' }}
        />
        
        {/* Text Overlay - Responsive */}
        <div className="absolute top-0 left-0 right-0 flex justify-center px-2">
          <div
            className="bg-blue-100/65 text-white px-4 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-center w-full max-w-none font-sans tracking-wide"
            style={{
              clipPath: 'polygon(2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%, 0% 50%)',
              minHeight: '40px',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            <span className="block leading-tight">
              Professional Marine Surveyor And Vessel Inspection Services Across Florida's East And West Coasts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}