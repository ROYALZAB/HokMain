// File: pages/test-solvexa.js
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Plus_Jakarta_Sans } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-jakarta',
})

export default function SolvexaTest() {
  // Init AOS animations
  import { useEffect } from 'react'
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  return (
    <>
      <Head>
        <title>Solvexa – AI Solutions for Real Estate</title>
      </Head>

      <main className={`${plusJakarta.className} bg-slate-50 text-slate-900`}>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              AI-Powered Solutions for Real Estate
            </motion.h1>
            <p className="text-lg md:text-2xl mb-8">
              Automate lead generation, client outreach, and property management seamlessly with cutting-edge AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#demo"
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition"
              >
                Try Demo
              </a>
              <a
                href="#contact"
                className="bg-black bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full font-semibold transition"
              >
                Book Consultation
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/hero-illustration.png" alt="AI Illustration" className="w-3/4 md:w-full" />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-20 py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Everything You Need to Grow</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Automated Lead Capture",
                desc: "AI chatbots and forms capture leads 24/7, qualify them instantly, and feed directly to your CRM.",
                icon: "🤖",
              },
              {
                title: "Smart Outreach System",
                desc: "Automate personalized emails, calls, and WhatsApp messages to engage and convert clients.",
                icon: "📞",
              },
              {
                title: "AI-Powered Websites",
                desc: "Websites that chat with visitors, answer FAQs, and qualify leads automatically.",
                icon: "💻",
              },
              {
                title: "Sales Automation",
                desc: "Automated follow-ups, property recommendations, and appointment scheduling made easy.",
                icon: "📈",
              },
              {
                title: "24/7 Support",
                desc: "Instant AI-powered customer support with ticketing, escalation, and FAQs automation.",
                icon: "🛠️",
              },
              {
                title: "Analytics & Insights",
                desc: "Track lead quality, conversion rates, and outreach performance in real-time.",
                icon: "📊",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                data-aos="fade-up"
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-indigo-600 text-white py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Growing Your Real Estate Business Today</h2>
          <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Book a free consultation or try our demo to see how AI can transform your real estate operations.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#demo"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition"
            >
              Try Demo
            </a>
            <a
              href="#contact-form"
              className="bg-black bg-opacity-20 hover:bg-opacity-30 px-8 py-3 rounded-full font-semibold transition"
            >
              Book Consultation
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 py-6 text-center text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Solvexa Clone. All rights reserved.
        </footer>
      </main>
    </>
  )
}
