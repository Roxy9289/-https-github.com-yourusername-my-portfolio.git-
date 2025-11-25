"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { Camera, ChevronDown, ChevronUp } from "lucide-react";

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
  const [showAlbums, setShowAlbums] = useState(false);

  const photoAlbums = [
    {
      name: "Cosmetology",
      photos: [
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Eyebrow Services",
      photos: [
        // Eyebrow Lamination
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
        // Eyebrow Waxing
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        // Eyebrow Tinting
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Makeup Artistry",
      photos: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Beauty Educator",
      photos: [
        // Full Classes - Group Tutorials
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        // Individual Classes - One-on-One Tutorials
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
      ],
    },
    {
      name: "Body Art",
      photos: [
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop&auto=format&q=80&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&auto=format&q=80&ixlib=rb-4.0.3",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6"></div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={50}>
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-rose-400">
              Meraki Expressions
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-2 italic">
              "Meraki" means <span className="font-semibold text-rose-400">"to do something with soul, creativity, and love"</span>
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              This is a motto that we live by. Every project we undertake is infused with passion, creativity, and genuine care.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-gray-900 border border-rose-500/30 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
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
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-rose-400">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-black border border-rose-500/50 text-rose-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.title === "Boujee by Meraki Expressions" ? (
                    <button
                      onClick={() => setShowAlbums(!showAlbums)}
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg shadow-rose-500/50"
                    >
                      {showAlbums ? (
                        <>
                          Hide Photo Albums
                          <ChevronUp className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          View Photo Albums
                          <ChevronDown className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  ) : (
                    project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg shadow-rose-500/50"
                      >
                        View Project →
                      </a>
                    )
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Photo Albums Section for Boujee */}
        {showAlbums && (
          <ScrollAnimation delay={300}>
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-rose-400">
                Photo Albums
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {photoAlbums.map((album, albumIndex) => (
                  <div
                    key={albumIndex}
                    className="bg-gray-900 border border-rose-500/30 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold mb-4 text-rose-400 text-center">
                      {album.name}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {album.photos.length === 0 ? (
                        // Empty album placeholder
                        <>
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="aspect-square bg-black border border-rose-500/30 rounded-lg flex items-center justify-center"
                            >
                              <Camera className="w-8 h-8 text-rose-500/50" />
                            </div>
                          ))}
                        </>
                      ) : (
                        // Display all photos
                        album.photos.map((photo, photoIndex) => (
                          <div
                            key={photoIndex}
                            className="aspect-square bg-black border border-rose-500/30 rounded-lg overflow-hidden group cursor-pointer"
                          >
                            <Image
                              src={photo}
                              alt={`${album.name} ${photoIndex + 1}`}
                              width={200}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))
                      )}
                    </div>
                    <p className="text-sm text-gray-400 text-center mt-4 italic">
                      {album.photos.length === 0 ? "Photos coming soon" : `${album.photos.length} photos`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}

