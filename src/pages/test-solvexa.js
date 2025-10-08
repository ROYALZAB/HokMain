// File: pages/test-solvexa.js
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-jakarta',
})

export default function TestSolvexa() {
  return (
    <>
      <Head>
        <title>SolvexaAI Real Estate Automation</title>
        <meta name="description" content="Access the full power of AI Real Estate Automation. Experience the pinnacle of efficiency in real estate lead processing with AI."/>
      </Head>

      <main className={`${plusJakarta.className} bg-slate-50 text-slate-800`}>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-100 to-slate-50 min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-12">
          <motion.h1 initial={{ opacity: 0, y:-20 }} animate={{ opacity:1, y:0 }} className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Access the full power of <span className="text-indigo-600">AI Real Estate Automation</span>
          </motion.h1>
          <p className="text-sm md:text-lg text-slate-700 max-w-2xl mx-auto mb-8">
            Experience the pinnacle of efficiency in real estate lead processing with AI. Our ground-breaking technology opens unlimited potential for real estate businesses across all markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
              Book Real Estate Demo
            </button>
            <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full text-sm font-semibold transition">
              Watch Demo
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-900">
            {[
              { label: "300% Higher Conversion", value: "" },
              { label: "5min Setup Time", value: "" },
              { label: "24/7 AI Available", value: "" }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.1*i }} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Features Section */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Real Estate AI Features</h2>
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            Everything you need to automate real estate lead management and sales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Instant Lead Response",
                desc: "AI calls new real estate leads within 5 minutes, boosting conversion rates.",
              },
              {
                title: "Natural Conversations",
                desc: "Human-like conversations about properties, prices, and buying options.",
              },
              {
                title: "Automated Scheduling",
                desc: "Books property viewings directly into your calendar handling objections naturally.",
              },
              {
                title: "CRM Integration",
                desc: "Syncs with your CRM system updating lead status and call outcomes in real-time.",
              },
              {
                title: "24/7 Availability",
                desc: "AI agent is always available, even outside business hours.",
              },
              {
                title: "Lead Qualification",
                desc: "Assesses client needs, budget, and preferences to prioritize sales team's efforts.",
              },
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1*i }} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition">
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-700 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Performance / Impact Section */}
        <section className="bg-indigo-50 px-6 py-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">See the Impact on Your Real Estate Sales Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-slate-900">
            {[
              { stat: "87%", label: "Call Answer Rate" },
              { stat: "65%", label: "Consultation Booking Success" },
              { stat: "2.8min", label: "Avg Call Time" },
              { stat: "94%", label: "Client Satisfaction" },
            ].map((item,i)=>(
              <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1*i}} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-xl">{item.stat}</h3>
                <p className="text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Customer Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "Our bookings increased dramatically. AI handles objections better than most junior sales staff.", name:"Sarah Mitchell", title:"Sales Director • Elite Realty" },
              { quote: "We went from missing 60% of leads to responding to 100% within minutes. ROI is incredible.", name:"Mike Rodriguez", title:"General Manager • City Estates" },
              { quote: "CRM integration is seamless. Sales team now focuses on warm leads.", name:"Jennifer Chen", title:"Marketing Manager • Prime Properties" },
              { quote: "Best investment in years. AI works weekends and holidays, tripling conversions.", name:"David Thompson", title:"Owner • Thompson Realty" },
            ].map((testimonial,i)=>(
              <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1*i}} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                <p className="text-slate-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 text-white py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Real Estate Sales?</h2>
          <p className="mb-6 text-slate-100 text-sm md:text-base">
            Schedule a personalized demo to see how AI voice agents can increase your conversions by 60% or more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition">
              Schedule Your Free Demo
            </button>
            <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-8 py-3 rounded-full font-semibold transition">
              Start Free Trial
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 py-6 text-center text-slate-700 text-sm mt-12">
          © {new Date().getFullYear()} SolvexaAI Real Estate. All rights reserved. <br/>
          Privacy Policy • Terms of Service • Cookies Policy
        </footer>

      </main>
    </>
  )
}
