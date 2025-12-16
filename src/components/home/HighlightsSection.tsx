import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Sparkles, Headphones, Languages, Clock } from "lucide-react";

const metrics = [
  {
    value: "Seconds",
    label: "Fast replies",
    detail: "Automated answers so customers never wait in a queue.",
    icon: Gauge,
    color: "primary",
  },
  {
    value: "3 languages",
    label: "Multilingual",
    detail: "English, Roman Urdu, and Urdu ready from day one.",
    icon: Languages,
    color: "secondary",
  },
  {
    value: "24/7",
    label: "Always on",
    detail: "Take orders after hours and during rush without extra staff.",
    icon: Sparkles,
    color: "primary",
  },
  {
    value: "<10 min",
    label: "Setup time",
    detail: "Share your menu, connect WhatsApp, and start receiving orders.",
    icon: Clock,
    color: "secondary",
  },
];

const reasons = [
  {
    title: "Never drop a message",
    description: "Queued replies, delivery details, and confirmations even when the phone is busy.",
    icon: Gauge,
  },
  {
    title: "Accuracy your chefs trust",
    description: "Bot confirms quantities, spice levels, and add-ons before creating a ticket.",
    icon: Sparkles,
  },
  {
    title: "Secure and supported",
    description: "Role-based admin access plus local WhatsApp support when you need it.",
    icon: ShieldCheck,
  },
  {
    title: "Human help on standby",
    description: "Escalate chats to staff instantly without losing conversation history.",
    icon: Headphones,
  },
];

export function HighlightsSection() {
  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Content & Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
                Built for busy restaurants
              </p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl leading-tight">
                More than a chatbot. A full WhatsApp service line.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                EZORDER pairs AI speed with hospitality-grade accuracy. Keep every order organized,
                acknowledged, and routed without forcing customers to download another app.
              </p>
            </div>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <reason.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Metrics Grid with Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {metrics.map((item, index) => (
              <div
                key={item.label}
                className={`relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md ${index % 2 === 1 ? "sm:mt-8" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    item.color === "primary"
                      ? "from-primary/5 via-transparent to-secondary/10"
                      : "from-secondary/5 via-transparent to-primary/10"
                  }`}
                />

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      item.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-foreground leading-none">
                      {item.value}
                    </p>
                    <p
                      className={`font-heading text-xs font-bold uppercase tracking-wide ${
                        item.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>

                <p className="relative z-10 mt-4 text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
