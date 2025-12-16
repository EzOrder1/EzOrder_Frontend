import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import howStep1Connect from "@/assets/how-step1-connect.png";
import howStep2Browse from "@/assets/how-step2-browse.png";
import howStep3Order from "@/assets/how-step3-order.png";
import howStep4Enjoy from "@/assets/how-step4-enjoy.png";

type Step = {
  number: string;
  title: string;
  description: string;
  isIcon: boolean;
  image?: string;
  icon?: LucideIcon;
  color?: string;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Connect",
    description: "Link your account",
    image: howStep1Connect,
    isIcon: false,
  },
  {
    number: "2",
    title: "Browse Menu",
    description: "Explore our offerings",
    image: howStep2Browse,
    isIcon: false,
  },
  {
    number: "3",
    title: "Place Order",
    description: "Securely confirm",
    image: howStep3Order,
    isIcon: false,
  },
  {
    number: "4",
    title: "Enjoy!",
    description: "Track & receive",
    image: howStep4Enjoy,
    isIcon: false,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-medium">
            Simple Steps to Get Started
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Dashed Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-border/60 -z-10" />

          {steps.map((step, index) => {
            const mediaContent = step.isIcon ? (
              <step.icon className="h-16 w-16" />
            ) : (
              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover p-2"
              />
            );

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Arrow for steps 1-3 (Mobile/Desktop adjustment usually needed, keeping simple loop for now) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/30 rotate-90">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}

                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md z-10">
                    {step.number}
                  </div>

                  {/* Image/Icon Container */}
                  <div className={`relative h-40 w-40 rounded-full flex items-center justify-center shadow-sm border-4 border-white ring-1 ring-border/20 overflow-hidden ${step.isIcon ? step.color : 'bg-orange-50'}`}>
                    {mediaContent}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
