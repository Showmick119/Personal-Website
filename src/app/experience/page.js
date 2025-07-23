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
      position: "Distributed Systems Researcher",
      duration: "June 2024 - Present",
      location: "Remote",
      description: [
        "Fine-tuned Code Llama model for FastAPI code generation, achieving ~15.7% improvement over base model",
        "Became the most downloaded Code Llama adapter on Hugging Face with 10,000+ downloads",
        "Implemented transformer architecture from 'Attention is All You Need' paper, achieving 14.8 BLEU score"
      ]
    },
    {
      company: "University of Georgia",
      companyUrl: "https://uga.edu",
      companyLogo: UGALogo,
      position: "Machine Learning Intern",
      duration: "May 2025 - July 2025",
      location: "Athens, Georgia, United States",
      description: [
        "Developed and implemented machine learning models for data analysis and prediction tasks",
        "Collaborated with research teams to optimize algorithms and improve model performance",
        "Contributed to research publications and presented findings at academic conferences"
      ]
    },
    {
      company: "Stanford University",
      companyUrl: "https://uga.edu",
      companyLogo: StanfordLogo,
      position: "Section Leader",
      duration: "May 2025 - July 2025",
      location: "Athens, Georgia, United States",
      description: [
        "Developed and implemented machine learning models for data analysis and prediction tasks",
        "Collaborated with research teams to optimize algorithms and improve model performance",
        "Contributed to research publications and presented findings at academic conferences"
      ]
    },
    {
      company: "Georgia Tech - Artificial Intelligence Lab",
      companyUrl: "https://apache.org",
      companyLogo: GTLogo,
      position: "Research Assistant",
      duration: "June 2024 - Present",
      location: "Remote",
      description: [
        "Fine-tuned Code Llama model for FastAPI code generation, achieving ~15.7% improvement over base model",
        "Became the most downloaded Code Llama adapter on Hugging Face with 10,000+ downloads",
        "Implemented transformer architecture from 'Attention is All You Need' paper, achieving 14.8 BLEU score"
      ]
    },
    {
      company: "Georgia Tech - Exascale CFD Lab",
      companyUrl: "https://apache.org",
      companyLogo: GTLogo,
      position: "Research Assistant",
      duration: "June 2024 - Present",
      location: "Remote",
      description: [
        "Fine-tuned Code Llama model for FastAPI code generation, achieving ~15.7% improvement over base model",
        "Became the most downloaded Code Llama adapter on Hugging Face with 10,000+ downloads",
        "Implemented transformer architecture from 'Attention is All You Need' paper, achieving 14.8 BLEU score"
      ]
    },
    {
      company: "ME SOLshare Ltd.",
      companyUrl: "https://apache.org",
      companyLogo: SOLshareLogo,
      position: "Electrical Engineering Intern",
      duration: "June 2024 - Present",
      location: "Remote",
      description: [
        "Fine-tuned Code Llama model for FastAPI code generation, achieving ~15.7% improvement over base model",
        "Became the most downloaded Code Llama adapter on Hugging Face with 10,000+ downloads",
        "Implemented transformer architecture from 'Attention is All You Need' paper, achieving 14.8 BLEU score"
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
