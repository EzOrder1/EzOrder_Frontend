import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const WHATSAPP_NUMBER = "923001234567";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order.");

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 lg:py-12 bg-background">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >


            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Order Food Fast with{" "}
              <span className="block mt-2">
                <span className="text-primary italic">ez</span>
                <span className="text-secondary">Order</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
              Experience the easiest way to order food. Simply chat on WhatsApp, voice or text, and get your favorite meals delivered instantly.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-primary text-white border-0 h-12 px-8 text-lg rounded-full transition-all duration-300 hover:-translate-y-1">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle className="h-5 w-5 filled" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-secondary to-sky-400 hover:shadow-glow-secondary text-white border-0 h-12 px-8 text-lg rounded-full transition-all duration-300 hover:-translate-y-1">
                <Link to="/get-started" className="gap-2">
                  <Store className="h-5 w-5" />
                  Start Selling
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <span>Voice Order</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="font-bold text-lg">Ur</span>
                </div>
                <span>Urdu / English</span>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Swirling background effects */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl animate-pulse"></div>
              <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl -z-10 translate-y-[-20%] translate-x-[20%]"></div>

              <img
                src={heroIllustration}
                alt="EZORDER WhatsApp food ordering"
                className="relative rounded-3xl shadow-elevated border-[6px] border-white/50 backdrop-blur-sm"
                width={600}
                height={400}
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Order Confirmed!</p>
                    <p className="text-xs text-gray-500">Just now via WhatsApp</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
