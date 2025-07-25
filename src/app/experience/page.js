"use client";

import Link from "../components/Link";
import Image from "next/image";
import UGALogo from "@/app/components/icon/UGA.png";
import ApacheLogo from "@/app/components/icon/apache1.png";
import GTLogo from "@/app/components/icon/GTLogo.png";
import StanfordLogo from "@/app/components/icon/stanford.png";
import SOLshareLogo from "@/app/components/icon/solshare.png";

export default function Experience() {
  const experiences = [
    {
      company: "Apache Software Foundation",
      companyUrl: "https://apache.org",
      companyLogo: ApacheLogo,
      position: "Distributed Systems Researcher - Airavata & Cybershuttle",
      duration: "May 2025 - July 2025",
      location: "Wilmington, Delaware, United States",
      description: [
        "developed MCP server with 12+ FastAPI endpoints integrating Qwen3 LLM with Apache Airavata's $5M NSF-funded research platform, enabling natural language queries across 1000+ distributed scientific datasets, repositories, models, and notebooks",
        "built OAuth2 authentication pipeline and LangChain adapters supporting 50+ concurrent researcher connections with 99%+ uptime, transforming manual API workflows into conversational AI interfaces",
      ]
    },
    {
      company: "University of Georgia",
      companyUrl: "https://publichealth.uga.edu/departments/epidemiology-biostatistics/",
      companyLogo: UGALogo,
      position: "Machine Learning Intern - Department of Epidemiology & Biostatistics",
      duration: "May 2025 - July 2025",
      location: "Athens, Georgia, United States",
      description: [
        "architected a XGBoost peak classification model achieving 98.4% accuracy for automated PPG signal processing, improving 76.8% of Heart Rate Variability predictions and reducing training time by 16% through T4 GPU acceleration",
        "trained a 1D CNN classifier for signal quality assessment (0.976 F1 score) with Bayesian hyperparameter tuning, integrating it as a preprocessing head to reduce BiLSTM model's RMSE by 65% and eliminate training instabilities",
        "collaborating with PhD researchers from Emory and Georgia Tech to co-author technical white papers and contribute to an abstract"
      ]
    },
    {
      company: "Stanford University",
      companyUrl: "https://codeinplace.stanford.edu/",
      companyLogo: StanfordLogo,
      position: "Section Leader - CS106A",
      duration: "Apr 2025 - May 2025",
      location: "Stanford, California, United States",
      description: [
        "conducted weekly coding sessions, taught core Python concepts including control flow, data structures (lists, dictionaries), and object-oriented programming principles",
        "graded assignments, distributed instructional material, and reinforced key programming concepts through structured exercises",
        "throughout the 2 month program, attendance improved by 16.7% under my teaching"
      ]
    },
    {
      company: "Georgia Tech - Artificial Intelligence Lab",
      companyUrl: "https://ml.gatech.edu/content/mlgt-labs",
      companyLogo: GTLogo,
      position: "Research Assistant",
      duration: "Jan 2025 - May 2025",
      location: "Atlanta, Georgia, United States",
      description: [
        "worked on Large Pre-Trained Time-Series Models (LPTMs) under Dr. Prakash, developing a RESTful Flask API with reverse proxy techniques to enable model loading, dataset uploads, fine-tuning, and inference on a private NVIDIA DGX server",
        "built an interactive dashboard that allows users to upload datasets, run model forecasts, and explore summarized research findings — including methodologies, outcomes, and comparisons across other foundational time-series models like MOMENT, Chronos, and TimesFM",
        "fine-tuned the LPTM and benchmarked its performance against other foundational models like Chronos, TimesFM, TimeMoE, MOMENT, and Moirai"
      ]
    },
    {
      company: "Georgia Tech - Exascale CFD Lab",
      companyUrl: "https://vip.gatech.edu/teams/vyr",
      companyLogo: GTLogo,
      position: "Research Assistant",
      duration: "Jan 2025 - Apr 2025",
      location: "Atlanta, Georgia, United States",
      description: [
        "developed matrix addition, scalar multiplication, and matrix-vector operations in C++ and ported them to Kokkos for GPU-accelerated CFD solvers while working under Dr. Jain",
        "conducted literature reviews and researched ML-based acceleration techniques for CFD, focusing on operator learning, super-resolution, and future flow state prediction using neural networks",
        "wrote and tested PyTorch scripts to prototype models for real-time inference and to predict coefficients in the 1D Burgers' equation",
      ]
    },
    {
      company: "SOLshare Ltd.",
      companyUrl: "https://solshare.com/",
      companyLogo: SOLshareLogo,
      position: "Electrical Engineering Intern",
      duration: "Jan 2022 - Mar 2022",
      location: "Dhaka, Bangladesh",
      description: [
        "collaborated with SOLshare's Engineering team to design a portable solar panel delivering 25 watts of charging for up to 3 hours",
        "prototyped solar solutions using Fusion 360, supporting SOLshare's mission to expand clean energy access",
        "engineered circuit boards with soldering and wiring techniques to ensure device reliability",
        "tested and validated products using Arduino IDE and C++ to meet safety and performance standards",
      ]
    }
    // Add more experiences as needed
  ];

  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-stone-600 dark:text-stone-400 text-base">
          My professional journey and key experiences building impactful software and conducting research.
        </p>
      </div>
      
      <ul className="grid gap-6 text-base">
        {experiences.map((exp, index) => (
          <li key={index} className="group flex flex-col gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
            <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
            
            {/* Company Name with Logo */}
            <div className="flex items-center gap-3">
              {exp.companyLogo && (
                <Image 
                  src={exp.companyLogo} 
                  alt={`${exp.company} Logo`} 
                  width={32} 
                  height={32} 
                  className="object-contain rounded-md"
                />
              )}
              <Link href={exp.companyUrl} className="text-stone-800 dark:text-stone-200 font-semibold text-lg hover:text-stone-600 dark:hover:text-stone-400 transition-colors">
                {exp.company}
              </Link>
            </div>
            
            {/* Position and Details */}
            <div className="flex flex-col gap-2">
              <h3 className="text-stone-700 dark:text-stone-300 font-medium text-base">
                {exp.position}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-stone-500 dark:text-stone-500">
                <span className="font-medium">{exp.duration}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.location}</span>
              </div>
            </div>
            
            {/* Description with nested bullets */}
            <ul className="grid gap-1 pl-4">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex} className="relative flex items-start gap-4 group/item">
                  <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
                  <span className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      
      {/* Call to action */}
      <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-8">
        <span>want to work together? </span>
        <span>→</span>
        <Link href="https://www.linkedin.com/in/showmick-das/" className="font-medium">
          let&#39;s connect
        </Link>
      </div>
    </div>
  );
}
