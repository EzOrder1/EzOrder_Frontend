import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Headphones } from "lucide-react";

import highlightAlwaysOn from "@/assets/highlight-always-on.png";
import highlightMultilingual from "@/assets/highlight-multilingual.png";
import highlightSetup from "@/assets/highlight-setup.png";
// Using Gauge/Clock icon logic or specific images if available, otherwise falling back or mapping existing
// Based on available assets:
// 1. Instant 24/7 -> highlight-always-on.png seems best fits (clock/rocket metaphor often used)
// 2. Chef-Trusted -> No image, use CheckCircle2
// 3. Multilingual -> highlight-multilingual.png
// 4. Setup -> highlight-setup.png
// 5. Secure -> No image, use ShieldCheck
// 6. Handoff -> No image, use Headphones

const features = [
  {
    title: "Instant 24/7 Responses",
    description: "Automated replies in seconds, always on for busy times.",
    image: highlightAlwaysOn,
    isIcon: false,
    color: "bg-green-50 border-green-100",
  },
  {
    title: "Chef-Trusted Accuracy",
    description: "AI confirms quantities and spice levels precisely.",
    icon: CheckCircle2,
    isIcon: true,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    color: "bg-blue-50 border-blue-100",
  },
  {
    title: "Multilingual Support",
    description: "Ready in English, Roman Urdu, and Urdu from day one.",
    image: highlightMultilingual,
    isIcon: false,
    color: "bg-teal-50 border-teal-100",
  },
  {
    title: "Simple 10-Minute Setup",
    description: "Connect WhatsApp and start receiving orders quickly.",
    image: highlightSetup,
    isIcon: false,
    color: "bg-sky-50 border-sky-100",
  },
  {
    title: "Secure & Role-Based",
    description: "Admin access and local WhatsApp support included.",
    icon: ShieldCheck,
    isIcon: true,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Seamless Human Handoff",
    description: "Escalate to staff instantly without losing context.",
    icon: Headphones,
    isIcon: true,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
    color: "bg-cyan-50 border-cyan-100",
  },
];

export function HighlightsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 lg:py-24 overflow-hidden">
      <div className="section-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl leading-tight"
          >
            More than a chatbot.
            <br />
            <span className="text-primary">A full WhatsApp service line.</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start p-6 rounded-2xl border ${feature.color} shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex-shrink-0 mr-4">
                {feature.isIcon ? (
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${feature.iconBg}`}>
                    <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                  </div>
                ) : (
                  <div className="h-14 w-14 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
