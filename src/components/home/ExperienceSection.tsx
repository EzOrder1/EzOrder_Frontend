import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, MessageSquare, Mic, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type PerkId = "voice" | "smart-suggest" | "sync";

type Perk = {
  id: PerkId;
  title: string;
  description: string;
  icon: typeof Mic;
  tone: "primary" | "secondary" | "accent";
};

type ChatMessage = {
  sender: "Customer" | "EZORDER Bot" | "Dashboard";
  tone: "customer" | "bot" | "dashboard";
  text: string;
  time: string;
  highlights: PerkId[];
};

const perks: Perk[] = [
  {
    id: "voice",
    title: "Voice → text instantly 🎙️",
    description: "Urdu / Roman Urdu voice notes turn into clean order details.",
    icon: Mic,
    tone: "accent",
  },
  {
    id: "smart-suggest",
    title: "Smart add-on suggestions ✨",
    description: "The bot nudges fries, drinks, and extras at the right time.",
    icon: Sparkles,
    tone: "primary",
  },
  {
    id: "sync",
    title: "Auto-sync to dashboard 📊",
    description: "Orders appear with address, status, and a ready kitchen ticket.",
    icon: LayoutDashboard,
    tone: "secondary",
  },
];

const chatMessages: ChatMessage[] = [
  {
    sender: "Customer",
    tone: "customer",
    text: "Assalam-o-Alaikum 👋 2 Chicken Biryanis 🍛🍛 + 1 Chicken Karahi 🍲 for delivery.",
    time: "8:12 pm",
    highlights: [],
  },
  {
    sender: "Customer",
    tone: "customer",
    text: "🎤 Voice note (0:07): “Mild please… Gulshan Block 5.”",
    time: "8:12 pm",
    highlights: ["voice"],
  },
  {
    sender: "EZORDER Bot",
    tone: "bot",
    text: "Got it ✅ Mild 🙂 + Address 📍 Gulshan Block 5. Want to add drinks 🥤 or fries 🍟?",
    time: "8:13 pm",
    highlights: ["voice", "smart-suggest"],
  },
  {
    sender: "Customer",
    tone: "customer",
    text: "Add 2 soft drinks 🥤🥤",
    time: "8:13 pm",
    highlights: ["smart-suggest"],
  },
  {
    sender: "Dashboard",
    tone: "dashboard",
    text: "Order #4821 created ✅ Items + address captured, kitchen ticket 🧾, rider assigned 🛵",
    time: "8:13 pm",
    highlights: ["sync"],
  },
];

const toneStyles = {
  primary: {
    icon: "bg-primary/10 text-primary ring-primary/20",
    active: "border-primary/30 ring-primary/20",
  },
  secondary: {
    icon: "bg-secondary/10 text-secondary ring-secondary/20",
    active: "border-secondary/30 ring-secondary/20",
  },
  accent: {
    icon: "bg-accent/15 text-accent-foreground ring-accent/30",
    active: "border-accent/30 ring-accent/20",
  },
} as const;

export function ExperienceSection() {
  const [activePerkId, setActivePerkId] = useState<PerkId>("voice");

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container grid gap-10 lg:grid-cols-12 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Live experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What customers chat — and your team gets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            No app. No training. Just WhatsApp 💬 in, clean orders out.
          </motion.p>

          <div className="mt-7 space-y-3">
            {perks.map((perk) => {
              const isActive = perk.id === activePerkId;
              const Icon = perk.icon;
              const styles = toneStyles[perk.tone];

              return (
                <motion.button
                  key={perk.id}
                  type="button"
                  onMouseEnter={() => setActivePerkId(perk.id)}
                  onFocus={() => setActivePerkId(perk.id)}
                  onClick={() => setActivePerkId(perk.id)}
                  whileHover={{ y: -2 }}
                  className={cn(
                    "group flex w-full items-start gap-3 rounded-2xl border border-border/60 bg-background/40 p-4 text-left shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-background/80 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                    isActive && `border-primary/30 ring-1 ${styles.active}`,
                  )}
                >
                  <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", styles.icon)}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-foreground">{perk.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{perk.description}</span>
                  </span>
                  <ArrowRight
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5",
                      isActive && "opacity-100 text-foreground",
                    )}
                  />
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
              <MessageSquare className="h-4 w-4" />
              Customer chat
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-secondary">
              <LayoutDashboard className="h-4 w-4" />
              Admin dashboard
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-foreground">
              <Mic className="h-4 w-4" />
              Voice friendly
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 -bottom-48 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-background/70 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">EZORDER on WhatsApp</p>
                    <p className="truncate text-xs text-muted-foreground">Replies instantly ⚡ • Syncs automatically 📲</p>
                  </div>
                </div>
                <div className="hidden rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary sm:inline-flex">
                  Live preview 🟢
                </div>
              </div>

              <div className="relative p-5 sm:p-6">
                <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background:radial-gradient(circle_at_20%_10%,rgba(136,196,86,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(89,153,201,0.18),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(252,183,82,0.14),transparent_55%)]" />

                <div className="relative space-y-4">
                  {chatMessages.map((message, index) => {
                    const isHighlighted = message.highlights.includes(activePerkId);
                    const highlightRing =
                      activePerkId === "sync"
                        ? "ring-2 ring-secondary/25"
                        : activePerkId === "voice"
                        ? "ring-2 ring-accent/25"
                        : "ring-2 ring-primary/25";

                    return (
                      <motion.div
                        key={`${message.sender}-${message.time}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className={cn("flex", message.tone === "customer" ? "justify-start" : "justify-end")}
                      >
                        <div
                          className={cn(
                            "max-w-xl rounded-2xl border px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5",
                            message.tone === "bot" &&
                              "border-primary/25 bg-gradient-to-br from-primary/15 to-primary/5 text-foreground",
                            message.tone === "dashboard" &&
                              "border-secondary/25 bg-gradient-to-br from-secondary/15 to-secondary/5 text-foreground",
                            message.tone === "customer" && "border-border bg-background/80 text-foreground",
                            isHighlighted && highlightRing,
                          )}
                        >
                          <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "flex h-2 w-2 rounded-full",
                                  message.tone === "bot" ? "bg-primary" : message.tone === "dashboard" ? "bg-secondary" : "bg-foreground",
                                )}
                                aria-hidden
                              />
                              {message.sender}
                            </span>
                            <span className="font-medium normal-case tracking-normal">{message.time}</span>
                          </div>

                          <p className="mt-2 text-sm leading-relaxed">{message.text}</p>

                          {message.tone === "dashboard" && (
                            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-secondary">
                              <LayoutDashboard className="h-4 w-4" />
                              Synced to dashboard in real time
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
                    <span className="text-base">😊</span>
                    <span className="flex-1">Type a message…</span>
                    <span className="text-base">🎤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
