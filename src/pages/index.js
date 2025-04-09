// File: pages/index.js
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { PiCodeBlockLight, PiWrenchLight, PiRocketLight, PiCodesandboxLogoLight, PiGithubLogo } from 'react-icons/pi'
import { useEffect, useState } from 'react'
// Tambahkan di paling atas file `pages/index.js`
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export default function Home() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <>
      <NextSeo
        title="Next.js Pages Router Starter"
        description="A modern starter template using Next.js Pages Router — perfect for developer-focused landing pages with Tailwind, Framer Motion, AOS, and more."
      />
      <Head>
        <title>Next.js Starter Landing</title>
      </Head>
      <main className={`${plusJakarta.className} min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 py-12 text-slate-800`}>

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full font-medium mb-4 animate-pulse">
            🚀 Developer Starter Template
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900"
          >
            Build Fast with <span className="text-indigo-600">Landing Page Starter</span> for Developers
          </motion.h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Developer-focused starter using <strong>Next.js Pages Router</strong>, Tailwind CSS, Framer Motion, AOS, and SEO — all in one powerful template.
          </p>
          <a
            href="https://github.com/dwiwijaya/nextjs-landing-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex gap-1 items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm transition"
          >
            <PiGithubLogo size={18} />
            View on GitHub
          </a>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
          <div data-aos="fade-up" className="bg-white p-4  sm:p-6 rounded-2xl border border-slate-200 transition">
            <PiCodeBlockLight className="text-3xl text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
            <p className="text-slate-600 text-sm">Includes Tailwind, Framer Motion, SEO, AOS, and more — ready to go.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-4  sm:p-6 rounded-2xl border border-slate-200 transition">
            <PiWrenchLight className="text-3xl text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Built for Devs</h3>
            <p className="text-slate-600 text-sm">Clean folder structure, customizable components, and clear comments.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-4  sm:p-6 rounded-2xl border border-slate-200 transition">
            <PiRocketLight className="text-3xl text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Deploy in Seconds</h3>
            <p className="text-slate-600 text-sm">Optimized for Vercel with minimal setup and blazing-fast performance.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-4  sm:p-6 rounded-2xl border border-slate-200 transition">
            <PiCodesandboxLogoLight className="text-3xl text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Open Source</h3>
            <p className="text-slate-600 text-sm">Free to use and fully open-source. Clone it, fork it, make it your own!</p>
          </div>
        </div>

        {/* Terminal / Command Preview */}
        <div className="mt-12 max-w-[606px] mx-auto" data-aos="fade-up">
          <div className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('npx create-next-app -e https://github.com/dwiwijaya/nextjs-landing-starter')
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
                className="text-xs text-white/80 hover:text-white transition"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="px-4 py-4 text-green-400 font-mono text-sm">
              <p className="text-slate-400 mb-1">// Quick Start (Pages Router)</p>
              <code>npx create-next-app -e https://github.com/dwiwijaya/nextjs-landing-starter</code>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
