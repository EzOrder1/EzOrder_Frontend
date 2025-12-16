import { motion } from "framer-motion";
import { Bike, DollarSign, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function RiderSection() {
    return (
        <section id="riders" className="py-16 lg:py-24 bg-background">
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
                            </span>
                            Hiring Now
                        </div>
                        <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Become an <span className="text-primary">EZ</span><span className="text-secondary">RIDER</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Earn money on your own schedule. Join our growing fleet of delivery partners and deliver smiles with every mile.
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Competitive Pay</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Earn for every delivery plus tips and bonuses.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Flexible Hours</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Be your own boss. Work whenever you want.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-foreground">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Local Areas</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Deliver in your preferred neighborhoods.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                    <Bike className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Easy Signup</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Start delivering in less than 24 hours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                                <Link to="/rider-registration" className="gap-2">
                                    Apply Now <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right side - maybe a form or just an image placeholder for now, or a styled card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 p-8 lg:p-12 text-center">
                            <div className="mx-auto rounded-full bg-white p-4 w-24 h-24 flex items-center justify-center shadow-lg mb-6">
                                <Bike className="w-12 h-12 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Ready to start?</h3>
                            <p className="mt-2 text-muted-foreground mb-6">Join thousands of riders delivering happiness.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <p className="text-sm font-medium">Download the App</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <p className="text-sm font-medium">Submit Documents</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <p className="text-sm font-medium">Start Earning</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
