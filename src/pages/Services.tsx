import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import PhoneButton from "@/components/PhoneButton";
import ServiceCard from "@/components/ServiceCard";
import { 
  Shield, 
  FlameKindling, 
  Sparkles, 
  AreaChart,
  ChevronRight, 
  Phone, 
  Mail
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Component for animated sections
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    
    const currentRef = ref.current; // Store ref in a variable for the cleanup
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) { // Use the stored variable
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            delay: delay,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Consulting Services",
      description: "Expert fire safety consulting for all types of buildings and facilities",
      features: [
        "Fire Prevention Designs",
        "Fire Hazard Assessment Reports",
        "Planning, Estimating, Commissioning",
        "Fire Escape Plans",
        "Evacuation Drills"
      ],
      icon: <Shield className="h-10 w-10 text-primary" />
    },
    {
      title: "Fire Hydrant Systems",
      description: "Complete installation and maintenance of fire hydrant systems",
      features: [
        "Hydrant Valves",
        "Hose Boxes",
        "Hose Pipes",
        "Branch Pipes",
        "Regular Maintenance"
      ],
      icon: <FlameKindling className="h-10 w-10 text-primary" />
    },
    {
      title: "Automatic Sprinkler Systems",
      description: "Effective sprinkler systems for automatic fire suppression",
      features: [
        "Design & Installation",
        "Various Types of Sprinklers",
        "Control Valve Assemblies",
        "Maintenance & Testing",
        "Code Compliance"
      ],
      icon: <Sparkles className="h-10 w-10 text-primary" />
    },
    {
      title: "Fire Detection Systems",
      description: "Advanced fire detection systems for early warning",
      features: [
        "Smoke & Heat Detectors",
        "Manual Call Points",
        "Hooters & Alarm Panels",
        "Addressable Fire Alarm Panels",
        "System Integration"
      ],
      icon: <AreaChart className="h-10 w-10 text-primary" />
    },
    {
      title: "Fire Pumps & Control Panels",
      description: "Reliable pumping systems for fire protection",
      features: [
        "Main Fire Pumps",
        "Jockey Pumps",
        "Booster Pumps",
        "Control Panels",
        "Regular Maintenance"
      ],
      icon: <Sparkles className="h-10 w-10 text-primary" />
    },
    {
      title: "Gas Flooding Systems",
      description: "Clean agent fire suppression systems for sensitive areas",
      features: [
        "CO2 Systems",
        "FM-200 Systems",
        "Novec 1230 Systems",
        "Inert Gas Systems",
        "Control & Detection"
      ],
      icon: <Shield className="h-10 w-10 text-primary" />
    },
    {
      title: "Fire Extinguishers",
      description: "Supply and maintenance of various fire extinguishers",
      features: [
        "ABC Type Extinguishers",
        "CO2 Extinguishers",
        "Foam Extinguishers",
        "BC Type Extinguishers",
        "Regular Maintenance & Refilling"
      ],
      icon: <FlameKindling className="h-10 w-10 text-primary" />
    },
    {
      title: "Safety Signage & Equipment",
      description: "Essential safety signage and equipment for emergency situations",
      features: [
        "Fire Exit Signs",
        "Emergency Lighting",
        "Fire Doors",
        "Fire Escape Plans",
        "Emergency Exit Routes"
      ],
      icon: <Sparkles className="h-10 w-10 text-primary" />
    },
    {
      title: "Training & Awareness",
      description: "Comprehensive fire safety training for organizations",
      features: [
        "Fire Fighting Training",
        "Evacuation Drills",
        "Emergency Response",
        "Equipment Usage",
        "Fire Prevention Awareness"
      ],
      icon: <AreaChart className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('/images/serenity.jpg')] bg-cover bg-center opacity-20"
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-2 px-4 rounded-full bg-primary/10 backdrop-blur-sm mb-4">
              <span className="text-primary font-semibold flex items-center">
                <FlameKindling className="h-4 w-4 mr-2" />
                COMPREHENSIVE FIRE SAFETY SOLUTIONS
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-8 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive fire safety solutions tailored to meet your organization's protection needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                Our Fire Safety Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                Our Products
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="glass-card-premium p-8 rounded-3xl hover:shadow-glow-sm transition-all duration-500 h-full group">
                <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  Fire Fighting Equipment
                </h3>
                <ul className="space-y-4">
                  {[
                    "Hydrant Valves & Hose Boxes",
                    "Hose Pipes & Branch Pipes",
                    "Hose Reels & Sprinklers",
                    "Fire Pumps & Control Panels"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 shadow-glow group-hover/item:scale-110 transition-transform duration-300"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center text-primary font-medium">
                    <span>View details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="glass-card-premium p-8 rounded-3xl hover:shadow-glow-sm transition-all duration-500 h-full group">
                <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors duration-300">
                  <AreaChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  Detection Systems
                </h3>
                <ul className="space-y-4">
                  {[
                    "Booster Pumps",
                    "Manual Call Points & Hooters",
                    "Smoke & Heat Detectors",
                    "Addressable Fire Alarm Panels"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 shadow-glow group-hover/item:scale-110 transition-transform duration-300"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center text-primary font-medium">
                    <span>View details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="glass-card-premium p-8 rounded-3xl hover:shadow-glow-sm transition-all duration-500 h-full group">
                <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors duration-300">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  Safety Equipment
                </h3>
                <ul className="space-y-4">
                  {[
                    "ABC, BC, CO2 Fire Extinguishers",
                    "Foam Fire Extinguishers",
                    "Fire Signage, Doors & Lights",
                    "Fire Escape Plans"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 shadow-glow group-hover/item:scale-110 transition-transform duration-300"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center text-primary font-medium">
                    <span>View details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/serenity.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <AnimatedSection>
            <div className="glass-card-premium p-12 rounded-3xl border border-primary/10 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 gradient-text">
                Ready to Enhance Your Fire Safety?
              </h2>
              <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
                Contact us today to discuss how we can help protect your business with our comprehensive fire safety solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </motion.a>
                <motion.a 
                  href="tel:+919246199077"
                  className="bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </motion.a>
              </div>
              
              <div className="mt-10 flex justify-center space-x-4">
                <div className="glass-bubble p-3 rounded-full">
                  <FlameKindling className="h-6 w-6 text-primary animate-pulse-slow" />
                </div>
                <div className="glass-bubble p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary animate-pulse-slow" />
                </div>
                <div className="glass-bubble p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse-slow" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <PhoneButton />
    </div>
  );
};

export default Services;