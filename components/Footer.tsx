"use client";

import { Instagram, Facebook, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/meraki_expressions",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/MerakiExpressions",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Roxy9289",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Meraki Expressions. Built with Next.js and Tailwind CSS.
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

