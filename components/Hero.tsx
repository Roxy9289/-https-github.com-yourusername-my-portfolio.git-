"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full mix-blend-soft-light filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-soft-light filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-400/10 rounded-full mix-blend-soft-light filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Profile Picture */}
          <div className="animate-fade-in order-2 lg:order-1 w-full lg:w-2/5">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none lg:h-[80vh] rounded-lg overflow-hidden border-2 border-rose-500/30 shadow-2xl shadow-rose-500/20">
              <Image
                src="/profile.jpg"
                alt="Roxanne Lyons-Richards"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 lg:w-3/5 order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-rose-200 via-rose-400 to-pink-400 bg-clip-text text-transparent animate-fade-in drop-shadow-lg px-4">
              Hi, I'm{" "}
              <span className="block mt-2 font-bold italic tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                Roxanne Lyons-Richards
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-rose-100 mb-6 sm:mb-8 max-w-3xl lg:mx-0 mx-auto animate-fade-in-delay drop-shadow-md px-4">
              Educator, Business Owner, Entrepreneur & Creative Developer
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl lg:mx-0 mx-auto animate-fade-in-delay-2 drop-shadow-sm px-4">
              I'm an innovative entrepreneur with a passion for learning and expressing ideas creatively. Currently learning to build modern web applications with AI and Next.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-delay-3 px-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-rose-500/50"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-black/50 backdrop-blur-md text-rose-400 border-2 border-rose-500/50 rounded-lg font-semibold text-base sm:text-lg hover:bg-rose-500/10 hover:border-rose-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-rose-500/20"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}
