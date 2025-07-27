import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PhoneButton from "@/components/PhoneButton";
import { Button } from "@/components/ui/button";
import ParallaxZoomGallery from "@/components/ParallaxZoomGallery";

const galleryItems = [
  {
    id: 1,
    title: "Fire Alarm Installation",
    description: "Professional installation of advanced fire alarm systems for commercial buildings",
    image: "/images/FireSafety.jpg",
  },
  {
    id: 2,
    title: "Sprinkler Systems",
    description: "State-of-the-art automatic sprinkler systems that provide reliable protection",
    image: "/images/Sprinkler.jpg",
  },
  {
    id: 3,
    title: "Safety Training",
    description: "On-site fire safety training sessions for employees and management",
    image: "https://images.unsplash.com/photo-1544717684-1243da23b545?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Emergency Planning",
    description: "Comprehensive emergency evacuation planning and implementation",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Equipment Maintenance",
    description: "Regular inspection and maintenance of fire safety equipment",
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Fire Risk Assessment",
    description: "Detailed assessment of fire risks in commercial and residential properties",
    image: "https://images.unsplash.com/photo-1555661530-68c8e98db4e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

export default function Gallery() {
  // Parallax effect for gallery items
  useEffect(() => {
    const handleParallax = (e: MouseEvent) => {
      const parallaxItems = document.querySelectorAll('.parallax-item');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxItems.forEach((item, index) => {
        const depth = 15 + (index * 5);
        const moveX = (x * depth) - (depth / 2);
        const moveY = (y * depth) - (depth / 2);
        
        (item as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleParallax);
    
    return () => {
      window.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero section with parallax */}
      <section className="parallax-container relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10"></div>
        <div 
          className="parallax-bg"
          style={{ 
            backgroundImage: "url(/images/serenity.jpg",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)"
          }}
        ></div>
        
        <div className="container mx-auto relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Fire Safety Project Gallery
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our comprehensive portfolio of fire safety installations, equipment, and services that have helped businesses stay protected
            </motion.p>
          </div>
        </div>
      </section>
      <ParallaxZoomGallery/>
      
      {/* Gallery grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="parallax-item glass-card-premium rounded-2xl overflow-hidden hover-scale"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                  <Button variant="outline" size="sm" className="w-full group">
                    View Project 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="glass-morph p-12 text-center max-w-3xl mx-auto animate-pulse-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need a Custom Fire Safety Solution?</h2>
            <p className="text-lg mb-8 text-foreground/80">
              Our team of experts can design and implement tailored fire safety systems for your specific requirements
            </p>
            <Button className="px-8 py-6 text-lg shadow-glow">
              Request a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
      
      <PhoneButton />
    </div>
  );
}