import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for getting started with your job search",
    cta: "Get Started Free",
    ctaVariant: "outline",
    features: [
      "1 Resume",
      "3 AI enhancements / month",
      "Basic templates (3)",
      "ATS Score check",
      "PDF export",
      "Email support",
    ],
    disabled: ["Job description matching", "Unlimited AI enhancements", "Priority support", "LinkedIn import"],
  },
  {
    name: "Pro",
    price: { monthly: 19, yearly: 12 },
    description: "For serious job seekers who want every advantage",
    cta: "Start Pro — 7 Days Free",
    ctaVariant: "primary",
    popular: true,
    features: [
      "Unlimited resumes",
      "Unlimited AI enhancements",
      "20+ premium templates",
      "Job description matching",
      "Advanced ATS optimization",
      "PDF + Word export",
      "Cover letter generator",
      "Priority support",
      "LinkedIn import",
    ],
    disabled: [],
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold gradient-text">Simple Pricing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight"
          >
            Start free,{" "}
            <span className="gradient-text">upgrade when ready</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-8"
          >
            No hidden fees. Cancel anytime. Start building your perfect resume today.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-card border border-card-border rounded-xl p-1"
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${!yearly ? 'btn-primary-gradient text-white shadow-sm' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? 'btn-primary-gradient text-white shadow-sm' : 'text-muted-foreground'}`}
            >
              Yearly
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold">-37%</span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-7 ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-600 via-violet-600 to-purple-700 text-white shadow-2xl shadow-indigo-500/30 scale-105"
                  : "bg-card border border-card-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-foreground'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-indigo-200' : 'text-muted-foreground'}`}>{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    ${yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className={`text-sm pb-2 ${plan.popular ? 'text-indigo-200' : 'text-muted-foreground'}`}>
                    {plan.price.monthly === 0 ? 'forever' : '/ month'}
                  </span>
                </div>
                {yearly && plan.price.monthly > 0 && (
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-indigo-200' : 'text-muted-foreground'}`}>
                    Billed ${plan.price.yearly * 12}/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all mb-6 ${
                  plan.popular
                    ? "bg-white text-indigo-700 hover:bg-indigo-50 shadow-lg"
                    : "btn-primary-gradient text-white shadow-md"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? 'text-indigo-100' : 'text-muted-foreground'}`}>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-indigo-400/40' : 'bg-indigo-100'}`}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? 'white' : '#6366f1'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
                {plan.disabled.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm opacity-40 ${plan.popular ? 'text-indigo-100' : 'text-muted-foreground'}`}>
                    <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-muted-foreground"
        >
          {[
            { icon: "🔒", text: "SSL Encrypted" },
            { icon: "🔄", text: "Cancel Anytime" },
            { icon: "💳", text: "No Hidden Fees" },
            { icon: "🤝", text: "7-Day Free Trial" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
