import { motion } from "framer-motion";
import { ChefHat, Store, Building2, QrCode, Truck } from "lucide-react";

const useCases = [
  {
    title: "Fast casual and cafes",
    icon: Store,
    accent: "from-primary/10 via-white to-secondary/5",
    points: [
      "QR codes on tables send guests straight to WhatsApp ordering.",
      "Instant pickup and dine-in alerts for the kitchen.",
      "Upsell add-ons and combos automatically during chat.",
    ],
  },
  {
    title: "Cloud kitchens and home chefs",
    icon: ChefHat,
    accent: "from-secondary/10 via-white to-primary/5",
    points: [
      "Capture address, drop-off notes, and delivery windows without calls.",
      "Voice ordering for loyal customers who message while driving.",
      "Smart menu highlights for bestsellers and limited runs.",
    ],
  },
  {
    title: "Chains and multi-branch teams",
    icon: Building2,
    accent: "from-primary/5 via-white to-secondary/10",
    points: [
      "Route orders to the right branch based on location.",
      "Role-based dashboard access for managers and staff.",
      "Unified reporting across dine-in, delivery, and pickup.",
    ],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="flex flex-col gap-3 text-center">
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
            className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
          >
            Purpose-built for the way you serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From single outlets to fast-growing chains, EZORDER flexes to your workflow without forcing a new app on customers.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.accent}`} />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <useCase.icon className="h-6 w-6" />
              </div>
              <h3 className="relative z-10 mt-4 font-heading text-xl font-semibold text-foreground">
                {useCase.title}
              </h3>
              <ul className="relative z-10 mt-4 space-y-3 text-sm text-muted-foreground">
                {useCase.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="relative z-10 mt-6 flex flex-wrap gap-2 text-xs font-semibold text-primary">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                  <QrCode className="h-4 w-4" />
                  QR to chat
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                  <Truck className="h-4 w-4" />
                  Delivery ready
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
