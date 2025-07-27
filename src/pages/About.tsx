import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import PhoneButton from "@/components/PhoneButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Building, 
  School, 
  Hospital, 
  Hotel, 
  Home, 
  Landmark,
  ChevronRight,
  CheckCircle,
  BadgeCheck,
  Flame
} from "lucide-react";
import { Link } from "react-router-dom";

const MotionCard = motion(Card);

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
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
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

const About = () => {
  const focusAreas = [
    {
      title: "Fire Prevention",
      description: "Designing comprehensive fire prevention systems and conducting hazard assessments",
      icon: <Shield className="h-10 w-10 text-primary" />
    },
    {
      title: "Quality",
      description: "Delivering excellence in every project with strict adherence to safety standards",
      icon: <Award className="h-10 w-10 text-primary" />
    },
    {
      title: "Customer Safety",
      description: "Ensuring our clients achieve the highest levels of fire safety and protection",
      icon: <Users className="h-10 w-10 text-primary" />
    },
    {
      title: "Reliability",
      description: "Building solutions that protect lives and property in emergency situations",
      icon: <Clock className="h-10 w-10 text-primary" />
    }
  ];

  const projectTypes = [
    { name: "Commercial Buildings", icon: <Building className="h-6 w-6" /> },
    { name: "IT & Software Parks", icon: <Building className="h-6 w-6" /> },
    { name: "Educational Institutions", icon: <School className="h-6 w-6" /> },
    { name: "Hospitals & Nursing Homes", icon: <Hospital className="h-6 w-6" /> },
    { name: "Hotels", icon: <Hotel className="h-6 w-6" /> },
    { name: "Residential Complexes", icon: <Home className="h-6 w-6" /> },
    { name: "Government & Community Buildings", icon: <Landmark className="h-6 w-6" /> }
  ];

  const teamMembers = [
    {
      role: "Chief",
      name: "Aftab Ahmed",
      qualification: "B.E. Civil",
      experience: "30 years",
      photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
    },
    {
      role: "Design Engineer",
      name: "Apoorva Srivastava",
      qualification: "B.E. Fire & Safety",
      experience: "4 years",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop"
    },
    {
      role: "Project Manager",
      name: "Shiraz Shaikh",
      qualification: "M.Tech(Mech), CWI(UK)",
      experience: "",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      role: "Project Engineer",
      name: "Kushal Chary Cingaram",
      qualification: "M.Tech(Mech)",
      experience: "4 years",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      role: "Panel Engineer",
      name: "Radha Krishna",
      qualification: "B.Tech. Electrical",
      experience: "12 years",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
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
                <Flame className="h-4 w-4 mr-2" />
                FIRE SAFETY EXPERTS SINCE 2000
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            CROSSFIRE
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-foreground/80 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fire Protection Engineers & Consultants
          </motion.p>
          <Link to="/services">
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer animate-pulse-subtle">
              <span className="font-medium">Learn more about our expertise</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </div>
          </motion.div>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                About Us
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="glass-card-premium p-8 rounded-3xl">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Established in 2000, <span className="text-primary font-semibold">CROSSFIRE</span> is a multidisciplinary fire safety consultancy and service 
                  provider based in Hyderabad. Our team of experienced professionals combines technical expertise 
                  with practical knowledge to deliver reliable fire protection systems that adhere to the highest 
                  safety standards.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  We follow Indian and international fire safety codes such as BIS Standards, 
                  NBC of India, and Local Fire Department Regulations to ensure comprehensive protection 
                  for all types of buildings and facilities.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  With a perfect track record of completed projects and no confrontations or litigation to date, 
                  we have built a reputation for reliability, quality, and exceptional service in the fire 
                  safety industry.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="/images/FireSafety.jpg" 
                    alt="Fire Safety Team" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-semibold text-lg">Our Team at Work</p>
                      <p className="text-white/80 text-sm">Professional fire safety engineers designing protection systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center z-10 border border-primary/20 shadow-glow-sm animate-pulse-slow">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary">20+</div>
                    <div className="text-xs text-primary/90">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Focus On Section */}
      <section className="py-20 bg-muted/40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                What We Focus On
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {focusAreas.map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <MotionCard 
                  className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden group h-full"
                  whileHover={{ y: -5 }}
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="mb-2 flex justify-center">
                      {area.icon}
                    </div>
                    <CardTitle className="text-center text-xl text-primary group-hover:scale-105 transition-transform duration-300">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{area.description}</p>
                  </CardContent>
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Domains Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                Project Domains
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {projectTypes.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
              >
                <div 
                  className="glass-card-premium p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 text-center group hover:border-primary/30 h-full flex flex-col items-center justify-center"
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Team Members Section */}
      <section className="py-20 bg-muted/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                Our Key Team Members
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <p className="text-white font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-primary font-bold mb-1 group-hover:translate-x-1 transition-transform duration-300">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.qualification}</p>
                    {member.experience && (
                      <p className="text-xs text-muted-foreground mt-2">
                        <span className="inline-flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 
                          {member.experience} experience
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <div className="glass-card p-6 rounded-xl">
                <p className="text-lg text-foreground">
                  Additionally, our team includes:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                  {[
                    "Draft Assistants", 
                    "Draftsmen", 
                    "Site Supervisors", 
                    "Foremen", 
                    "Fitters", 
                    "Alarm Technicians"
                  ].map((role, index) => (
                    <div key={index} className="flex items-center p-2">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              <span className="relative inline-block">
                Our Certifications
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
              </span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection delay={0.1}>
              <div className="glass-card-premium p-8 rounded-3xl hover:shadow-glow-sm transition-all duration-500 h-full">
                <h3 className="text-xl font-semibold mb-6 text-primary">Official Registrations</h3>
                <ul className="space-y-6">
                  {[
                    "Government of India & Telangana GST Registration",
                    "Shops & Establishments Act (Telangana)",
                    "Labour Department (Telangana)"
                  ].map((cert, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="mt-1">
                        <BadgeCheck className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-lg text-foreground/90">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="glass-card-premium p-8 rounded-3xl hover:shadow-glow-sm transition-all duration-500 h-full">
                <h3 className="text-xl font-semibold mb-6 text-primary">Our Perfect Track Record</h3>
                <div className="space-y-6">
                  {[
                    "No project left incomplete",
                    "No confrontation or litigation to date",
                    "100% client satisfaction rate",
                    "On-time project delivery"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-lg text-foreground/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.3}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center p-1 rounded-full bg-primary/10 mb-4">
                <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  BUILDING A SAFER TOMORROW
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Ready to work with Crossfire?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our team today to discuss your fire safety requirements and get a comprehensive solution tailored to your needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  Contact Us Today
                </button>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <PhoneButton />
    </div>
  );
};

export default About;