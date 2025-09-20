// File: pages/index.js
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { PiCheckLight } from 'react-icons/pi'
import { useEffect } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-jakarta',
})

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <>
      <NextSeo
        title="HouseOfKhaja – AI Automation Solutions"
        description="HouseOfKhaja provides AI-powered solutions for customer interactions, appointment scheduling, and automation."
      />
      <Head>
        <title>HouseOfKhaja – AI Automation</title>
      </Head>
      <main className={`${plusJakarta.className} bg-slate-50 text-slate-800`}>

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-indigo-100 to-slate-50 min-h-[100svh] px-6 pt-12 pb-6 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4"
          >
            Your <span className="text-indigo-600">24/7 AI Receptionist</span>
          </motion.h1>
          <p className="text-sm md:text-lg text-slate-700 max-w-lg md:max-w-2xl mx-auto mb-8">
            Automate customer interactions, schedule appointments, and streamline operations, even while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/blockmangoacc2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
            >
              Book Free Consultation
            </a>
            <a
              href="#demo"
              className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full text-sm font-semibold transition"
            >
              Try AI Demo
            </a>
          </div>
        </div>

        {/* Services Section */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-6">
            AI Solutions Designed to Save You Time & Money
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "AI Chatbot Solutions",
                desc: "Revolutionize customer service with our intelligent chatbots.",
                bullets: ["24/7 Availability", "Instant Responses", "Cost-effective"],
              },
              {
                title: "AI Automation",
                desc: "Effortlessly automate repetitive tasks and processes.",
                bullets: ["Time Savings", "Increased Productivity", "Error Reduction"],
              },
              {
                title: "AI Strategy Consulting",
                desc: "Identify and implement AI opportunities for your business.",
                bullets: ["Customized Solutions", "Expert Guidance", "Maximized ROI"],
              }
            ].map((feature, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i*150} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 mb-4
