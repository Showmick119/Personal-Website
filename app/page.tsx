"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, Rocket } from "lucide-react"

export default function ShowmickPortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* GLOBAL CURSOR - OUTSIDE MAIN CONTAINER */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none mix-blend-difference"
        style={{
          transform: "translate3d(-16px, -16px, 0)",
          willChange: "transform",
          zIndex: 999999,
          top: 0,
          left: 0,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-cyan-400 bg-cyan-400/20 backdrop-blur-sm">
          <div className="absolute inset-2 rounded-full bg-cyan-400/40 animate-pulse" />
          <div className="absolute inset-1 rounded-full border border-cyan-300/60" />
        </div>
      </div>

      {/* GLOBAL BINARY BACKGROUND - OUTSIDE MAIN CONTAINER */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          zIndex: 1,
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/20" />

        {/* Binary Elements */}
        {/* Main Layer */}
        <div className="binary-main-1">101010110</div>
        <div className="binary-main-2">110100101</div>
        <div className="binary-main-3">001110011</div>
        <div className="binary-main-4">111000110</div>
        <div className="binary-main-5">010101010</div>
        <div className="binary-main-6">110011001</div>
        <div className="binary-main-7">101101011</div>
        <div className="binary-main-8">011010110</div>
        <div className="binary-main-9">100111001</div>
        <div className="binary-main-10">111010101</div>
        <div className="binary-main-11">001011110</div>
        <div className="binary-main-12">110101001</div>
        <div className="binary-main-13">010110111</div>
        <div className="binary-main-14">101001110</div>
        <div className="binary-main-15">011101010</div>
        <div className="binary-main-16">100110101</div>
        <div className="binary-main-17">111001011</div>
        <div className="binary-main-18">010111100</div>
        <div className="binary-main-19">101010011</div>
        <div className="binary-main-20">110100110</div>
        <div className="binary-main-21">001110101</div>
        <div className="binary-main-22">111000011</div>
        <div className="binary-main-23">101110010</div>
        <div className="binary-main-24">011001101</div>
        <div className="binary-main-25">110110100</div>
        <div className="binary-main-26">010011111</div>
        <div className="binary-main-27">111101001</div>
        <div className="binary-main-28">001100110</div>
        <div className="binary-main-29">101011010</div>
        <div className="binary-main-30">110010111</div>

        {/* Secondary Layer */}
        <div className="binary-sec-1">1</div>
        <div className="binary-sec-2">0</div>
        <div className="binary-sec-3">1</div>
        <div className="binary-sec-4">0</div>
        <div className="binary-sec-5">1</div>
        <div className="binary-sec-6">0</div>
        <div className="binary-sec-7">1</div>
        <div className="binary-sec-8">0</div>
        <div className="binary-sec-9">1</div>
        <div className="binary-sec-10">0</div>
        <div className="binary-sec-11">1</div>
        <div className="binary-sec-12">0</div>
        <div className="binary-sec-13">1</div>
        <div className="binary-sec-14">0</div>
        <div className="binary-sec-15">1</div>
        <div className="binary-sec-16">0</div>
        <div className="binary-sec-17">1</div>
        <div className="binary-sec-18">0</div>
        <div className="binary-sec-19">1</div>
        <div className="binary-sec-20">0</div>
        <div className="binary-sec-21">1</div>
        <div className="binary-sec-22">0</div>
        <div className="binary-sec-23">1</div>
        <div className="binary-sec-24">0</div>
        <div className="binary-sec-25">1</div>

        {/* Tertiary Layer */}
        <div className="binary-ter-1">1</div>
        <div className="binary-ter-2">0</div>
        <div className="binary-ter-3">1</div>
        <div className="binary-ter-4">0</div>
        <div className="binary-ter-5">1</div>
        <div className="binary-ter-6">0</div>
        <div className="binary-ter-7">1</div>
        <div className="binary-ter-8">0</div>
        <div className="binary-ter-9">1</div>
        <div className="binary-ter-10">0</div>
        <div className="binary-ter-11">1</div>
        <div className="binary-ter-12">0</div>
        <div className="binary-ter-13">1</div>
        <div className="binary-ter-14">0</div>
        <div className="binary-ter-15">1</div>
        <div className="binary-ter-16">0</div>
        <div className="binary-ter-17">1</div>
        <div className="binary-ter-18">0</div>
        <div className="binary-ter-19">1</div>
        <div className="binary-ter-20">0</div>
        <div className="binary-ter-21">1</div>
        <div className="binary-ter-22">0</div>
        <div className="binary-ter-23">1</div>
        <div className="binary-ter-24">0</div>
        <div className="binary-ter-25">1</div>
        <div className="binary-ter-26">0</div>
        <div className="binary-ter-27">1</div>
        <div className="binary-ter-28">0</div>
        <div className="binary-ter-29">1</div>
        <div className="binary-ter-30">0</div>
        <div className="binary-ter-31">1</div>
        <div className="binary-ter-32">0</div>
        <div className="binary-ter-33">1</div>
        <div className="binary-ter-34">0</div>
        <div className="binary-ter-35">1</div>
        <div className="binary-ter-36">0</div>
        <div className="binary-ter-37">1</div>
        <div className="binary-ter-38">0</div>
        <div className="binary-ter-39">1</div>
        <div className="binary-ter-40">0</div>
        <div className="binary-ter-41">1</div>
        <div className="binary-ter-42">0</div>
        <div className="binary-ter-43">1</div>
        <div className="binary-ter-44">0</div>
        <div className="binary-ter-45">1</div>
        <div className="binary-ter-46">0</div>
        <div className="binary-ter-47">1</div>
        <div className="binary-ter-48">0</div>
        <div className="binary-ter-49">1</div>
        <div className="binary-ter-50">0</div>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        /* Remove cursor from all elements */
        * {
          cursor: none !important;
        }

        /* Binary element base styles */
        [class*="binary-"] {
          position: fixed !important;
          font-family: monospace;
          pointer-events: none;
          user-select: none;
          z-index: 2 !important;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        /* Main Layer Styles */
        .binary-main-1 { left: 5vw; top: 10vh; font-size: 18px; color: rgba(34, 211, 238, 0.18); animation: globalFloat1 22s linear infinite; }
        .binary-main-2 { left: 15vw; top: 20vh; font-size: 20px; color: rgba(34, 211, 238, 0.17); animation: globalFloat2 26s linear infinite; }
        .binary-main-3 { left: 25vw; top: 15vh; font-size: 19px; color: rgba(34, 211, 238, 0.19); animation: globalFloat3 24s linear infinite; }
        .binary-main-4 { left: 35vw; top: 25vh; font-size: 21px; color: rgba(34, 211, 238, 0.16); animation: globalFloat4 28s linear infinite; }
        .binary-main-5 { left: 45vw; top: 5vh; font-size: 18px; color: rgba(34, 211, 238, 0.20); animation: globalFloat1 23s linear infinite; }
        .binary-main-6 { left: 55vw; top: 30vh; font-size: 22px; color: rgba(34, 211, 238, 0.18); animation: globalFloat2 25s linear infinite; }
        .binary-main-7 { left: 65vw; top: 12vh; font-size: 17px; color: rgba(34, 211, 238, 0.17); animation: globalFloat3 27s linear infinite; }
        .binary-main-8 { left: 75vw; top: 22vh; font-size: 20px; color: rgba(34, 211, 238, 0.19); animation: globalFloat4 22s linear infinite; }
        .binary-main-9 { left: 85vw; top: 8vh; font-size: 19px; color: rgba(34, 211, 238, 0.16); animation: globalFloat1 29s linear infinite; }
        .binary-main-10 { left: 95vw; top: 18vh; font-size: 21px; color: rgba(34, 211, 238, 0.18); animation: globalFloat2 21s linear infinite; }
        .binary-main-11 { left: 10vw; top: 40vh; font-size: 18px; color: rgba(34, 211, 238, 0.20); animation: globalFloat3 30s linear infinite; }
        .binary-main-12 { left: 20vw; top: 50vh; font-size: 20px; color: rgba(34, 211, 238, 0.17); animation: globalFloat4 24s linear infinite; }
        .binary-main-13 { left: 30vw; top: 45vh; font-size: 19px; color: rgba(34, 211, 238, 0.19); animation: globalFloat1 26s linear infinite; }
        .binary-main-14 { left: 40vw; top: 55vh; font-size: 22px; color: rgba(34, 211, 238, 0.16); animation: globalFloat2 23s linear infinite; }
        .binary-main-15 { left: 50vw; top: 60vh; font-size: 17px; color: rgba(34, 211, 238, 0.18); animation: globalFloat3 28s linear infinite; }
        .binary-main-16 { left: 60vw; top: 48vh; font-size: 21px; color: rgba(34, 211, 238, 0.20); animation: globalFloat4 25s linear infinite; }
        .binary-main-17 { left: 70vw; top: 58vh; font-size: 18px; color: rgba(34, 211, 238, 0.17); animation: globalFloat1 27s linear infinite; }
        .binary-main-18 { left: 80vw; top: 42vh; font-size: 20px; color: rgba(34, 211, 238, 0.19); animation: globalFloat2 22s linear infinite; }
        .binary-main-19 { left: 90vw; top: 52vh; font-size: 19px; color: rgba(34, 211, 238, 0.16); animation: globalFloat3 29s linear infinite; }
        .binary-main-20 { left: 12vw; top: 70vh; font-size: 22px; color: rgba(34, 211, 238, 0.18); animation: globalFloat4 21s linear infinite; }
        .binary-main-21 { left: 22vw; top: 80vh; font-size: 17px; color: rgba(34, 211, 238, 0.20); animation: globalFloat1 28s linear infinite; }
        .binary-main-22 { left: 32vw; top: 75vh; font-size: 21px; color: rgba(34, 211, 238, 0.17); animation: globalFloat2 24s linear infinite; }
        .binary-main-23 { left: 42vw; top: 85vh; font-size: 18px; color: rgba(34, 211, 238, 0.19); animation: globalFloat3 26s linear infinite; }
        .binary-main-24 { left: 52vw; top: 35vh; font-size: 20px; color: rgba(34, 211, 238, 0.16); animation: globalFloat4 23s linear infinite; }
        .binary-main-25 { left: 62vw; top: 65vh; font-size: 19px; color: rgba(34, 211, 238, 0.18); animation: globalFloat1 27s linear infinite; }
        .binary-main-26 { left: 72vw; top: 18vh; font-size: 22px; color: rgba(34, 211, 238, 0.20); animation: globalFloat2 25s linear infinite; }
        .binary-main-27 { left: 82vw; top: 78vh; font-size: 17px; color: rgba(34, 211, 238, 0.17); animation: globalFloat3 29s linear infinite; }
        .binary-main-28 { left: 92vw; top: 38vh; font-size: 21px; color: rgba(34, 211, 238, 0.19); animation: globalFloat4 22s linear infinite; }
        .binary-main-29 { left: 2vw; top: 68vh; font-size: 18px; color: rgba(34, 211, 238, 0.16); animation: globalFloat1 26s linear infinite; }
        .binary-main-30 { left: 88vw; top: 28vh; font-size: 20px; color: rgba(34, 211, 238, 0.18); animation: globalFloat2 24s linear infinite; }

        /* Secondary Layer Styles */
        .binary-sec-1 { left: 8vw; top: 18vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat2 35s linear infinite; }
        .binary-sec-2 { left: 18vw; top: 28vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat3 37s linear infinite; }
        .binary-sec-3 { left: 28vw; top: 38vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat1 33s linear infinite; }
        .binary-sec-4 { left: 38vw; top: 48vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat4 36s linear infinite; }
        .binary-sec-5 { left: 48vw; top: 58vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat2 34s linear infinite; }
        .binary-sec-6 { left: 58vw; top: 68vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat3 38s linear infinite; }
        .binary-sec-7 { left: 68vw; top: 78vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat1 32s linear infinite; }
        .binary-sec-8 { left: 78vw; top: 88vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat4 35s linear infinite; }
        .binary-sec-9 { left: 88vw; top: 18vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat2 39s linear infinite; }
        .binary-sec-10 { left: 98vw; top: 28vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat3 31s linear infinite; }
        .binary-sec-11 { left: 3vw; top: 33vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat1 37s linear infinite; }
        .binary-sec-12 { left: 13vw; top: 63vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat4 33s linear infinite; }
        .binary-sec-13 { left: 23vw; top: 13vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat2 36s linear infinite; }
        .binary-sec-14 { left: 33vw; top: 73vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat3 34s linear infinite; }
        .binary-sec-15 { left: 43vw; top: 23vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat1 38s linear infinite; }
        .binary-sec-16 { left: 53vw; top: 83vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat4 32s linear infinite; }
        .binary-sec-17 { left: 63vw; top: 43vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat2 35s linear infinite; }
        .binary-sec-18 { left: 73vw; top: 53vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat3 39s linear infinite; }
        .binary-sec-19 { left: 83vw; top: 33vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat1 31s linear infinite; }
        .binary-sec-20 { left: 93vw; top: 63vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat4 37s linear infinite; }
        .binary-sec-21 { left: 7vw; top: 47vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat2 33s linear infinite; }
        .binary-sec-22 { left: 17vw; top: 77vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat3 36s linear infinite; }
        .binary-sec-23 { left: 27vw; top: 57vh; font-size: 15px; color: rgba(168, 85, 247, 0.13); animation: globalFloat1 34s linear infinite; }
        .binary-sec-24 { left: 37vw; top: 67vh; font-size: 17px; color: rgba(168, 85, 247, 0.15); animation: globalFloat4 38s linear infinite; }
        .binary-sec-25 { left: 47vw; top: 37vh; font-size: 16px; color: rgba(168, 85, 247, 0.14); animation: globalFloat2 32s linear infinite; }

        /* Tertiary Layer Styles */
        .binary-ter-1 { left: 6vw; top: 16vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 43s linear infinite; }
        .binary-ter-2 { left: 16vw; top: 26vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 45s linear infinite; }
        .binary-ter-3 { left: 26vw; top: 36vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 41s linear infinite; }
        .binary-ter-4 { left: 36vw; top: 46vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 47s linear infinite; }
        .binary-ter-5 { left: 46vw; top: 56vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 42s linear infinite; }
        .binary-ter-6 { left: 56vw; top: 66vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 46s linear infinite; }
        .binary-ter-7 { left: 66vw; top: 76vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 40s linear infinite; }
        .binary-ter-8 { left: 76vw; top: 86vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 48s linear infinite; }
        .binary-ter-9 { left: 86vw; top: 6vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 44s linear infinite; }
        .binary-ter-10 { left: 96vw; top: 36vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 39s linear infinite; }
        .binary-ter-11 { left: 1vw; top: 61vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 47s linear infinite; }
        .binary-ter-12 { left: 11vw; top: 11vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 41s linear infinite; }
        .binary-ter-13 { left: 21vw; top: 71vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 45s linear infinite; }
        .binary-ter-14 { left: 31vw; top: 21vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 42s linear infinite; }
        .binary-ter-15 { left: 41vw; top: 81vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 46s linear infinite; }
        .binary-ter-16 { left: 51vw; top: 31vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 40s linear infinite; }
        .binary-ter-17 { left: 61vw; top: 41vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 48s linear infinite; }
        .binary-ter-18 { left: 71vw; top: 51vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 43s linear infinite; }
        .binary-ter-19 { left: 81vw; top: 61vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 39s linear infinite; }
        .binary-ter-20 { left: 91vw; top: 71vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 47s linear infinite; }
        .binary-ter-21 { left: 4vw; top: 44vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 41s linear infinite; }
        .binary-ter-22 { left: 14vw; top: 54vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 45s linear infinite; }
        .binary-ter-23 { left: 24vw; top: 64vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 42s linear infinite; }
        .binary-ter-24 { left: 34vw; top: 74vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 46s linear infinite; }
        .binary-ter-25 { left: 44vw; top: 84vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 40s linear infinite; }
        .binary-ter-26 { left: 54vw; top: 14vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 48s linear infinite; }
        .binary-ter-27 { left: 64vw; top: 24vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 43s linear infinite; }
        .binary-ter-28 { left: 74vw; top: 34vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 39s linear infinite; }
        .binary-ter-29 { left: 84vw; top: 44vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 47s linear infinite; }
        .binary-ter-30 { left: 94vw; top: 54vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 41s linear infinite; }
        .binary-ter-31 { left: 7vw; top: 77vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 45s linear infinite; }
        .binary-ter-32 { left: 17vw; top: 87vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 42s linear infinite; }
        .binary-ter-33 { left: 27vw; top: 7vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 46s linear infinite; }
        .binary-ter-34 { left: 37vw; top: 17vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 40s linear infinite; }
        .binary-ter-35 { left: 47vw; top: 27vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 48s linear infinite; }
        .binary-ter-36 { left: 57vw; top: 37vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 43s linear infinite; }
        .binary-ter-37 { left: 67vw; top: 47vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 39s linear infinite; }
        .binary-ter-38 { left: 77vw; top: 57vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 47s linear infinite; }
        .binary-ter-39 { left: 87vw; top: 67vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 41s linear infinite; }
        .binary-ter-40 { left: 97vw; top: 77vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 45s linear infinite; }
        .binary-ter-41 { left: 2vw; top: 87vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 42s linear infinite; }
        .binary-ter-42 { left: 12vw; top: 27vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 46s linear infinite; }
        .binary-ter-43 { left: 92vw; top: 17vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 40s linear infinite; }
        .binary-ter-44 { left: 52vw; top: 87vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 48s linear infinite; }
        .binary-ter-45 { left: 9vw; top: 9vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 44s linear infinite; }
        .binary-ter-46 { left: 19vw; top: 49vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 41s linear infinite; }
        .binary-ter-47 { left: 29vw; top: 89vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat3 47s linear infinite; }
        .binary-ter-48 { left: 39vw; top: 29vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat4 43s linear infinite; }
        .binary-ter-49 { left: 49vw; top: 69vh; font-size: 14px; color: rgba(59, 130, 246, 0.12); animation: globalFloat1 45s linear infinite; }
        .binary-ter-50 { left: 59vw; top: 19vh; font-size: 13px; color: rgba(59, 130, 246, 0.14); animation: globalFloat2 42s linear infinite; }

        @keyframes globalFloat1 {
          0% { 
            transform: translate3d(0, 100vh, 0); 
            opacity: 1; 
          }
          100% { 
            transform: translate3d(30px, -100px, 0); 
            opacity: 0; 
          }
        }
        
        @keyframes globalFloat2 {
          0% { 
            transform: translate3d(0, 100vh, 0); 
            opacity: 1; 
          }
          100% { 
            transform: translate3d(-40px, -100px, 0); 
            opacity: 0; 
          }
        }
        
        @keyframes globalFloat3 {
          0% { 
            transform: translate3d(0, 100vh, 0); 
            opacity: 1; 
          }
          100% { 
            transform: translate3d(20px, -100px, 0); 
            opacity: 0; 
          }
        }
        
        @keyframes globalFloat4 {
          0% { 
            transform: translate3d(0, 100vh, 0); 
            opacity: 1; 
          }
          100% { 
            transform: translate3d(-20px, -100px, 0); 
            opacity: 0; 
          }
        }
      `}</style>

      {/* MAIN CONTENT CONTAINER */}
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Navigation */}
        <nav
          className="fixed top-0 left-0 right-0 backdrop-blur-md bg-black/20 border-b border-cyan-400/20"
          style={{ zIndex: 30 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {"<SHOWMICK/>"}
              </div>
              <div className="hidden md:flex space-x-8">
                {[
                  { name: "Home", ref: heroRef },
                  { name: "About", ref: aboutRef },
                  { name: "Experience", ref: experienceRef },
                  { name: "Projects", ref: projectsRef },
                  { name: "Contact", ref: contactRef },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className="relative group text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <div className="text-center space-y-8 px-6">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
                  H
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
                  E
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                  L
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>
                  L
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
                  O
                </span>
              </h1>
              <div className="text-2xl md:text-4xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                I'm Showmick - Futuristic Developer
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that push the boundaries of what's possible. Welcome to the future of web
              development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection(projectsRef)}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 will-change-transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                onClick={() => scrollToSection(contactRef)}
                variant="outline"
                className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent will-change-transform"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get In Touch
                </span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: Github, href: "#", color: "hover:text-gray-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Mail, href: "#", color: "hover:text-red-400" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-2xl text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:rotate-12 will-change-transform`}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Rest of the website with distinct section colors */}
        <div className="relative" style={{ zIndex: 10 }}>
          {/* About Section - Distinct Blue Tint */}
          <section
            ref={aboutRef}
            className="relative py-20 bg-gradient-to-b from-slate-900/60 via-blue-900/20 to-slate-900/60"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Showmick
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm Showmick, a passionate developer who believes in creating digital experiences that don't just
                    function—they inspire. With a focus on cutting-edge technologies and futuristic design, I bring
                    ideas to life through code.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My journey in tech is driven by curiosity and a relentless pursuit of innovation. I specialize in
                    creating immersive web experiences that push the boundaries of what's possible.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-6">
                    {[
                      { label: "Projects", value: "50+" },
                      { label: "Experience", value: "5+ Years" },
                      { label: "Technologies", value: "20+" },
                      { label: "Coffee Cups", value: "∞" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 border border-cyan-400/20 rounded-lg bg-gradient-to-br from-cyan-900/10 to-purple-900/10 backdrop-blur-sm"
                      >
                        <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full animate-spin will-change-transform"
                      style={{ animationDuration: "10s" }}
                    />
                    <div
                      className="absolute inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-spin will-change-transform"
                      style={{ animationDuration: "15s", animationDirection: "reverse" }}
                    />
                    <div className="absolute inset-8 bg-slate-900 rounded-full flex items-center justify-center">
                      <Code className="w-24 h-24 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies & Skills Section - Distinct Purple Tint */}
          <section className="relative py-20 bg-gradient-to-b from-slate-900/60 via-purple-900/20 to-slate-900/60">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Technologies & Skills
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  My technical arsenal spans across languages, frameworks, and cutting-edge developer tools.
                </p>
              </div>

              <div className="max-w-6xl mx-auto space-y-16">
                {/* Languages */}
                <div>
                  <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Programming Languages</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust", "PHP"].map((skill, index) => (
                      <Badge
                        key={index}
                        className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-400 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 transform hover:scale-110 will-change-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      "React",
                      "Next.js",
                      "Vue.js",
                      "Angular",
                      "Node.js",
                      "Express",
                      "Django",
                      "FastAPI",
                      "Three.js",
                      "GSAP",
                    ].map((skill, index) => (
                      <Badge
                        key={index}
                        className="px-6 py-3 text-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-110 will-change-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Developer Tools */}
                <div>
                  <h3 className="text-3xl font-bold text-center mb-8 text-green-400">Developer Tools</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      "Git",
                      "Docker",
                      "Kubernetes",
                      "AWS",
                      "Vercel",
                      "MongoDB",
                      "PostgreSQL",
                      "Redis",
                      "GraphQL",
                      "Webpack",
                      "Vite",
                      "Figma",
                    ].map((skill, index) => (
                      <Badge
                        key={index}
                        className="px-6 py-3 text-lg bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 text-green-400 hover:from-green-500/30 hover:to-teal-500/30 transition-all duration-300 transform hover:scale-110 will-change-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GitHub Stats Section - Distinct Teal Tint */}
          <section className="relative py-20 bg-gradient-to-b from-slate-900/60 via-teal-900/20 to-slate-900/60">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  GitHub Analytics
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  My coding journey visualized through commits, contributions, and open source activity.
                </p>
              </div>

              <div className="max-w-6xl mx-auto space-y-8">
                {/* GitHub Overview Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {[
                    { label: "Total Commits", value: "2,847", icon: "📝", gradient: "from-green-500 to-emerald-500" },
                    { label: "Pull Requests", value: "342", icon: "🔄", gradient: "from-blue-500 to-cyan-500" },
                    { label: "Issues Closed", value: "156", icon: "✅", gradient: "from-purple-500 to-pink-500" },
                    { label: "Repositories", value: "89", icon: "📁", gradient: "from-orange-500 to-red-500" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 border border-cyan-400/20 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 will-change-transform"
                    >
                      <div className="text-3xl mb-3">{stat.icon}</div>
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Commits Chart */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-slate-800/40 border border-cyan-400/20 backdrop-blur-sm p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6">Commit Activity</h3>
                    <div className="space-y-4">
                      {[
                        { month: "Jan 2024", commits: 89, color: "bg-green-500" },
                        { month: "Feb 2024", commits: 124, color: "bg-green-400" },
                        { month: "Mar 2024", commits: 156, color: "bg-green-300" },
                        { month: "Apr 2024", commits: 98, color: "bg-green-500" },
                        { month: "May 2024", commits: 187, color: "bg-green-200" },
                        { month: "Jun 2024", commits: 143, color: "bg-green-400" },
                      ].map((data, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-gray-400">{data.month}</div>
                          <div className="flex-1 bg-slate-700 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full ${data.color} transition-all duration-1000 ease-out will-change-width`}
                              style={{
                                width: `${(data.commits / 200) * 100}%`,
                                animationDelay: `${index * 0.2}s`,
                              }}
                            />
                          </div>
                          <div className="w-12 text-sm text-cyan-400 font-semibold">{data.commits}</div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="bg-slate-800/40 border border-cyan-400/20 backdrop-blur-sm p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6">Language Distribution</h3>
                    <div className="space-y-4">
                      {[
                        { language: "TypeScript", percentage: 35, color: "bg-blue-500" },
                        { language: "JavaScript", percentage: 28, color: "bg-yellow-500" },
                        { language: "Python", percentage: 18, color: "bg-green-500" },
                        { language: "React/JSX", percentage: 12, color: "bg-cyan-500" },
                        { language: "CSS/SCSS", percentage: 7, color: "bg-purple-500" },
                      ].map((lang, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">{lang.language}</span>
                            <span className="text-cyan-400 font-semibold">{lang.percentage}%</span>
                          </div>
                          <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full ${lang.color} transition-all duration-1000 ease-out will-change-width`}
                              style={{
                                width: `${lang.percentage}%`,
                                animationDelay: `${index * 0.3}s`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* GitHub Contribution Graph */}
                <Card className="bg-slate-800/40 border border-cyan-400/20 backdrop-blur-sm p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contribution Graph</h3>
                  <div className="overflow-x-auto">
                    <div
                      className="grid grid-rows-7 grid-flow-col gap-1 mb-4 min-w-[800px]"
                      style={{ gridTemplateColumns: "repeat(53, minmax(0, 1fr))" }}
                    >
                      {Array.from({ length: 371 }).map((_, i) => {
                        const intensity = Math.floor(Math.random() * 5)
                        const colors = [
                          "bg-slate-700/50",
                          "bg-green-900/70",
                          "bg-green-700/80",
                          "bg-green-500/90",
                          "bg-green-300",
                        ]
                        return (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-sm ${colors[intensity]} hover:ring-1 hover:ring-cyan-400/50 transition-all duration-200`}
                            title={`${intensity} contributions`}
                          />
                        )
                      })}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Less</span>
                      <div className="flex space-x-1">
                        {[
                          "bg-slate-700/50",
                          "bg-green-900/70",
                          "bg-green-700/80",
                          "bg-green-500/90",
                          "bg-green-300",
                        ].map((color, i) => (
                          <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
                        ))}
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-slate-800/40 border border-cyan-400/20 backdrop-blur-sm p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: "Pushed to", repo: "futuristic-portfolio", time: "2 hours ago", type: "commit" },
                      { action: "Opened PR in", repo: "open-source-project", time: "1 day ago", type: "pr" },
                      { action: "Closed issue in", repo: "react-components", time: "2 days ago", type: "issue" },
                      { action: "Created", repo: "ai-chat-interface", time: "3 days ago", type: "repo" },
                      { action: "Merged PR in", repo: "blockchain-explorer", time: "5 days ago", type: "merge" },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-slate-700/20 to-slate-600/10 hover:from-slate-700/30 hover:to-slate-600/20 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                          {activity.type === "commit" && "📝"}
                          {activity.type === "pr" && "🔄"}
                          {activity.type === "issue" && "❌"}
                          {activity.type === "repo" && "📁"}
                          {activity.type === "merge" && "✅"}
                        </div>
                        <div className="flex-1">
                          <div className="text-white">
                            {activity.action} <span className="text-cyan-400 font-semibold">{activity.repo}</span>
                          </div>
                          <div className="text-gray-400 text-sm">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Experience Section - Distinct Orange Tint */}
          <section
            ref={experienceRef}
            className="relative py-20 bg-gradient-to-b from-slate-900/60 via-orange-900/20 to-slate-900/60"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Work Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  My journey through the digital frontier, crafting tomorrow's technology today.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {/* Timeline - Single Side Layout */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"></div>

                  {/* Experience Items */}
                  {[
                    {
                      period: "January 2025 - Present",
                      company: "TechNova Industries",
                      position: "Senior Full-Stack Developer",
                      description: [
                        "Leading development of next-generation web applications using cutting-edge technologies",
                        "Architected scalable microservices handling 1M+ daily users",
                        "Mentoring junior developers and establishing best practices",
                      ],
                      tech: ["React", "Node.js", "AWS", "Docker", "GraphQL"],
                      gradient: "from-cyan-500 to-blue-500",
                    },
                    {
                      period: "March 2023 - December 2024",
                      company: "Digital Dynamics",
                      position: "Frontend Architect",
                      description: [
                        "Spearheaded the development of immersive user interfaces and interactive experiences",
                        "Reduced load times by 60% through advanced optimization techniques",
                        "Led cross-functional teams in delivering high-impact projects",
                      ],
                      tech: ["Vue.js", "Three.js", "WebGL", "GSAP", "TypeScript"],
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      period: "June 2021 - February 2023",
                      company: "StartupX",
                      position: "Full-Stack Developer",
                      description: [
                        "Built the entire tech stack from ground up for a fintech startup",
                        "Implemented real-time trading algorithms and secure payment processing",
                        "Collaborated with product team to define technical requirements",
                      ],
                      tech: ["Python", "Django", "React", "PostgreSQL", "Redis"],
                      gradient: "from-green-500 to-teal-500",
                    },
                    {
                      period: "January 2020 - May 2021",
                      company: "CodeCraft Solutions",
                      position: "Junior Developer",
                      description: [
                        "Developed responsive web applications and mobile-first designs",
                        "Collaborated with cross-functional teams to deliver high-quality software solutions",
                        "Gained expertise in modern web development frameworks and tools",
                      ],
                      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
                      gradient: "from-orange-500 to-red-500",
                    },
                  ].map((exp, index) => (
                    <div key={index} className="relative flex items-start mb-12">
                      {/* Timeline Node */}
                      <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full z-10 animate-pulse transform -translate-x-1/2">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-75" />
                      </div>

                      {/* Content */}
                      <div className="ml-16 w-full">
                        <Card className="group relative overflow-hidden bg-slate-800/40 border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-[1.02] will-change-transform">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                          />

                          <div className="relative p-6 space-y-4">
                            {/* Period Badge */}
                            <div className="inline-block">
                              <Badge
                                className={`bg-gradient-to-r ${exp.gradient} text-white border-0 px-3 py-1 text-sm font-semibold`}
                              >
                                {exp.period}
                              </Badge>
                            </div>

                            {/* Company & Position */}
                            <div className="space-y-2">
                              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {exp.position}
                              </h3>
                              <h4 className="text-lg font-semibold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                                {exp.company}
                              </h4>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                              {exp.description.map((desc, descIndex) => (
                                <div key={descIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                    {desc}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {exp.tech.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  className="text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievement Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Years Experience", value: "5+", icon: "🚀" },
                    { label: "Projects Delivered", value: "50+", icon: "💻" },
                    { label: "Happy Clients", value: "25+", icon: "😊" },
                    { label: "Code Commits", value: "10K+", icon: "⚡" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 border border-cyan-400/20 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 will-change-transform"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section - Distinct Green Tint */}
          <section
            ref={projectsRef}
            className="relative py-20 bg-gradient-to-b from-slate-900/60 via-green-900/20 to-slate-900/60"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Neural Network Visualizer",
                    description: "Interactive 3D visualization of neural networks with real-time training data",
                    tech: ["Three.js", "WebGL", "Python"],
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    title: "Quantum Dashboard",
                    description: "Futuristic admin dashboard with quantum-inspired animations and data visualization",
                    tech: ["React", "D3.js", "Framer Motion"],
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "AI Chat Interface",
                    description: "Next-generation chat interface with holographic elements and voice recognition",
                    tech: ["Next.js", "WebRTC", "TensorFlow.js"],
                    gradient: "from-green-500 to-teal-500",
                  },
                  {
                    title: "Blockchain Explorer",
                    description: "Immersive blockchain data explorer with 3D transaction visualization",
                    tech: ["Vue.js", "Web3.js", "GSAP"],
                    gradient: "from-orange-500 to-red-500",
                  },
                  {
                    title: "VR Portfolio",
                    description: "Virtual reality portfolio experience built for the metaverse",
                    tech: ["A-Frame", "WebXR", "Blender"],
                    gradient: "from-indigo-500 to-purple-500",
                  },
                  {
                    title: "Crypto Trading Bot",
                    description: "AI-powered trading bot with predictive analytics and real-time market data",
                    tech: ["Python", "TensorFlow", "FastAPI"],
                    gradient: "from-yellow-500 to-orange-500",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden bg-slate-800/40 border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 will-change-transform"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>

                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300">
                        View Project
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section - Distinct Pink Tint */}
          <section
            ref={contactRef}
            className="relative py-20 bg-gradient-to-b from-slate-900/60 via-pink-900/20 to-slate-900/60"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready to build something extraordinary together? Let's turn your vision into reality.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "showmick@futuristicdev.com", color: "text-red-400" },
                    { icon: Github, label: "GitHub", value: "@showmick", color: "text-gray-400" },
                    { icon: Linkedin, label: "LinkedIn", value: "/in/showmick", color: "text-blue-400" },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-6 border border-cyan-400/20 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 will-change-transform"
                    >
                      <contact.icon className={`w-8 h-8 ${contact.color}`} />
                      <div>
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <div className="text-xl text-white font-semibold">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer - Distinct Dark Tint */}
          <footer className="relative py-12 border-t border-cyan-400/20 bg-gradient-to-b from-slate-900/80 to-black">
            <div className="container mx-auto px-6">
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {"<SHOWMICK/>"}
                </div>
                <p className="text-gray-400">© 2024 Showmick. Crafted with ❤️ and lots of ☕</p>
                <div className="flex justify-center space-x-6">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-125 will-change-transform"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
