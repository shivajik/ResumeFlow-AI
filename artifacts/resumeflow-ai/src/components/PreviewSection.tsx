import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const templates = ["Classic", "Modern", "Minimal"];

const mockResume = {
  name: "Alexandra Chen",
  title: "Senior Software Engineer",
  email: "alex.chen@email.com",
  phone: "(415) 555-0192",
  location: "San Francisco, CA",
  linkedin: "linkedin.com/in/alexchen",
  summary: "Results-driven software engineer with 7+ years building scalable distributed systems and leading cross-functional teams. Delivered $2M+ in annual cost savings through infrastructure optimization at Fortune 500 companies.",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Stripe",
      period: "Mar 2021 – Present",
      bullets: [
        "Architected microservices platform handling 50M+ daily transactions, reducing latency by 40%",
        "Led team of 8 engineers to deliver real-time payment analytics dashboard, driving 25% revenue growth",
        "Implemented ML-based fraud detection system, preventing $4M+ in fraudulent transactions annually",
      ],
    },
    {
      role: "Software Engineer II",
      company: "Airbnb",
      period: "Jun 2018 – Feb 2021",
      bullets: [
        "Rebuilt search infrastructure serving 200M+ monthly users, improving performance by 60%",
        "Mentored 5 junior engineers through structured code reviews and pair programming sessions",
      ],
    },
  ],
  skills: ["TypeScript", "Go", "Python", "React", "AWS", "Kubernetes", "PostgreSQL", "gRPC"],
  education: { degree: "B.S. Computer Science", school: "UC Berkeley", year: "2018" },
};

export function PreviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTemplate, setActiveTemplate] = useState(0);

  return (
    <section id="preview" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold gradient-text">Live Preview</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight"
          >
            Beautiful resumes that{" "}
            <span className="gradient-text">get noticed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Preview your resume in real-time as you build. Switch between templates instantly.
          </motion.p>
        </div>

        {/* Template tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-2 mb-8"
        >
          {templates.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTemplate(i)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTemplate === i
                  ? "btn-primary-gradient text-white shadow-md"
                  : "bg-card border border-card-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </motion.div>

        {/* Resume preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Shadow layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl translate-y-4 scale-95" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Top bar */}
              {activeTemplate === 0 && (
                <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-6">
                  <h1 className="text-2xl font-black text-white">{mockResume.name}</h1>
                  <p className="text-indigo-200 font-medium mt-0.5">{mockResume.title}</p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    {[mockResume.email, mockResume.phone, mockResume.location].map((v) => (
                      <span key={v} className="text-xs text-indigo-200">{v}</span>
                    ))}
                  </div>
                </div>
              )}
              {activeTemplate === 1 && (
                <div className="px-8 pt-6 pb-4 border-b-4 border-violet-500 flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-gray-900">{mockResume.name}</h1>
                    <p className="text-violet-600 font-bold mt-0.5">{mockResume.title}</p>
                  </div>
                  <div className="text-right text-xs text-gray-400 space-y-0.5">
                    <div>{mockResume.email}</div>
                    <div>{mockResume.phone}</div>
                    <div>{mockResume.location}</div>
                  </div>
                </div>
              )}
              {activeTemplate === 2 && (
                <div className="px-8 pt-8 pb-4 text-center border-b border-gray-100">
                  <h1 className="text-2xl font-black text-gray-900 tracking-tight">{mockResume.name}</h1>
                  <p className="text-gray-500 font-medium mt-1">{mockResume.title}</p>
                  <div className="flex justify-center flex-wrap gap-4 mt-3">
                    {[mockResume.email, mockResume.phone, mockResume.location].map((v) => (
                      <span key={v} className="text-xs text-gray-400">{v}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="px-8 py-6 space-y-5">
                {/* Summary */}
                <div>
                  <h2 className={`text-xs font-black uppercase tracking-widest mb-2 ${activeTemplate === 0 ? 'text-indigo-600' : activeTemplate === 1 ? 'text-violet-600' : 'text-gray-400'}`}>Professional Summary</h2>
                  <p className="text-xs text-gray-600 leading-relaxed">{mockResume.summary}</p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className={`text-xs font-black uppercase tracking-widest mb-3 ${activeTemplate === 0 ? 'text-indigo-600' : activeTemplate === 1 ? 'text-violet-600' : 'text-gray-400'}`}>Experience</h2>
                  {mockResume.experience.map((exp) => (
                    <div key={exp.company} className="mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <div className="text-sm font-bold text-gray-900">{exp.role}</div>
                          <div className="text-xs text-gray-500 font-medium">{exp.company}</div>
                        </div>
                        <span className="text-[10px] text-gray-400 mt-0.5">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 pl-3">
                        {exp.bullets.map((b) => (
                          <li key={b} className="text-xs text-gray-600 leading-relaxed before:content-['•'] before:text-indigo-400 before:mr-2">{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div>
                  <h2 className={`text-xs font-black uppercase tracking-widest mb-2 ${activeTemplate === 0 ? 'text-indigo-600' : activeTemplate === 1 ? 'text-violet-600' : 'text-gray-400'}`}>Technical Skills</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {mockResume.skills.map((s) => (
                      <span key={s} className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${activeTemplate === 0 ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : activeTemplate === 1 ? 'bg-violet-50 text-violet-700' : 'bg-gray-100 text-gray-600'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ATS Score indicator */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-gray-600">ATS Compatibility Score</span>
                    <span className="text-xs font-black text-emerald-600">94 / 100</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      style={{ width: "94%" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-gray-400">Excellent — This resume will pass most ATS filters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <a href="#pricing" className="btn-primary-gradient text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Build Your Resume — Free
          </a>
          <p className="text-xs text-muted-foreground mt-3">No credit card required · PDF export included</p>
        </motion.div>
      </div>
    </section>
  );
}
