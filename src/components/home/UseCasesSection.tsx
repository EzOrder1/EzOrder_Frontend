import { motion } from "framer-motion";
import { CheckCircle2, QrCode, Truck } from "lucide-react";
import useCaseCafe from "@/assets/ai/usecase-cafe.svg";
import useCaseCloudKitchen from "@/assets/ai/usecase-cloud-kitchen.svg";
import useCaseChains from "@/assets/ai/usecase-chains.svg";

const useCases = [
  {
    title: "Fast casual & cafés",
    image: useCaseCafe,
    accent: "from-primary/10 via-background to-secondary/10",
    description: "Turn table scans into confirmed orders in one WhatsApp chat.",
    points: ["QR ordering at tables", "Kitchen + pickup updates"],
  },
  {
    title: "Cloud kitchens and home chefs",
    image: useCaseCloudKitchen,
    accent: "from-secondary/10 via-background to-primary/10",
    description: "Collect delivery details automatically and dispatch with confidence.",
    points: ["Auto-capture address & notes", "Schedule delivery windows"],
  },
  {
    title: "Chains and multi-branch teams",
    image: useCaseChains,
    accent: "from-primary/10 via-background to-accent/10",
    description: "Route to the right branch and keep teams aligned.",
    points: ["Auto-route by location", "Role-based dashboards"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Where it fits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Purpose-built for the way you serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From single outlets to fast-growing chains, EZORDER flexes to your workflow without forcing a new app on customers.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated focus-visible:-translate-y-1 focus-visible:border-primary/30 focus-visible:shadow-elevated focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.accent}`} aria-hidden />

              <div className="relative z-10 overflow-hidden rounded-xl border border-border/60 bg-background shadow-sm">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={useCase.image}
                  alt={`${useCase.title} illustration`}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <h3 className="relative z-10 mt-5 font-heading text-xl font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                {useCase.description}
              </p>
              <ul className="relative z-10 mt-4 space-y-2 text-sm text-muted-foreground">
                {useCase.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-auto pt-6">
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary transition-colors hover:bg-primary/15">
                    <QrCode className="h-4 w-4" />
                    QR to chat
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-secondary transition-colors hover:bg-secondary/15">
                    <Truck className="h-4 w-4" />
                    Delivery ready
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
