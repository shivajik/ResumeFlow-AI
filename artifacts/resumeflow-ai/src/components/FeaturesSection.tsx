import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    gradient: "from-indigo-500 to-violet-600",
    bgGlow: "from-indigo-500/10 to-violet-600/5",
    title: "AI Resume Builder",
    description: "Generate complete, professional resumes in seconds. Our AI crafts compelling content tailored to your industry and target role.",
    highlight: "10x faster",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "from-purple-500/10 to-pink-600/5",
    title: "Bullet Point Generator",
    description: "Transform vague job duties into powerful, quantified achievements using action verbs that ATS systems and recruiters love.",
    highlight: "Impact-driven",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "from-emerald-500/10 to-teal-600/5",
    title: "Resume Score & ATS Check",
    description: "Get a real-time ATS compatibility score and actionable suggestions to ensure your resume passes automated screening systems.",
    highlight: "94% pass rate",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-600",
    bgGlow: "from-blue-500/10 to-cyan-600/5",
    title: "Job Description Matching",
    description: "Paste any job description and our AI automatically tailors your resume to match keywords and requirements for that specific role.",
    highlight: "Perfect fit",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "from-amber-500/10 to-orange-600/5",
    title: "Multiple Templates",
    description: "Choose from 20+ professionally designed templates for any industry — from tech startups to Fortune 500 companies.",
    highlight: "20+ templates",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    gradient: "from-rose-500 to-red-600",
    bgGlow: "from-rose-500/10 to-red-600/5",
    title: "One-Click Export",
    description: "Download your resume as a pixel-perfect PDF, Word document, or plain text — ready to submit to any job application portal.",
    highlight: "Instant PDF",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-card border border-card-border rounded-2xl p-6 card-hover cursor-default overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

      <div className="relative">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
          {feature.icon}
        </div>

        {/* Highlight badge */}
        <div className="inline-flex mb-3">
          <span className={`text-[10px] font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent border border-current/20 px-2 py-0.5 rounded-full`} style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
            {feature.highlight}
          </span>
        </div>

        <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold gradient-text">Powerful Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight"
          >
            Everything you need to{" "}
            <span className="gradient-text">get hired faster</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            ResumeFlow AI combines cutting-edge AI with intuitive design to help you create resumes that stand out and get results.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
