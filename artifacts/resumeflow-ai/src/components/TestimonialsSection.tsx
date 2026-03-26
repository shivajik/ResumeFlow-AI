import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Product Designer → Google",
    avatar: "MT",
    gradient: "from-indigo-400 to-blue-500",
    quote: "I applied to 12 companies after using ResumeFlow AI. Got 9 callbacks in the first week. The ATS optimization is absolutely real — my previous resume wasn't even making it past the filters.",
    stars: 5,
    metric: "9/12 callbacks",
    company: "Google",
  },
  {
    name: "Priya Sharma",
    role: "ML Engineer → OpenAI",
    avatar: "PS",
    gradient: "from-purple-400 to-pink-500",
    quote: "The bullet point generator is phenomenal. It took my mediocre descriptions and turned them into compelling, quantified achievements. I went from zero responses to landing my dream job at OpenAI in 3 weeks.",
    stars: 5,
    metric: "3 weeks to dream job",
    company: "OpenAI",
  },
  {
    name: "David Kim",
    role: "Finance Analyst → McKinsey",
    avatar: "DK",
    gradient: "from-emerald-400 to-teal-500",
    quote: "Switching industries is hard. ResumeFlow AI's job description matching tool helped me tailor my resume for consulting roles perfectly. The AI understood what McKinsey was looking for better than I did.",
    stars: 5,
    metric: "Career pivot success",
    company: "McKinsey",
  },
];

const stats = [
  { value: "50,000+", label: "Resumes Created" },
  { value: "94%", label: "ATS Pass Rate" },
  { value: "3x", label: "More Callbacks" },
  { value: "4.9★", label: "User Rating" },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold gradient-text">Success Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight"
          >
            Loved by job seekers{" "}
            <span className="gradient-text">worldwide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Join thousands of professionals who've landed jobs at top companies using ResumeFlow AI.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-card-border rounded-2xl p-5 text-center">
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-card-border rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              {/* Subtle top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} opacity-80`} />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
                <div className={`text-[10px] font-bold bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}>
                  {t.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
