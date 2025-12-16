import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <Layout>
            <section className="relative overflow-hidden py-12 lg:py-20 bg-background pt-24">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Have a question or need support? Get in touch with us!
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Contact Information */}
                        <div className="card-elevated p-8 bg-card rounded-3xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-white p-1">
                                    <img
                                        src={logo}
                                        alt="EzOrder Support"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading">Get in Touch</h3>
                                    <p className="text-muted-foreground">We're here to help you 24/7</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <a href="tel:+11234567890" className="flex items-center gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg text-foreground hover:text-primary transition-colors">+1 (123) 456-7890</span>
                                </a>

                                <a href="mailto:support@ezorder.com" className="flex items-center gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-foreground group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg text-foreground hover:text-primary transition-colors">support@ezorder.com</span>
                                </a>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1 text-lg">Office Address</h4>
                                        <p className="text-muted-foreground text-lg">
                                            1234 Market St, Suite 100,<br />
                                            City, State 12345
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                {/* Social Icons */}
                                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                                {/* Removed potentially crashing brand icons */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card-elevated p-8 bg-card rounded-3xl h-fit">
                            <h2 className="text-2xl font-bold font-heading mb-6">Send Us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            placeholder="Your Name"
                                            className="pl-10 h-12 bg-muted/30 border-border/50 focus:bg-background transition-colors"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            placeholder="Your Email"
                                            className="pl-10 h-12 bg-muted/30 border-border/50 focus:bg-background transition-colors"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            placeholder="Subject"
                                            className="pl-10 h-12 bg-muted/30 border-border/50 focus:bg-background transition-colors"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Textarea
                                            placeholder="Your Message"
                                            className="pl-10 min-h-[150px] bg-muted/30 border-border/50 focus:bg-background transition-colors resize-none pt-3"
                                        />
                                        <div className="absolute left-3 top-3.5 text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.234 20.252 21 3l-18 9.027 6.452 2.622"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-lg rounded-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 mt-4 text-white"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="h-8 w-8" />
            </a>
        </Layout>
    );
};

export default Contact;
