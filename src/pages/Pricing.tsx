import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BadgeCheck, Check, Headphones, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import pricingTrial from "@/assets/ai/pricing-trial.svg";
import pricingStarter from "@/assets/ai/pricing-starter.svg";
import pricingGrowth from "@/assets/ai/pricing-growth.svg";
import pricingEnterprise from "@/assets/ai/pricing-enterprise.svg";

type PlanTone = "primary" | "secondary" | "accent" | "neutral";

type Plan = {
  id: string;
  name: string;
  tone: PlanTone;
  priceLabel: string;
  periodLabel: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
  cta: {
    label: string;
    href: string;
    variant?: "default" | "secondary" | "outline" | "ghost";
    className?: string;
  };
  note?: string;
};

const toneStyles: Record<PlanTone, { ring: string; badge: string; check: string; icon: string; tint: string }> = {
  primary: {
    ring: "ring-primary/20 border-primary/25",
    badge: "bg-primary/10 text-primary",
    check: "text-primary",
    icon: "bg-primary/10 text-primary ring-primary/20",
    tint: "from-primary/12 via-background to-primary/5",
  },
  secondary: {
    ring: "ring-secondary/20 border-secondary/25",
    badge: "bg-secondary/10 text-secondary",
    check: "text-secondary",
    icon: "bg-secondary/10 text-secondary ring-secondary/20",
    tint: "from-secondary/12 via-background to-secondary/5",
  },
  accent: {
    ring: "ring-accent/20 border-accent/25",
    badge: "bg-accent/15 text-accent-foreground",
    check: "text-accent",
    icon: "bg-accent/15 text-accent-foreground ring-accent/30",
    tint: "from-accent/15 via-background to-accent/5",
  },
  neutral: {
    ring: "ring-border/60 border-border",
    badge: "bg-muted text-muted-foreground",
    check: "text-foreground",
    icon: "bg-muted text-muted-foreground ring-border/60",
    tint: "from-muted/40 via-background to-muted/10",
  },
};

const plans: Plan[] = [
  {
    id: "trial",
    name: "Trial",
    tone: "primary",
    priceLabel: "Rs 0",
    periodLabel: "first month",
    description: "Start fast and see real orders in your dashboard.",
    image: pricingTrial,
    badge: "Free for 30 days",
    features: [
      "Full WhatsApp ordering flow",
      "Dashboard + kitchen ticket",
      "Voice notes supported (Urdu / Roman Urdu)",
      "Delivery + pickup order types",
      "Email support",
    ],
    cta: { label: "Start Free Month", href: "/get-started", variant: "default" },
    note: "No credit card required.",
  },
  {
    id: "starter",
    name: "Starter",
    tone: "secondary",
    priceLabel: "Rs 4,999",
    periodLabel: "per month",
    description: "Perfect for a single outlet getting consistent orders.",
    image: pricingStarter,
    features: [
      "1 branch",
      "Up to 5 staff logins",
      "Menu & add-ons suggestions",
      "Basic analytics",
      "24-hour support response",
    ],
    cta: { label: "Choose Starter", href: "/get-started", variant: "secondary" },
  },
  {
    id: "growth",
    name: "Growth",
    tone: "accent",
    priceLabel: "Rs 9,999",
    periodLabel: "per month",
    description: "Built for growing teams and multi-branch workflows.",
    image: pricingGrowth,
    badge: "Most popular",
    features: [
      "Up to 3 branches",
      "Unlimited staff logins",
      "Branch routing + delivery zones",
      "Advanced analytics & reports",
      "Priority support",
    ],
    cta: {
      label: "Choose Growth",
      href: "/get-started",
      className: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tone: "neutral",
    priceLabel: "Rs 24,999",
    periodLabel: "per month",
    description: "For chains that need deeper control and custom workflows.",
    image: pricingEnterprise,
    features: [
      "Unlimited branches",
      "Custom order rules + automations",
      "Dedicated onboarding",
      "SLA + priority support",
      "Custom reporting exports",
    ],
    cta: { label: "Talk to Sales", href: "/contact", variant: "outline" },
    note: "Custom setup available for large teams.",
  },
];

const faqs = [
  {
    q: "Is the first month really free?",
    a: "Yes — your first 30 days are free. After that, you can choose a paid plan that matches your order volume.",
  },
  {
    q: "Are prices in PKR and billed monthly?",
    a: "Yes, all prices are in rupees and billed monthly. Taxes (if applicable) are not included.",
  },
  {
    q: "Can I upgrade or downgrade later?",
    a: "Anytime. Move up when you grow, or switch plans if your needs change.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Simple plans for every restaurant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-lg text-muted-foreground"
            >
              Start with a free month, then pick a plan that fits your growth. All plans keep customers on the chat they already use.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, index) => {
              const styles = toneStyles[plan.tone];
              const isFeatured = plan.badge === "Most popular";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06 }}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
                    "ring-1",
                    styles.ring,
                    isFeatured && "ring-2 ring-accent/30",
                  )}
                >
                  <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70", styles.tint)} aria-hidden />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
                          {plan.badge && (
                            <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", styles.badge)}>
                              {isFeatured && <Sparkles className="h-3.5 w-3.5" />}
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-border/60 bg-background/70 shadow-sm">
                      <img
                        src={plan.image}
                        alt={`${plan.name} plan illustration`}
                        loading="lazy"
                        className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-4xl font-bold tracking-tight text-foreground">{plan.priceLabel}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{plan.periodLabel}</p>
                      </div>
                      {plan.id === "trial" && (
                        <div className="flex items-center gap-2 rounded-2xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                          <BadgeCheck className="h-4 w-4" />
                          Setup included
                        </div>
                      )}
                    </div>

                    <ul className="mt-6 space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="group/item flex items-start gap-3 rounded-xl px-2 py-2 text-sm text-foreground/90 transition-colors hover:bg-background/70"
                        >
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", styles.check)} aria-hidden />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.note && <p className="mt-4 text-xs font-medium text-muted-foreground">{plan.note}</p>}
                  </div>

                  <div className="relative mt-6">
                    <Button
                      asChild
                      variant={plan.cta.variant}
                      className={cn(
                        "h-11 w-full rounded-full text-base",
                        plan.cta.className,
                        plan.cta.variant === "outline" && "bg-background/60",
                      )}
                    >
                      <Link to={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Fast setup",
                description: "Go live quickly with guided onboarding.",
                icon: Zap,
                tone: "primary" as const,
              },
              {
                title: "Secure by design",
                description: "Role-based access for managers and staff.",
                icon: ShieldCheck,
                tone: "secondary" as const,
              },
              {
                title: "Human support",
                description: "Real help when you need it — not tickets only.",
                icon: Headphones,
                tone: "accent" as const,
              },
            ].map((item) => {
              const Icon = item.icon;
              const styles = toneStyles[item.tone];
              return (
                <div key={item.title} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60", styles.tint)} aria-hidden />
                  <div className="relative">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl ring-1", styles.icon)}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Questions, answered</h2>
              <p className="mt-3 text-muted-foreground">
                Everything you need to know before you start. If you have a special workflow, talk to us.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="secondary" className="rounded-full">
                  <Link to="/get-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-background/60">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item) => (
                    <AccordionItem key={item.q} value={item.q}>
                      <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
