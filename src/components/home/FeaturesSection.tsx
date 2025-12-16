import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mic, FileText, LayoutDashboard, Timer } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Ordering",
    description: "Order directly from your favorite chat app. No downloads, just delicious food.",
    color: "text-primary", // Green
    bgColor: "bg-primary/10",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Follow your meal's journey from kitchen to doorstep with live updates.",
    color: "text-secondary", // Blue
    bgColor: "bg-secondary/10",
  },
  {
    icon: Mic,
    title: "Smart Voice-to-Text",
    description: "Speak your order, and our AI-powered bot will understand and confirm it instantly.",
    color: "text-accent", // Orange
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Digital PDF Receipts",
    description: "Get a professional, shareable receipt delivered straight to your WhatsApp.",
    color: "text-secondary", // Blue
    bgColor: "bg-secondary/10",
  },
  {
    icon: LayoutDashboard,
    title: "Powerful Admin Dashboard",
    description: "Manage orders, menus, riders, and analytics from one intuitive web portal.",
    color: "text-primary", // Green
    bgColor: "bg-primary/10",
  },
  {
    icon: Timer,
    title: "Fast & Reliable Delivery",
    description: "Optimized rider assignment ensures your food arrives hot and on time.",
    color: "text-accent", // Orange
    bgColor: "bg-accent/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration to match the swirl lines if possible, using simple SVGs or CSS */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <path d="M0 0 Q 50 50 100 0 T 200 0" stroke="currentColor" fill="none" />
          {/* Just a placeholder for the swirl effect, actual assets would be better */}
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Why Choose ezOrder?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Experience the simplest, most connected food ordering system.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative flex flex-col items-center p-8 bg-card rounded-2xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 text-center overflow-hidden"
            >
              {/* Relevant Background Image (Watermark Icon) */}
              <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <feature.icon className={`h-40 w-40 ${feature.color}`} strokeWidth={1} />
              </div>

              <div
                className={`flex h-20 w-20 items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.color} relative z-10`}
              >
                <feature.icon className="h-16 w-16" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
