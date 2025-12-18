import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, AudioLines, MessageSquare, Mic, Smile, Wand2 } from "lucide-react";

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
  sender: "Shaikh Ali" | "Mohsin Foods" | "Mohsin Foods";
  tone: "customer" | "bot" | "dashboard";
  text: string;
  time: string;
  highlights: PerkId[];
};

const perks: Perk[] = [
  {
    id: "voice",
    title: "Voice-to-text, instantly",
    description: "Customers talk naturally. You receive structured items, spice, and address.",
    icon: AudioLines,
    tone: "accent",
  },
  {
    id: "smart-suggest",
    title: "Smart add-on suggestions",
    description: "Boost order value with timely, relevant upsell prompts.",
    icon: Wand2,
    tone: "primary",
  },
  {
    id: "sync",
    title: "Auto-sync to dashboard",
    description: "Tickets appear instantly with status, payment, and kitchen-ready details.",
    icon: ArrowLeftRight,
    tone: "secondary",
  },
];

const chatMessages: ChatMessage[] = [
  {
    sender: "Shaikh Ali",
    tone: "customer",
    text: "Assalam-o-Alaikum 👋 2 Chicken Biryanis 🍛🍛 + 1 Chicken Karahi 🍲 for delivery.",
    time: "8:12 pm",
    highlights: [],
  },
  {
    sender: "Shaikh Ali",
    tone: "customer",
    text: "🎤 Voice note (0:07): “Mild please… Gulshan Block 5 📍”",
    time: "8:12 pm",
    highlights: ["voice"],
  },
  {
    sender: "Mohsin Foods",
    tone: "bot",
    text: "Got it ✅ Mild 🙂 Address saved 📍 Gulshan Block 5. Add soft drinks 🥤 or fries 🍟?",
    time: "8:13 pm",
    highlights: ["voice", "smart-suggest"],
  },
  {
    sender: "Shaikh Ali",
    tone: "customer",
    text: "Add 2 soft drinks 🥤🥤",
    time: "8:13 pm",
    highlights: ["smart-suggest"],
  },
  {
    sender: "Mohsin Foods",
    tone: "dashboard",
    text: "Order #4821 created ✅ Kitchen ticket 🧾 ready • Rider assigned 🛵",
    time: "8:13 pm",
    highlights: ["sync"],
  },
];

const CHAT_WALLPAPER_DATA_URI =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='180'%20height='180'%20viewBox='0%200%20180%20180'%3E%3Cg%20fill='none'%20stroke='%2388C456'%20stroke-opacity='0.14'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M42%2046h40c10%200%2018%208%2018%2018v8c0%2010-8%2018-18%2018H68l-14%2011v-11H42c-10%200-18-8-18-18v-8c0-10%208-18%2018-18z'/%3E%3Cpath%20d='M114%20114h34c9%200%2016%207%2016%2016v6c0%209-7%2016-16%2016h-10l-12%2010v-10h-12c-9%200-16-7-16-16v-6c0-9%207-16%2016-16z'/%3E%3Cpath%20d='M132%2046c0%2012-10%2022-22%2022s-22-10-22-22%2010-22%2022-22%2022%2010%2022%2022z'/%3E%3Cpath%20d='M96%2046h28'/%3E%3Cpath%20d='M52%20126h20'/%3E%3Cpath%20d='M48%20146h10'/%3E%3Cpath%20d='M26%20110h10'/%3E%3Cpath%20d='M150%2090h10'/%3E%3Cpath%20d='M124%2090h10'/%3E%3C/g%3E%3C/svg%3E";

const toneStyles = {
  primary: {
    icon: "bg-primary/10 text-primary ring-primary/20",
    active: "border-primary/30 ring-primary/20",
    glow: "from-primary/15 via-transparent to-primary/5",
    dot: "bg-primary",
    badge: "bg-primary text-primary-foreground",
  },
  secondary: {
    icon: "bg-secondary/10 text-secondary ring-secondary/20",
    active: "border-secondary/30 ring-secondary/20",
    glow: "from-secondary/15 via-transparent to-secondary/5",
    dot: "bg-secondary",
    badge: "bg-secondary text-secondary-foreground",
  },
  accent: {
    icon: "bg-accent/15 text-accent-foreground ring-accent/30",
    active: "border-accent/30 ring-accent/20",
    glow: "from-accent/15 via-transparent to-accent/5",
    dot: "bg-accent",
    badge: "bg-accent text-accent-foreground",
  },
} as const;

export function ExperienceSection() {
  const [activePerkId, setActivePerkId] = useState<PerkId>("voice");
  const activePerk = perks.find((perk) => perk.id === activePerkId) ?? perks[0];

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Live experience
          </motion.span> */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What customers chat and your team gets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            No app. No training. Just a familiar chat flow in, structured orders out.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              

              <div className="relative max-w-md">
                <div
                  className="pointer-events-none absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-accent/40 via-primary/40 to-secondary/40"
                  aria-hidden
                />

                <div className="space-y-5">
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
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.99 }}
                        aria-pressed={isActive}
                        className={cn(
                          "group flex w-full items-center gap-4 rounded-2xl px-2 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                        )}
                      >
                        <span
                          className={cn(
                            "relative grid h-12 w-12 shrink-0 place-items-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105",
                            isActive ? "ring-2" : "ring-1",
                            styles.icon,
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span
                            className={cn(
                              "pointer-events-none absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-background ring-2 ring-background transition-opacity",
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                            )}
                            aria-hidden
                          >
                            <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
                          </span>
                        </span>

                        <div className="min-w-0 flex-1">
                          <p
                            className={cn(
                              "text-sm font-semibold transition-colors",
                              isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                            )}
                          >
                            {perk.title}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">{activePerk.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{activePerk.description}</p>
              </div>
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
              <div className="flex items-center justify-between gap-3 border-b border-white/15 bg-primary px-5 py-4 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">Mohsin Foods</p>
                    <p className="truncate text-xs text-primary-foreground/80">online</p>
                  </div>
                </div>
                
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-5 sm:p-6">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.75]"
                  style={{
                    backgroundImage: `url('${CHAT_WALLPAPER_DATA_URI}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "180px 180px",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    background:
                      "radial-gradient(circle_at_20%_10%,rgba(136,196,86,0.20),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(89,153,201,0.18),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(252,183,82,0.12),transparent_55%)",
                  }}
                  aria-hidden
                />

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
                              
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
                    <Smile className="h-5 w-5 text-muted-foreground" />
                    <span className="flex-1">Type a message…</span>
                    <Mic className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
