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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-400 via-pink-400 to-amber-500 dark:from-rose-900 dark:via-pink-900 dark:to-amber-900 relative overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-300 dark:bg-rose-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 dark:bg-amber-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Profile Picture */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl ring-4 ring-amber-200/50 dark:ring-amber-800/50">
              <Image
                src="/profile.jpg"
                alt="Roxanne Lyons-Richards"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 288px"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-white via-rose-100 to-amber-100 bg-clip-text text-transparent animate-fade-in drop-shadow-lg px-4">
              Hi, I'm{" "}
              <span className="block mt-2 font-bold italic tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                Roxanne Lyons-Richards
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-3xl lg:mx-0 mx-auto animate-fade-in-delay drop-shadow-md px-4">
              Educator, Business Owner, Entrepreneur & Creative Developer
            </p>
            <p className="text-base sm:text-lg text-rose-50 mb-8 sm:mb-12 max-w-2xl lg:mx-0 mx-auto animate-fade-in-delay-2 drop-shadow-sm px-4">
              I'm an innovative entrepreneur with a passion for learning and expressing ideas creatively. Currently learning to build modern web applications with AI and Next.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-delay-3 px-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:from-rose-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
