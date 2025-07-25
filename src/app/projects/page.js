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
import DSGTImage from "../assets/projects/DSGT.jpg";
import WebDevImage from "../assets/projects/Webdev.png";


import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Implementing Attention Is All You Need",
      href: "https://colab.research.google.com/github/Showmick119/Implementing-Attention-Is-All-You-Need/blob/main/notebooks/transformer_train.ipynb",
      description: "implementing the transformer architecture from scratch in pytorch",
      details: [
        "achieved a 14.8 BLEU score (~35% of original paper's performance) on English-Italian translation whilst using resource efficient training with single A100 GPU versus paper's 8x P100 GPU setup",
        "processed 1.25M English-Italian sentence pairs (19.5M tokens) from OPUS Books dataset with custom tokenization and efficient data loading pipeline",
        "deployed scalable training pipeline with checkpoint management, and Weights & Biases experiment tracking, optimizing for GPU memory constraints",
      ],
      image: AttentionImage,
      imageAlt: "AttentionImage",
      technologies: ["Python", "PyTorch", "Hugging Face", "Weights & Biases", "GitHub Actions", "CI Pipeline", "pytest"],
      github: "https://github.com/Showmick119/Implementing-Attention-Is-All-You-Need",
    },
    {
      title: "Fine-tuning Code Llama For FastAPI Code Generation",
      href: "https://huggingface.co/Showmick119/codellama-7b-fastapi-finetuned-20250713",
      description: "most downloaded code llama adapter on the hugging face hub",
      details: [
        "developed an automated GitHub mining pipeline that processed over 120 FastAPI repositories, extracting production-grade code patterns—including authentication, database integration (SQLAlchemy, MongoDB), input validation, and error handling—via advanced AST parsing and pattern recognition, resulting in a comprehensive, curated dataset for model fine-tuning",
        "boosted FastAPI code generation accuracy and completeness by 13.7%, leveraging custom domain-specific evaluation metrics and a GPT-based “LLM as a Judge”",
        "reduced GPU memory usage by approximately 75% and enabled single-GPU (T4, 15GB VRAM) training by adopting 4-bit quantization and LoRA adapters, cutting training time by over 50% compared to full-parameter fine-tuning",
      ],
      image: FineTuningImage,
      imageAlt: "FineTuningImage",
      technologies: ["Python", "PyTorch", "Hugging Face", "PEFT", "bitsandbytes", "FastAPI", "GitHub API", "OpenAI API"],
      github: "https://github.com/Showmick119/Fine-Tuning-Open-Source-LLM",
    },
    {
      title: "Neural Network In Java",
      href: "https://github.com/Showmick119/Neural-Network-Single-Layer-Perceptron",
      description: "implemented a single-layer perceptron (SLP) in java",
      details: [
        "predicts LLM affinity based on an individual's personality traits, achieving ~76% accuracy",
        "supports custom-built activation functions like ReLU, ELU and sigmoid",
        "follows encapsulated class structure, enums, method overloading and other object-oriented principles",
        "implemented a CI pipeline with GitHub Actions to automate Java builds and test execution with JUnit"
      ],
      image: JavaNNImage,
      imageAlt: "JavaNNImage",
      technologies: ["Java", "GitHub Actions", "CI Pipeline", "JUnit"],
      github: "https://github.com/Showmick119/Neural-Network-Single-Layer-Perceptron",
    },
    {
      title: "JurassIQ",
      href: "https://devpost.com/software/jurrasiq",
      description: "an AI assistant for archaeologists",
      details: [
        "built a machine learning model that analyzes historical excavation data and geospatial patterns to predict fossil-rich excavation hotspots",
        "designed an AI system that generates structured excavation plans, estimating costs, workforce, logistics, and excavation duration to assist archaeologists",
        "fine-tuned MobileNetV2 on 100,000+ synthetic data points and 5,000 real fossil images to classify fossils, determine species, and predict market value",
        "processed and visualized over 240,000+ excavation-related data points on a world map, enabling archaeologists to explore fossil distribution interactively",
      ],
      image: JurassIQImage,
      imageAlt: "JurassIQ",
      technologies: ["Tensorflow.js", "Scikit-learn", "pandas", "Folium", "OpenCV", "Leaflet.js", "FastAPI", "OpenAI API"],
      github: "https://github.com/Showmick119/JurrasIQ",
    },
    {
      title: "Geoguard",
      href: "https://devpost.com/software/geoguard",
      description: "a safety-focused web application for Atlanta residents",
      details: [
        "features real-time alerts that notify users when approaching high-risk areas and an interactive heatmap for visualizing crime data from Atlanta PD",
        "incorporated a custom shape-drawing tool allowing users to select specific map areas for detailed crime analysis and an SOS button for immediate emergency calls",
        "built with React.js for a responsive user interface and used MongoDB Atlas to securely store and manage historical crime data",
        "implemented robust server-side communication protocols with Node.js to handle real-time data updates",
      ],
      image: GeoguardImage,
      imageAlt: "Geoguard",
      technologies: ["React.js", "Node.js", "MongoDB Atlas", "Figma"],
      github: "https://github.com/Showmick119/Geoguard-HackGT11",
    },
    {
      title: "Searching & Sorting Algorithms In Java",
      href: "https://github.com/Showmick119/Searching-and-Sorting-Algorithms",
      description: "implementing merge sort, insertion sort and binary search from scratch in Java",
      details: [
        "using the algorithms in a system to rank programming languages based on various attributes",
        "utilized inheritance, polymorphism, encapsulation, amongst other object-oriented principles",
        "implemented my first CI pipeline with GitHub Actions to automate Java builds and test execution with JUnit",
      ],
      image: SearchSortImage,
      imageAlt: "SearchSort",
      technologies: ["Java", "GitHub Actions", "CI Pipeline", "JUnit"],
      github: "https://github.com/Showmick119/Searching-and-Sorting-Algorithms",
    },
    {
      title: "CarbonLens",
      href: "https://github.com/Showmick119/CarbonLens",
      description: "a time-series based sustainability analyzer",
      details: [
        "built a dashboard to evaluate automotive sustainability by processing over 320,000 emissions records with Pandas and visualizing CO₂ trends using Matplotlib",
        "trained and evaluated Random Forest and Prophet models, using feature engineering to forecast sustainability scores from vehicle emissions data",
        "used OpenAI’s CLIP model for car image classification, integrated the Cohere API, and applied a fine-tuned DistilBERT model with PDFPlumber to extract insights from sustainability reports and Reddit sentiment",
      ],
      image: CarbonLensImage,
      imageAlt: "CarbonLensImage",
      technologies: ["Python", "Scikit-learn", "PDFPlumber", "Reddit API", "Cohere API", "Hugging Face", "Streamlit", "pandas", "Matplotlib"],
      github: "https://github.com/Showmick119/CarbonLens",
    },
    {
      title: "RoboInvesting - DS @ GT",
      href: "https://github.com/aryan048/RoboInvesting",
      description: "an auto-investing platform using AI to personalize financial planning",
      details: [
        "contributed by integrating the OpenAI API into the Spring Boot backend and streamlining prompt engineering for personalized investment roadmap generation",
        "built and connected a Streamlit chatbot interface to enable users to interactively receive AI-driven financial plans based on their submitted financial data",
      ],
      image: DSGTImage,
      imageAlt: "DSGTImage",
      technologies: ["Java", "Spring Boot", "Python", "OpenAI API","Streamlit"],
      github: "https://github.com/aryan048/RoboInvesting",
    },
    {
      title: "Propulsive Landers Website",
      href: "https://www.gtpropulsivelanders.org/",
      description: "developed a marketing website for a georgia tech rso (registered student organization)",
      details: [
        "secured 4 new sponsorships and drove a 28% increase in member engagement and recruitment",
      ],
      image: GTPLImage,
      imageAlt: "GTPLWebsite",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Showmick119/GTPL-Website",
    },
    {
      title: "GT ClassLinker - WebDev @ GT",
      href: "https://github.com/Showmick119/GT-ClassLinker",
      description: "a platform to connect Georgia Tech students by class schedules",
      details: [
        "contributed by designing the About Me page, building key components of the Home page, and outlining the backend API structure",
      ],
      image: WebDevImage,
      imageAlt: "WebDevImage",
      technologies: ["React.js", "Tailwind CSS", "Django", "Figma"],
      github: "https://github.com/Showmick119/GT-ClassLinker",
    },
    {
      title: "AtmosAI",
      href: "https://github.com/Showmick119/AtmosAI",
      description: "an AI-powered weather analytics and chatbot platform",
      details: [
        "developed a Streamlit-based application to analyze and visualize weather data with pandas, matplotlib, and plotly",
        "offered dynamic forecasting and interactive charts powered by real-time OpenWeather API data",
        "integrated Gemini API for natural language assessment, enabling users to query weather trends and receive conversational insights",
      ],
      image: AtmosAIImage,
      imageAlt: "AtmosAI",
      technologies: ["Python", "Gemini API", "OpenWeatherAPI", "pandas", "matplotlib", "Streamlit", "plotly"],
      github: "https://github.com/Showmick119/AtmosAI",
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
