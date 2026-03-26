import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: EASE },
  }),
};

function ResumeMockup() {
  return (
    <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/10 rounded-2xl blur-3xl -z-10 scale-110" />

      {/* Main card */}
      <motion.div
        className="floating-animation pulse-glow relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/80"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top bar */}
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12H15M9 8H15M9 16H13M5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3Z"/></svg>
            </div>
            <span className="text-white text-xs font-semibold">ResumeFlow AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">ATS Score</span>
            <span className="text-[10px] bg-emerald-400 text-white px-2 py-0.5 rounded-full font-bold">94%</span>
          </div>
        </div>

        <div className="p-5">
          {/* Profile */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">JD</div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Jane Doe</div>
              <div className="text-xs text-gray-500">Senior Product Manager</div>
              <div className="flex items-center gap-1 mt-0.5">
                <svg width="10" height="10" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                <span className="text-[10px] text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Section */}
          <div className="mb-3">
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1.5">Experience</div>
            <div className="space-y-2">
              {[
                { title: "Product Manager", company: "Stripe", years: "2021–Present" },
                { title: "Associate PM", company: "Notion", years: "2019–2021" },
              ].map((exp) => (
                <div key={exp.company} className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-gray-800">{exp.title}</div>
                    <div className="text-[10px] text-gray-500">{exp.company}</div>
                  </div>
                  <span className="text-[9px] text-gray-400 mt-0.5">{exp.years}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-3">
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1.5">Skills</div>
            <div className="flex flex-wrap gap-1">
              {["Product Strategy", "Data Analysis", "Agile", "SQL", "Figma"].map((skill) => (
                <span key={skill} className="text-[9px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI enhance button */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full" />
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg px-3 py-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span className="text-[9px] font-semibold text-indigo-700">AI Enhanced</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge: ATS */}
      <motion.div
        className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <div className="text-[10px] text-gray-500 font-medium">ATS Optimized</div>
        <div className="text-lg font-black gradient-text leading-none">94%</div>
      </motion.div>

      {/* Floating badge: Jobs matched */}
      <motion.div
        className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
      >
        <div className="text-[10px] text-gray-500 font-medium">Jobs Matched</div>
        <div className="text-lg font-black gradient-text-blue leading-none">2.4k+</div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient grid-pattern" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 mb-6"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#starGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs><linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span className="text-xs font-semibold gradient-text">AI-Powered Resume Builder</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground mb-6"
            >
              Create{" "}
              <span className="gradient-text">ATS-Optimized</span>
              <br />
              Resumes with AI
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Build professional resumes in minutes and land more interviews. Our AI analyzes job descriptions and crafts the perfect resume that passes ATS filters every time.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#pricing"
                className="btn-primary-gradient text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 text-sm"
              >
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="#preview"
                className="glass border border-border/80 text-foreground font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm hover:shadow-md transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                View Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["from-indigo-400 to-blue-500", "from-purple-400 to-pink-500", "from-emerald-400 to-teal-500", "from-amber-400 to-orange-500"].map((g, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-background flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {["JD", "KL", "AM", "SR"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">50,000+</span> resumes created</p>
              </div>
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center lg:justify-end pr-4 lg:pr-8"
          >
            <ResumeMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
