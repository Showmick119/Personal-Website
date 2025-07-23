"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import GeoguardImage from "../assets/projects/Geoguard.png";
import JurassIQImage from "../assets/projects/JurrasIQ.png";
import AtmosAIImage from "../assets/projects/AtmosAI.png";
import CarbonLensImage from "../assets/projects/CarbonLens.png";
import JavaNNImage from "../assets/projects/JavaNN.png";
import GTPLImage from "../assets/projects/GTPL.png";
import SearchSortImage from "../assets/projects/SearchSort.png";
import FineTuningImage from "../assets/projects/Finetuning.png";
import AttentionImage from "../assets/projects/Attention.png";
import DSGTImage from "../assets/projects/DSGT.png";
import WebDevImage from "../assets/projects/Webdev.png";


import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Implementing Attention Is All You Need",
      href: "https://www.gtpropulsivelanders.org/",
      description: "implementing the transformer architecture from scratch in pytorch",
      details: [
        "achieved a 14.8 BLEU score (~35% of original paper's performance) on English-Italian translation whilst using resource efficient training with single A100 GPU versus paper's 8x P100 GPU setup",
      ],
      image: AttentionImage,
      imageAlt: "AttentionImage",
      technologies: ["Python", "PyTorch", "Hugging Face", "Weights & Biases", "pytest"],
      github: "https://github.com/Showmick119/GTPL-Website",
    },
    {
      title: "Fine-tuning Code Llama For FastAPI Code Generation",
      href: "https://www.gtpropulsivelanders.org/",
      description: "Developed the marketing website for Propulsive Landers, a Registered Student Organization (RSO) at Georgia Tech.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: FineTuningImage,
      imageAlt: "SearchSort",
      technologies: ["Java"],
      github: "https://github.com/Showmick119/GTPL-Website",
    },
    {
      title: "Neural Network In Java",
      href: "https://devpost.com/software/jurrasiq",
      description: "An AI Assistant for Archaeologists.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: JavaNNImage,
      imageAlt: "JavaNN",
      technologies: ["Java"],
      github: "https://github.com/Showmick119/JurrasIQ",
    },
    {
      title: "JurassIQ",
      href: "https://devpost.com/software/jurrasiq",
      description: "An AI Assistant for Archaeologists.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: JurassIQImage,
      imageAlt: "JurassIQ",
      technologies: ["Tensorflow.js", "Scikit-learn", "pandas", "Folium", "Next.js", "Tailwind CSS"],
      github: "https://github.com/Showmick119/JurrasIQ",
    },
    {
      title: "Geoguard",
      href: "https://devpost.com/software/geoguard",
      description: "A safety-focused web application for Atlanta residents.",
      details: [
        "features real-time alerts that notify users when approaching high-risk areas and an interactive heatmap for visualizing crime data from Atlanta PD",
        "incorporated a custom shape-drawing tool allowing users to select specific map areas for detailed crime analysis and an SOS button for immediate emergency calls",
        "built with React.js for a responsive user interface and used MongoDB Atlas to securely store and manage historical crime data",
        "implemented robust server-side communication protocols with Node.js to handle real-time data updates",
      ],
      image: GeoguardImage, // Replace with your project image
      imageAlt: "Geoguard",
      technologies: ["React.js", "Node.js", "MongoDB Atlas", "Figma"], // Update with your tech stack
      github: "https://github.com/Showmick119/Geoguard-HackGT11",
    },
    {
      title: "Searching & Sorting In Java",
      href: "https://www.gtpropulsivelanders.org/",
      description: "Developed the marketing website for Propulsive Landers, a Registered Student Organization (RSO) at Georgia Tech.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: SearchSortImage,
      imageAlt: "SearchSort",
      technologies: ["Java"],
      github: "https://github.com/Showmick119/GTPL-Website",
    },
    {
      title: "CarbonLens",
      href: "https://devpost.com/software/jurrasiq",
      description: "An AI Assistant for Archaeologists.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: CarbonLensImage,
      imageAlt: "CarbonLens",
      technologies: ["Tensorflow.js", "Scikit-learn", "pandas", "Folium", "Next.js", "Tailwind CSS"],
      github: "https://github.com/Showmick119/JurrasIQ",
    },
    {
      title: "Propulsive Landers Website",
      href: "https://www.gtpropulsivelanders.org/",
      description: "Developed the marketing website for Propulsive Landers, a Registered Student Organization (RSO) at Georgia Tech.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: GTPLImage,
      imageAlt: "GTPLWebsite",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Showmick119/GTPL-Website",
    },
    {
      title: "RoboInvesting - DSGT",
      href: "https://github.com/aryan048/RoboInvesting",
      description: "An auto-investing platform",
      details: [
        "built",
      ],
      image: DSGTImage,
      imageAlt: "DSGTImage",
      technologies: ["Java", "Python", "Spring Boot", "Streamlit"],
      github: "https://github.com/aryan048/RoboInvesting",
    },
    {
      title: "GT ClassLinker - WebDev @ GT",
      href: "https://github.com/Showmick119/GT-ClassLinker",
      description: "A platform to connect all Georgia Tech students!",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
      ],
      image: WebDevImage,
      imageAlt: "AtmosAI",
      technologies: ["React.js", "Tailwind CSS", "Figma", "Django"],
      github: "https://github.com/Showmick119/GT-ClassLinker",
    },
    {
      title: "AtmosAI",
      href: "https://devpost.com/software/jurrasiq",
      description: "An AI Assistant for Archaeologists.",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: AtmosAIImage,
      imageAlt: "AtmosAI",
      technologies: ["Tensorflow.js", "Scikit-learn", "pandas", "Folium", "Next.js", "Tailwind CSS"],
      github: "https://github.com/Showmick119/JurrasIQ",
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
