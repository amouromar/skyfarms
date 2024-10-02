"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronDown,
  Leaf,
  Building,
  Apple,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      message,
    };

    const response = await fetch("https://formspree.io/f/xzzpnlbr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/fotor-ai-20241001163655.jpg"
          alt="Vertical farming in a skyscraper"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            SkyFarms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-8"
          >
            Revolutionizing Urban Agriculture
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" onClick={openContactForm}>
              Get In Touch
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Concept Overview */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Farming in the Sky
          </h2>
          <p className="text-base sm:text-lg mb-10">
            SkyFarms is revolutionizing agriculture by transforming urban
            skyscrapers into vertical farms. We&apos;re bringing fresh, locally grown
            produce right to the heart of cities, making healthy food more
            accessible than ever before.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="w-12 h-12 text-green-500" />}
              title="Sustainable Agriculture"
              description="Our vertical farming techniques use up to 95% less water than traditional farming methods. By optimizing resource usage and minimizing waste, we're creating a more sustainable future for urban food production."
            />
            <FeatureCard
              icon={<Building className="w-12 h-12 text-green-500" />}
              title="Urban Integration"
              description="SkyFarms seamlessly integrates into existing city infrastructure, transforming unused urban spaces into productive farmland. This innovative approach maximizes space efficiency and brings agriculture closer to consumers."
            />
            <FeatureCard
              icon={<Apple className="w-12 h-12 text-green-500" />}
              title="Fresh, Local Produce"
              description="By growing food vertically in urban centers, we significantly reduce the distance from farm to table. This means fresher, more nutritious produce for city dwellers, and a reduced carbon footprint from transportation."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
            Why Urban Farming Matters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <BenefitItem title="Reduced Transportation Costs">
              Locally grown produce means fewer miles traveled, reducing carbon
              emissions and costs.
            </BenefitItem>
            <BenefitItem title="Year-Round Production">
              Controlled environments allow for consistent crop yields
              regardless of season or weather.
            </BenefitItem>
            <BenefitItem title="Water Conservation">
              Our hydroponic systems use up to 95% less water than traditional
              farming methods.
            </BenefitItem>
            <BenefitItem title="Community Engagement">
              Creating local jobs and fostering a connection between urban
              dwellers and their food sources.
            </BenefitItem>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
            How SkyFarms Works
          </h2>
          <div className="space-y-8 sm:space-y-12">
            <Step number={1} title="Vertical Integration">
              We transform unused spaces in skyscrapers into state-of-the-art
              vertical farms.
            </Step>
            <Step number={2} title="Advanced Hydroponics">
              Our soilless growing systems maximize yield while minimizing
              resource usage.
            </Step>
            <Step number={3} title="Smart Technology">
              AI-driven climate control and monitoring ensure optimal growing
              conditions 24/7.
            </Step>
            <Step number={4} title="Local Distribution">
              Fresh produce is harvested and delivered directly to local markets
              and restaurants.
            </Step>
          </div>
          <div className="mt-12 text-center">
            <Link href="/how-it-works">
              <Button size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Want to Learn More or Invest?
          </h2>
          <p className="text-base sm:text-lg mb-8">
            SkyFarms is seeking visionary investors to join us in
            revolutionizing urban agriculture. Whether you're interested in
            learning more about our technology or exploring investment
            opportunities, we'd love to connect with you.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-gray-400 border-white hover:bg-white hover:text-green-800"
            onClick={openContactForm}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={closeContactForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Fill out the form below to get in touch with us.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Input
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
            />
            <Input
              required
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Textarea
              required
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-4"
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-400">
              Your message has been sent! We&apos;ll get back to you shortly.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitItem = ({ title, children }: { title: string; children: React.ReactNode; }) => (
  <div className="flex flex-col bg-white rounded-lg p-6 shadow-md">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Step = ({ number, title, children }: { number: number; title: string; children: React.ReactNode; }) => (
  <div className="flex flex-col bg-white rounded-lg p-6 shadow-md">
    <span className="text-4xl font-bold text-green-600 mb-2">{number}</span>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);
