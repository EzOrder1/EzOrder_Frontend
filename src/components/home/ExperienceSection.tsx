import { motion } from "framer-motion";
import { MessageSquare, LayoutDashboard, Mic } from "lucide-react";

const chatMessages = [
  {
    sender: "Customer",
    tone: "customer",
    text: "Salaam, I need 2 chicken biryanis and 1 karahi for delivery.",
  },
  {
    sender: "EZORDER Bot",
    tone: "bot",
    text: "Got it! 2 Chicken Biryani + 1 Chicken Karahi. Any spice preference? Delivery time is 35 minutes.",
  },
  {
    sender: "Customer",
    tone: "customer",
    text: "Make it mild please. Address: Gulshan Block 5.",
  },
  {
    sender: "Dashboard",
    tone: "dashboard",
    text: "Ticket #4821 created with delivery details, payment link, and kitchen printout.",
  },
];

const perks = [
  "Voice notes transcribed instantly for Urdu and Roman Urdu.",
  "Menu-aware AI that suggests add-ons instead of generic replies.",
  "Full history synced to the Admin Dashboard with statuses.",
];

export function ExperienceSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container grid gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Live experience
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            What the customer and your team see
          </h2>
          <p className="mt-4 text-muted-foreground">
            No app installs or training. Customers message like they always do, and you get structured orders with zero manual typing.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {perks.map((perk) => (
              <li key={perk} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" aria-hidden />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 -bottom-40 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 space-y-4">
              {chatMessages.map((message, index) => (
                <div key={message.text} className={`flex ${message.tone === "customer" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-xl rounded-2xl border px-4 py-3 shadow-sm ${
                      message.tone === "bot"
                        ? "border-primary/30 bg-primary/10 text-foreground"
                        : message.tone === "dashboard"
                        ? "border-secondary/30 bg-secondary/10 text-foreground"
                        : "border-border bg-muted/70 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <span
                        className={`flex h-2 w-2 rounded-full ${
                          message.tone === "bot"
                            ? "bg-primary"
                            : message.tone === "dashboard"
                            ? "bg-secondary"
                            : "bg-foreground"
                        }`}
                      />
                      {message.sender}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{message.text}</p>
                    {index === chatMessages.length - 1 && (
                      <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-secondary">
                        <LayoutDashboard className="h-4 w-4" />
                        Synced to dashboard in real time
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
