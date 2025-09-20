// File: pages/index.js
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { PiCheckLight, PiUserCircleLight, PiRocketLight, PiPhoneLight, PiChartLineLight } from 'react-icons/pi'
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
            Automate customer interactions, schedule appointments, and streamline operations — even while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
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
  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-6">AI Solutions Designed to Save You Time & Money</h2>
  <div className="grid md:grid-cols-3 gap-6 mt-8">
    {[
      {
        title: "AI Chatbot Solutions",
        desc: "Revolutionize customer service with our intelligent chatbots.",
        bullets: ["24/7 Availability", "Instant Responses", "Cost-effective"],
        icon: <PiCheckLight className="text-indigo-500 w-6 h-6" />
      },
      {
        title: "AI Automation",
        desc: "Effortlessly automate repetitive tasks and processes.",
        bullets: ["Time Savings", "Increased Productivity", "Error Reduction"],
        icon: <PiCheckLight className="text-indigo-500 w-6 h-6" />
      },
      {
        title: "AI Strategy Consulting",
        desc: "Identify and implement AI opportunities for your business.",
        bullets: ["Customized Solutions", "Expert Guidance", "Maximized ROI"],
        icon: <PiCheckLight className="text-indigo-500 w-6 h-6" />
      }
    ].map((feature, i) => (
      <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-3">
          {feature.icon}
          <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
        </div>
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
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose HouseOfKhaja</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              "Always Available — AI receptionist works 24/7",
              "Smarter Customer Engagement — handle queries instantly",
              "Scale Your Business — automate processes without extra staff",
              "Cost-Effective Solutions — save money and time",
              "Data-Driven Decisions — actionable analytics for growth"
            ].map((point, i) => (
              <div key={i} data-aos="fade-right" data-aos-delay={i*100} className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200">
                <p className="text-slate-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-12 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          {[
            { name: "Sarah Johnson", company: "TechStart Ltd", text: "The AI receptionist saved us countless hours and improved our bookings dramatically." },
            { name: "Michael Chen", company: "DataFlow Solutions", text: "HouseOfKhaja’s automation system transformed how we manage clients." },
            { name: "Emma Williams", company: "GrowthCorp", text: "Seamless, professional, and highly effective — the AI tools just work." }
          ].map((t, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i*100} className="bg-white p-6 rounded-2xl border border-slate-200 mb-6">
              <p className="text-slate-600 italic mb-2">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-slate-500">{t.company}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-indigo-600 text-white py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Automating Your Business Today</h2>
          <p className="mb-6 text-slate-100 text-sm md:text-base">Book a free consultation and see how AI can handle your customer interactions, appointments, and repetitive tasks.</p>
          <a href="#contact-form" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition">Book Free Consultation</a>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 py-6 text-center text-slate-700 text-sm">
          &copy; {new Date().getFullYear()} HouseOfKhaja. AI solutions to automate, scale, and grow your business efficiently. <br />
          Contact: hello@houseofkhaja.com
        </footer>

      </main>
    </>
  )
               }
