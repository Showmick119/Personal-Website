"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { RotateCcw } from "lucide-react"

export default function Component() {
  const [key, setKey] = useState(0)
  const delays = [0, 0.5, 1, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3]

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.svg 
        key={key} 
        width="300" 
        height="135" 
        viewBox="-20 0 120 70.487" 
        className="text-stone-700 dark:text-stone-500"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          stroke="currentColor"
          strokeLinecap="round"
          fillRule="evenodd"
          strokeWidth="3"
          fill="none"
          className="text-primary"
        >
          {[
  "M1 58.5 c-1 -1.3 -0.9 -1.5 0.9 -1.5 2.6 0 4.1 -3.4 3.4 -7.4 l-0.6 -2.7 -2.3 2.2 c-1.3 1.2 -2.4 1.8 -2.4 1.2 0 -0.6 0.7 -1.7 1.7 -2.4 0.9 -0.8 2.2 -2.9 3 -4.8 1.3 -3.1 1.5 -3.2 3.2 -1.7 1.4 1.2 1.7 3.1 1.7 8.6 -0.1 3.8 0.3 7 0.7 7 0.5 0 3.4 -2.6 6.5 -5.7 6.9 -7.1 10 -9.3 12.9 -9.3 1.8 0 2.9 -1.3 5.3 -6.7 3.6 -8 10.1 -16.9 13 -17.8 1.2 -0.4 2.8 -0.1 3.6 0.6 3.2 2.6 0 9.4 -10 21.2 -4.3 5 -5.9 7.7 -6.5 11.4 -0.6 2.7 -0.6 5.2 -0.1 5.7 1.2 1.2 7.3 -2.8 10.4 -6.8 3.1 -4.1 9.1 -8 11 -7.3 1 0.4 0 2 -3.5 5.5 -2.7 2.7 -4.9 5.4 -4.9 6.1 0 2.3 3.2 1 7.6 -3.1 3.5 -3.2 4.7 -3.9 5.4 -2.8 0.4 0.7 0.4 2.4 -0.1 3.7 -1.1 3.1 -1.2 5.3 0 5.3 2.2 0 12.2 -9.5 13.8 -13.1 0.9 -2.1 2 -3.9 2.4 -3.9 2.1 0 3 3.4 2.7 10 -0.1 3.8 -0.1 7 0.2 7 0.3 0 2.2 -1.4 4.3 -3.1 2 -1.7 3.7 -2.7 3.7 -2.2 0 1.3 -8.1 7.3 -10.8 8 -1.3 0.3 -3.6 0 -5 -0.7 -2.4 -1.2 -2.5 -1.4 -0.7 -1.8 1.1 -0.2 2.6 -0.9 3.3 -1.4 1.2 -1.1 1.7 -7 0.6 -8.1 -0.4 -0.3 -3.4 1.9 -6.8 4.9 -6.9 6.3 -9.7 8 -12.2 7 -1.2 -0.5 -1.5 -1.4 -1 -3.6 0.3 -1.7 0.3 -3 0.1 -3 -0.3 0 -2.6 1.6 -5.1 3.5 -5.1 3.9 -7.7 4.2 -8.2 0.8 l-0.3 -2.2 -3.6 2.5 c-2 1.3 -4.1 2.4 -4.8 2.4 -1.6 0 -4.2 -3 -4.6 -5.4 -0.4 -1.8 -0.6 -1.7 -3.4 0.6 -6.5 5.4 -9.5 5.8 -9.5 1.2 l0 -2.4 -4.2 3 c-4.5 3.3 -8.8 3.9 -10.8 1.5z m25.9 -6.2 c3 -2.8 5.2 -8.3 3.3 -8.3 -1.2 0 -9.2 8.6 -9.2 10 0 1.9 2.9 1 5.9 -1.7z m18.9 -21.6 c4.9 -7.6 6 -10.7 3.8 -10.7 -1.8 0 -5.8 5.9 -8.7 12.7 -3.8 8.8 -1.4 7.9 4.9 -2z"
].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 3.0,
                  ease: "easeInOut",
                  delay: delays[i] - 0.25
                },
                opacity: {
                  duration: 0,
                  delay: delays[i]
                }
              }}
            />
          ))}
          <motion.path
            d="M -15 65 C 20 65, 50 62, 100 62"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{
              pathLength: { duration: 1, ease: "easeInOut", delay: 1.25 },
              opacity: { duration: 0.3, delay: 1.20 }
            }}
          />
        </g>
      </motion.svg>
      <motion.button 
        onClick={() => setKey(k => k + 1)}
        className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.5 }}
      >
        <RotateCcw size={16} />
      </motion.button>
    </div>
  )
}