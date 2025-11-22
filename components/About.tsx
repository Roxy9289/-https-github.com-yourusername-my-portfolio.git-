"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  const skills = [
    "Interior Design",
    "Decorating",
    "Cosmetology",
    "Web Development",
    "Next.js",
    "AI Development",
    "React",
    "JavaScript",
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollAnimation delay={100}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Hello, my name is Roxanne Lyons-Richards. I am an Educator, Business Owner and Innovative Entrepreneur with a passion for learning and expressing my ideas creatively.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                With a diverse background spanning interior design, cosmetology, and web development, I bring a unique creative perspective to everything I do. I'm constantly exploring new ways to combine my artistic talents with cutting-edge technology.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Currently, I'm learning to build modern web applications with AI and Next.js, combining my creative vision with technical skills to bring innovative ideas to life. My goal is to create beautiful, functional solutions that make a meaningful impact.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="bg-gray-900 border border-rose-500/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-rose-500/10">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-rose-400">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-black border border-rose-500/30 px-4 py-3 rounded-lg text-center font-medium text-rose-300 shadow-md hover:shadow-lg hover:shadow-rose-500/20 transform hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

