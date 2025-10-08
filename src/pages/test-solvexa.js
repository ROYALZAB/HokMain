// pages/test-solvexa.js
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { PiCheckLight } from 'react-icons/pi'
import { useEffect } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export default function TestSolvexa() {
  useEffect(() => {
    // Load Voiceflow Chatbot (HOK bot)
    const v = document.createElement('script')
    v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs'
    v.type = 'text/javascript'
    v.onload = function () {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '68e136542a1c2b99e1885e12' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: 'https://runtime-api.voiceflow.com',
          },
        })
      }
    }
    document.body.appendChild(v)
  }, [])

  const scrollToCTA = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <NextSeo
        title="HouseOfKhaja – AI Real Estate Automation"
        description="HouseOfKhaja provides AI-powered solutions for real estate businesses, handling customer interactions, lead generation, and automation."
      />
      <Head>
        <title>HouseOfKhaja – AI Real Estate Automation</title>
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
            AI-Powered <span className="text-indigo-600">Real Estate Solutions</span>
          </motion.h1>
          <p className="text-sm md:text-lg text-slate-700 max-w-lg md:max-w-2xl mx-auto mb-8">
            Automate client interactions, qualify leads, schedule appointments, and close deals seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToCTA}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
            >
              Book Free Consultation
            </button>
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
            AI Real Estate Solutions That Drive Results
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "AI Chatbots & Callers",
                desc: "Handle property inquiries, answer FAQs, book appointments, and follow up with clients 24/7.",
                bullets: ["Multilingual", "CRM Integration", "Instant Lead Qualification"],
              },
              {
                title: "AI Outreach System",
                desc: "Automatically engage and nurture prospective clients through personalized AI-driven outreach.",
                bullets: ["Automated Follow-Ups", "Lead Tracking", "Calendar Sync"],
              },
              {
                title: "AI Websites",
                desc: "Interactive real estate websites that capture leads, answer queries, and guide clients to conversions.",
                bullets: ["AI Lead Capture", "Smart FAQs", "WhatsApp & CRM Integration"],
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-700">
                      <PiCheckLight className="text-green-500 w-5 h-5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-indigo-50 px-6 py-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose HOK Real Estate AI?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "🚀",
                title: "Rapid Implementation",
                desc: "Deploy AI solutions for your real estate business in weeks, not months."
              },
              {
                icon: "👥",
                title: "Expert Team",
                desc: "Work with experienced AI specialists and real estate automation experts."
              },
              {
                icon: "🎯",
                title: "Tailored Solutions",
                desc: "Custom AI solutions designed specifically for your property business needs."
              }
            ].map((point, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">
                  {point.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-slate-700 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-indigo-600 text-white py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Automating Your Real Estate Business Today</h2>
          <p className="mb-6 text-slate-100 text-sm md:text-base">
            Book a free consultation and see how AI can handle property inquiries, appointments, and lead management.
          </p>
          <a
            href="https://calendly.com/houseofkhaja"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition"
          >
            Book Free Consultation
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 py-6 text-center text-slate-700 text-sm">
          &copy; {new Date().getFullYear()} HouseOfKhaja. AI solutions to automate, scale, and grow your real estate business efficiently. <br />
          Contact: houseofkhaja@gmail.com
        </footer>

      </main>
    </>
  )
}
