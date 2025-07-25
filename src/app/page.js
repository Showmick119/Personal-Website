"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.png";
import Signature from "@/app/components/Signature";
import GTLogo from "@/app/components/icon/GTLogo.png";
import ApacheLogo from "@/app/components/icon/apache1.png";
import Image from "next/image";
import { useState } from "react";
import { GalleryHorizontalEnd, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <ul className="grid gap-1 text-base">
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
          💻 cs @ {" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={GTLogo} alt="Georgia Tech Logo" width={14} height={14} className="object-contain relative top-[-1px]" />
              <Link href="https://www.gatech.edu/" className="font-medium">
                Georgia Tech
              </Link>
            </span>
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                <strong>🎓 GPA:</strong> 4.00/4.00
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                <strong>📅 Expected Graduation:</strong> May 2027
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                <strong>🔍 Concentration:</strong> Information Internetworks & Intelligence
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                <strong>📚 Relevant Coursework:</strong> Data Structures & Algorithms, Machine Learning, Object-Oriented Programming, Computing In Python, Linear Algebra, Calculus I, Calculus II
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                <strong>🤝 Activities & Societies:</strong> Big Data Big Impact @ GT, Data Science @ GT, WebDev @ GT, Vertically Integrated Projects, Propulsive Landers @ GT
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">🎯 recently:</span>
          <ul className="grid gap-1 pl-4">
          <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                <strong>Distributed Systems Researcher</strong> at{" "}
                <span className="inline-flex items-baseline gap-1">
                  <Image src={ApacheLogo} alt="Apache Logo" width={20} height={18} className="object-contain relative top-[7px]" />
                  <Link href="https://apache.org" className="font-medium">
                    Apache
                  </Link>
                </span>
                <strong> Software Foundation</strong>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                🚀 fine-tuned the {" "}
                <Link href="https://github.com/Showmick119/Fine-Tuning-Open-Source-LLM" className="font-medium">
                  code llama model
                </Link>{" "}
                for FastAPI code generation tasks, achieving a 13.7% improvement over base model, becoming the most downloaded code llama adapter on 🤗 hugging face 
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                ⚡ implemented the {" "}
                <Link href="https://github.com/Showmick119/Implementing-Attention-Is-All-You-Need" className="font-medium">
                  attention is all you need
                </Link>{" "}
                paper achieving 14.8 BLEU score (~35% of the paper&#39;s performance) while training on a single A100 gpu versus paper&#39;s 8x P100 gpu setup
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see what i&#39;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <NextLink
        href="/experience"
        className="text-center mt-3 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see where i&#39;ve worked{" "}
        <Briefcase className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-4">
        <span>or, </span>
        <span>→</span>
        <Link href="/resume.pdf" className="font-medium">
          view my resume
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="relative flex-1 flex items-center justify-center sm:justify-center mr-0 sm:mr-8 mb-4 sm:mb-0">
          <Signature />
        </div>
        <div className="w-48 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
          <Image
            src={Headshot}
            alt="Showmick Headshot"
            className="object-cover object-top rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
