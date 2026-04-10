import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Building2, 
  Users, 
  Handshake,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Advisory', href: '#advisory' },
    { name: 'Buyers', href: '#buyers' },
    { name: 'Sellers', href: '#sellers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-abode-cream/90 backdrop-blur-md py-4 border-b border-abode-ink/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2">
          <span className="text-abode-accent">Abode</span>
          <span className="font-medium opacity-80">Collective</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.15em] font-semibold hover:text-abode-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-abode-accent text-white rounded-full text-xs uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-abode-accent/20 transition-all duration-300"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-abode-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-abode-cream border-b border-abode-ink/10 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-serif font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-abode-accent font-bold mb-6">
              A Real Estate Partner & Advisor
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-8">
              A modern approach to <br />
              <span className="text-abode-accent italic">property</span> and <span className="text-abode-accent italic">partnership.</span>
            </h1>
            <p className="text-lg text-abode-ink/60 font-medium leading-relaxed mb-10 max-w-md">
              Abode Collective is a real estate service designed to empower buyers, sellers, and professionals through expert guidance.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#advisory" 
                className="px-8 py-4 bg-abode-ink text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-abode-accent transition-all duration-300 flex items-center gap-3 group"
              >
                Our Approach
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative p-4 md:p-8 bg-white rounded-[2rem] shadow-2xl shadow-abode-ink/5 border border-abode-ink/5">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
                  alt="Luxury modern home" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-abode-accent text-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-xs uppercase tracking-widest font-bold mb-2">Trust By</p>
                <p className="text-2xl font-serif font-bold leading-tight">Sellers, Buyers and Agents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AdvisorySection = () => {
  return (
    <section id="advisory" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] relative z-10 p-4 bg-abode-cream rounded-[2rem]"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior design" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-abode-accent/5 rounded-full blur-3xl -z-0"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              A Modern <br />
              <span className="text-abode-accent italic">Real Estate Service</span>
            </h2>
            <p className="text-lg text-abode-ink/60 font-medium leading-relaxed mb-8">
              We believe the real estate journey should be defined by transparency and expert guidance. Abode Collective operates as a trusted partner where information flows freely and connections are forged with integrity.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-abode-accent/10 flex items-center justify-center shrink-0">
                  <Handshake className="text-abode-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold mb-2">Strategic Advisory</h4>
                  <p className="text-sm text-abode-ink/60 font-medium">We provide neutral, expert advice to ensure all parties reach an equitable and successful outcome.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-abode-accent/10 flex items-center justify-center shrink-0">
                  <Users className="text-abode-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold mb-2">Curated Network</h4>
                  <p className="text-sm text-abode-ink/60 font-medium">Access a hand-picked collective of agents who share our commitment to ethical service.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-abode-accent/10 flex items-center justify-center shrink-0">
                  <Building2 className="text-abode-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold mb-2">Resource Hub</h4>
                  <p className="text-sm text-abode-ink/60 font-medium">Comprehensive data and preparation tools to empower your next move, whether buying or selling.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-32 bg-abode-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-abode-accent font-bold mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expertise for Every Step</h2>
          <p className="text-abode-ink/60 font-medium">Whether you are preparing to acquire your first property or parting with a cherished estate, we provide the framework for success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buyers */}
          <motion.div 
            id="buyers"
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-abode-ink/5 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-6">For Buyers</h3>
              <p className="text-abode-ink/60 font-medium mb-8 leading-relaxed">
                Connect with the right agents, gather essential market intelligence, and prepare your profile for a seamless acquisition.
              </p>
              <ul className="space-y-4 mb-10">
                {['Agent Matching', 'Market Analysis', 'Purchase Readiness', 'Strategic Advice'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-abode-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 group-hover:text-abode-accent transition-colors">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
              <Users size={300} />
            </div>
          </motion.div>

          {/* Sellers */}
          <motion.div 
            id="sellers"
            whileHover={{ y: -10 }}
            className="bg-abode-ink text-white p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-6">For Sellers</h3>
              <p className="text-white/60 font-medium mb-8 leading-relaxed">
                Direct access to qualified buyers and elite representation. We help you position your property for maximum impact.
              </p>
              <ul className="space-y-4 mb-10">
                {['Direct Buyer Access', 'Elite Representation', 'Strategic Positioning', 'Closing Advisory'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-abode-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 group-hover:text-abode-accent transition-colors">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
              <Building2 size={300} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-abode-accent font-bold mb-6 block">Inquire</span>
            <h2 className="text-5xl font-serif font-bold mb-8">Begin Your <br /><span className="text-abode-accent italic">Partnership</span></h2>
            <p className="text-lg text-abode-ink/60 font-medium mb-12 leading-relaxed">
              We invite you to reach out for a confidential consultation. Our team is dedicated to providing the clarity and connection you deserve.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-abode-accent/5 flex items-center justify-center">
                  <MapPin size={18} className="text-abode-accent" />
                </div>
                <span className="text-sm font-medium">Toronto, Ontario</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-abode-accent/5 flex items-center justify-center">
                  <Mail size={18} className="text-abode-accent" />
                </div>
                <span className="text-sm font-medium">concierge@abodecollective.ca</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="w-10 h-10 rounded-xl border border-abode-ink/10 flex items-center justify-center hover:bg-abode-accent hover:text-white hover:border-abode-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-abode-ink/10 flex items-center justify-center hover:bg-abode-accent hover:text-white hover:border-abode-accent transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-abode-cream p-10 md:p-16 rounded-[2.5rem] border border-abode-ink/5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">First Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-abode-ink/10 py-2 focus:border-abode-accent outline-none transition-colors font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Last Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-abode-ink/10 py-2 focus:border-abode-accent outline-none transition-colors font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border-b border-abode-ink/10 py-2 focus:border-abode-accent outline-none transition-colors font-medium" />
                  </div>
                  <div className="space-y-2 mb-10">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Message</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b border-abode-ink/10 py-2 focus:border-abode-accent outline-none transition-colors font-medium resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-abode-accent text-white rounded-full text-xs uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-abode-accent/20 transition-all duration-300">
                    Send Inquiry
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-abode-cream p-16 rounded-[2.5rem] text-center flex flex-col items-center justify-center min-h-[500px] border border-abode-ink/5"
                >
                  <div className="w-20 h-20 rounded-2xl bg-abode-accent/10 flex items-center justify-center mb-8">
                    <CheckCircle2 size={40} className="text-abode-accent" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4">Inquiry Received</h3>
                  <p className="text-abode-ink/60 font-medium max-w-xs mx-auto">
                    Thank you for reaching out. A member of our collective will contact you shortly to begin our partnership.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-xs uppercase tracking-widest font-bold border-b border-abode-ink/20 pb-1 hover:text-abode-accent hover:border-abode-accent transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-abode-ink text-white/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Abode Collective</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Partner & Advisor</p>
          </div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Ethical Code</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Abode Collective. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-abode-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AdvisorySection />
        <Services />
        
        {/* Visual Break / Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] p-4 bg-abode-cream">
                <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800" alt="Luxury living" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] p-4 bg-abode-cream md:translate-y-12">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" alt="Modern kitchen" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] p-4 bg-abode-cream">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Estate exterior" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
