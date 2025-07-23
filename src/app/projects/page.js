"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import VibeDrawImage from "../assets/projects/vibedraw.gif";
import SlideItInImage from "../assets/projects/slideitin.png";
import MakeItJakesImage from "../assets/projects/makeitjakes.gif";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "GeoGuard",
      href: "https://your-project-url.com",
      description: "Brief one-line summary of your project",
      details: [
        "Detailed bullet point 1 about the project functionality",
        "Detailed bullet point 2 with achievements and metrics",
        "Detailed bullet point 3 about technical implementation"
      ],
      image: VibeDrawImage, // Replace with your project image
      imageAlt: "Your Project Alt Text",
      technologies: ["Technology1", "Technology2", "Technology3"], // Update with your tech stack
      github: "https://github.com/yourusername/your-repo",
    },
    {
      title: "Slide it In",
      href: "https://justslideitin.com",
      description:
        "a powerful presentation generator that transforms documents into beautiful slide decks using AI. 1,000+ users in 24 hours.",
      image: SlideItInImage,
      imageAlt: "Slide it In",
      technologies: ["Go", "Next.js", "Google Cloud Platform"],
      github: "https://github.com/martin226/slideitin",
    },
    {
      title: "Make It Jake's",
      href: "https://jakesresu.me",
      description:
        "a website for turning any resume into Jake's Resume template. 10,000+ users, idea to production in < 2 days.",
      image: MakeItJakesImage,
      imageAlt: "Make It Jakes",
      technologies: ["Ruby on Rails", "Remix.js", "Redis", "Google Cloud Platform"],
      github: "https://github.com/martin226/makeitjakes",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/Showmick119?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </>
  );
}
