import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PhoneButton from "@/components/PhoneButton";
import ClientCarousel from "@/components/ClientCarousel";
import { Link } from "react-router-dom";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const services = [
  {
    title: "Educational Buildings",
    image: "/images/edu.jpg",
    description: "Fire alarms, evacuation plans, and drills for schools and colleges."
  },
  {
    title: "Hospitals",
    image: "/images/hosp.jpg",
    description: "Smoke detection and fire systems designed for healthcare safety."
  },
  {
    title: "Hotels/Restaurants",
    image: "/images/hotel.jpg",
    description: "Sprinklers and alarms for guest and kitchen fire safety."
  },
  {
    title: "Residential Buildings",
    image: "/images/resd.jpg",
    description: "Home fire protection with hydrants, alarms, and extinguishers."
  },
  {
    title: "Commercial Buildings",
    image: "/images/comm.jpg",
    description: "Integrated safety systems for offices and malls."
  },
  {
    title: "Power Plants",
    image: "/images/pp.jpg",
    description: "High-grade systems for fire control in critical areas."
  },
  {
    title: "Factories",
    image: "/images/fact.jpg",
    description: "Industrial fire protection with detectors and extinguishers."
  }
];



  // Features for enhanced presentation
const features = [
  { 
    icon: "🔥", 
    title: "Responsive Support", 
    description: "Timely assistance to ensure safety and peace of mind" 
  },
  { 
    icon: "🛡️", 
    title: "Certified Professionals", 
    description: "Fully qualified team with industry certifications" 
  },
  { 
    icon: "📋", 
    title: "Compliance Guaranteed", 
    description: "All solutions meet regulatory requirements" 
  }
];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 parallax-container">
        {/* Animated background elements */}
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ 
            backgroundImage: "images/firesafety.jpg",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(0_85%_60%/0.4),transparent_50%)] animate-pulse z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(45_95%_65%/0.3),transparent_50%)] z-10"></div>
        
        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="md:w-1/2 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 relative inline-block">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-lg"></div>
                <img 
                  src="/assets/image-removebg-preview.png" 
                  alt="Crossfire Logo" 
                  className="h-32 relative animate-float-slow" 
                />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                Your Trusted<br />
                <span className="gradient-text-secondary animate-pulse-glow">Fire Safety Partner</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-12 leading-relaxed">
                Fire Protection Engineers & Consultants - Providing comprehensive fire safety solutions since 2000
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="services">
                <Button 
                  className="px-8 py-7 rounded-xl text-lg font-semibold shadow-glow animate-pulse-glow"
                  size="lg"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="px-8 py-7 rounded-xl text-lg font-semibold glass-morph border-0"
                  size="lg"
                >
                  Contact Us
                </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass-card-premium p-6 rounded-2xl rotate-6 transform hover:rotate-0 transition-all duration-500">
                <img 
                  src="/images/stock2.jpg" 
                  alt="Fire Safety" 
                  className="rounded-xl shadow-primary"
                />
              </div>
              <div className="glass-card-premium p-6 rounded-2xl absolute top-12 -left-12 -rotate-6 transform hover:rotate-0 transition-all duration-500 z-10">
                <img 
                  src="/images/FireSafety.jpg" 
                  alt="Fire Prevention" 
                  className="rounded-xl shadow-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-morph p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section with Parallax */}
      <section className="py-24 relative parallax-container">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ 
            backgroundImage: "linear-gradient(135deg, rgba(220, 38, 38, 0.05), rgba(234, 179, 8, 0.05))",
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-5xl font-bold text-center gradient-text mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-foreground mb-6">
                Safety Through <span className="gradient-text-secondary">Fire Protection</span>
              </h3>
              <p className="text-foreground/80 text-xl leading-relaxed">
                We are a multidisciplinary fire safety consultancy and service provider offering 
                comprehensive solutions that help businesses and institutions maintain the highest 
                levels of fire safety. Our team combines technical expertise with practical knowledge 
                to deliver reliable fire protection systems.
              </p>
              <div className="space-y-6">
                {[
                  "Fire Prevention Design & Hazard Assessments",
                  "Fire Escape & Evacuation Planning",
                  "Training & Awareness Programs"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card-premium p-6 rounded-xl hover-scale"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="flex items-center">
                      <div 
                        className={`w-4 h-4 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full mr-4 ${index % 2 === 0 ? 'shadow-glow' : ''}`}
                      ></div>
                      <span className="text-foreground text-lg font-medium">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-xl blur-lg animate-pulse-glow"></div>
              <img 
                src="/assets/crossfire-logo.png" 
                alt="Fire Safety Solutions" 
                className="relative rounded-xl shadow-2xl hover-scale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-5xl font-bold text-center gradient-text mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            To Whom Do We Cater
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card-premium relative overflow-hidden cursor-pointer transition-all duration-500 hover-scale group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-video relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                      <p className="text-sm leading-relaxed font-medium">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-secondary rounded-full shadow-glow animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Our Clients Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-5xl font-bold text-center gradient-text-secondary mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Notable Clients
          </motion.h2>
          <motion.div 
            className="glass-card-premium p-8 rounded-2xl shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ClientCarousel />
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="glass-morph p-12 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to enhance your fire safety?</h2>
            <p className="text-xl mb-8 text-foreground/80">
              Get in touch with our team of experts to discuss your fire safety needs
            </p>
                <Link to="/contact">
      <Button className="px-8 py-6 text-lg shadow-glow">
        Get a Free Consultation
      </Button>
    </Link>
          </motion.div>
        </div>
      </section>


      <PhoneButton />
    </div>
  );
};

export default Index;