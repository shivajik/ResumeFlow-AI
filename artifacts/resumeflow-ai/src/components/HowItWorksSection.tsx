import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    gradient: "from-indigo-500 to-violet-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Enter Your Details",
    description: "Fill in your work history, education, skills, and achievements through our guided, intuitive multi-step form. Takes just 5 minutes.",
    details: ["Personal information", "Work experience", "Education & certifications", "Skills & tools"],
  },
  {
    number: "02",
    gradient: "from-violet-500 to-purple-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "AI Generates Content",
    description: "Our advanced AI analyzes your input and the target job description to generate powerful, ATS-optimized bullet points and summaries.",
    details: ["Smart bullet points", "Keyword optimization", "ATS compatibility check", "Industry-specific language"],
  },
  {
    number: "03",
    gradient: "from-purple-500 to-pink-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: "Download & Apply",
    description: "Choose your preferred template, review your polished resume, then export as PDF and start applying to jobs with confidence.",
    details: ["20+ professional templates", "PDF / Word export", "ATS-friendly format", "Instant download"],
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold gradient-text">Simple Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight"
          >
            From blank page to{" "}
            <span className="gradient-text">dream job</span>
            <br />
            in 3 steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            No more staring at a blank page. Our streamlined process gets you a job-winning resume in under 10 minutes.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 opacity-20" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="bg-card border border-card-border rounded-2xl p-7 h-full group hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 card-hover">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <span className={`text-4xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>

                  {/* Detail list */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow between steps (desktop) */}
                {i < 2 && (
                  <div className="hidden lg:flex absolute top-14 -right-4 z-10 items-center justify-center w-8 h-8">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#arrowGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <defs><linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#pricing" className="btn-primary-gradient text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 text-sm">
            Start Building Now — It's Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
