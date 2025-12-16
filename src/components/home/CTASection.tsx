import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-8 text-center sm:p-12 lg:p-16 shadow-glow-primary"
        >
          {/* Background decorations */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-7 w-7 text-white" />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Restaurant?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Join hundreds of restaurants already using EZORDER to streamline their ordering process. Get started in minutes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="bg-white text-primary hover:bg-white/90 border-0 text-lg h-12 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                <Link to="/get-started" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white h-12 px-8 text-lg rounded-full border border-white/30"
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
