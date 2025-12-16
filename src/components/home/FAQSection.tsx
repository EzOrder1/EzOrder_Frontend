import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most restaurants go live the same day. Share your menu, pick your WhatsApp number, and our team configures the bot plus your admin dashboard.",
  },
  {
    question: "Do customers need to install anything?",
    answer:
      "No apps or downloads. Customers use the same WhatsApp chat they already have, whether they type, send voice notes, or switch languages mid-order.",
  },
  {
    question: "Can staff take over a conversation?",
    answer:
      "Yes. You can jump into any live chat from the dashboard, send manual replies, or adjust an order without breaking the AI flow.",
  },
  {
    question: "Does it work for delivery and pickup?",
    answer:
      "EZORDER collects delivery addresses, drop-off instructions, and pickup times automatically, then pushes them to the kitchen and rider tools you use.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-sm font-semibold uppercase tracking-wider text-primary"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl"
          >
            Answers for owners and managers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            Still deciding? These are the questions we hear most from restaurants rolling out WhatsApp ordering.
          </motion.p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-border">
                <AccordionTrigger className="text-left font-heading text-base text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
