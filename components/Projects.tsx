"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectUrl?: string;
}

const projects: Project[] = [
  {
    title: "Meraki Expressions Interior Design",
    description:
      "Interior Design, Decorating and Renovations. We renovate and design your interior space to meet your functional and aesthetic needs. Creating beautiful, personalized spaces with soul, creativity, and love.",
    technologies: ["Interior Design", "Space Planning", "Renovations", "Decorating"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    projectUrl: "#",
  },
  {
    title: "Boujee by Meraki Expressions",
    description:
      "Beauty and Glam Studio. Specialized in eyebrow waxing, laminating and tinting. Makeup for all occasions - weddings, graduations, photoshoots, carnival, etc. Makeup Classes - Basic and Advanced makeup classes. Body Art - Tattoos.",
    technologies: ["Cosmetology", "Eyebrow Services", "Makeup Artistry", "Beauty Education", "Body Art - Tattoos"],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
    projectUrl: "#",
  },
  {
    title: "Boujee Online Retail Store",
    description:
      "We cater to our Boujee Kings and Queens. Offering a curated selection of clothing, accessories, perfumes, and cologne. Your one-stop shop for all things boujee and stylish.",
    technologies: ["E-Commerce", "Retail", "Fashion", "Accessories", "Fragrances"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    projectUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-rose-50 to-amber-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto mb-6"></div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={50}>
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Meraki Expressions
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 italic">
              "Meraki" means <span className="font-semibold">"to do something with soul, creativity, and love"</span>
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              This is a motto that we live by. Every project we undertake is infused with passion, creativity, and genuine care.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Project →
                  </a>
                )}
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

