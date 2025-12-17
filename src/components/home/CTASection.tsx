import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-primary p-8 text-center shadow-glow-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-12 lg:p-16"
        >
          {/* Background decorations */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />

          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Transform Your Restaurant?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
              Join the restaurants already using ezOrder to streamline their ordering process. Get started in minutes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-secondary px-8 text-lg text-secondary-foreground shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-secondary/90 hover:shadow-xl"
              >
                <Link to="/get-started" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-full bg-accent px-8 text-lg text-accent-foreground shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-accent/90 hover:shadow-xl"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
