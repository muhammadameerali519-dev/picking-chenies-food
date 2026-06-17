import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Compass, 
  Search, 
  Menu as MenuIcon, 
  X, 
  Star, 
  Crown, 
  Check, 
  ChevronRight, 
  Info, 
  Flame, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

import { MENU_ITEMS, CATEGORIES, BEST_SELLERS, GALLERY_ITEMS, REVIEWS } from './data';
import MenuCard from './components/MenuCard';
import HeroVisual from './components/HeroVisual';
import ChefDragonChat from './components/ChefDragonChat';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<any | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter items according to search & category
  const filteredMenuItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleScrollToSegment = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const triggerGeneralWhatsAppCall = () => {
    const text = "Hello Picking Chinese Food! I would like to inquiry about booking a table or placing a customized imperial catering order.";
    const url = `https://wa.me/923338181815?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black font-sans leading-normal overflow-hidden">
      
      {/* 1. Sticky Navigation Bar */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-black/95 border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-md' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo brand */}
            <div 
              onClick={() => handleScrollToSegment('home')} 
              className="flex cursor-pointer items-center space-x-4 select-none group"
            >
              <div className="w-10 h-10 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center transition-all duration-500 group-hover:bg-[#D4AF37]/10 group-hover:scale-105">
                <span className="-rotate-45 font-sans font-black text-xs text-[#D4AF37] tracking-tighter">PCF</span>
              </div>
              <div>
                <span className="font-sans text-lg font-black tracking-tighter uppercase leading-none block text-white">
                  PICKING CHINESE
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-mono leading-none mt-1.5 block">
                  Food Experience
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Menu', id: 'menu' },
                { label: 'Best Sellers', id: 'best-sellers' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Location & Contact', id: 'location-contact' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollToSegment(link.id)}
                  className="font-sans text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 hover:text-[#D4AF37] transition duration-300 relative py-1 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:+923338181815"
                className="font-mono text-[11px] font-bold text-zinc-400 hover:text-white transition flex items-center gap-1.5"
              >
                <Phone className="h-3 w-3 text-[#D4AF37]" /> +92 333 8181815
              </a>
              <button
                onClick={triggerGeneralWhatsAppCall}
                className="rounded-none bg-white text-black hover:bg-[#D4AF37] px-6 py-3 text-[10px] font-black tracking-[0.2em] uppercase transition duration-300 cursor-pointer"
              >
                Call Concierge
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-none bg-[#0c0c0e] border border-zinc-800 p-2.5 text-[#D4AF37] hover:bg-black transition focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-35 bg-[#050505]/98 border-b border-zinc-800 p-6 shadow-2xl backdrop-blur-xl md:hidden flex flex-col space-y-4"
          >
            {[
              { label: 'Home', id: 'home' },
              { label: 'Menu', id: 'menu' },
              { label: 'Best Sellers', id: 'best-sellers' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Reviews', id: 'reviews' },
              { label: 'Location & Contact', id: 'location-contact' }
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleScrollToSegment(link.id)}
                className="w-full text-left font-sans text-xs font-black tracking-[0.2em] uppercase text-zinc-400 py-3 border-b border-zinc-900 hover:text-[#D4AF37] transition"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <a 
                href="tel:+923338181815"
                className="font-mono text-xs text-[#D4AF37] font-bold flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5" /> +92 333 8181815
              </a>
              <button
                onClick={triggerGeneralWhatsAppCall}
                className="w-full text-center rounded-none bg-white py-3.5 text-[10px] font-black tracking-[0.2em] uppercase text-black hover:bg-[#D4AF37] transition"
              >
                WhatsApp Inquiries
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full-Screen luxury animated Hero Section */}
      <header 
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/src/assets/images/hero_branding_banner_1781656222095.jpg')` }}
      >
        {/* Dark Vignette Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/93 to-black/80 z-0"></div>

        {/* Particle Overlay */}
        <div className="absolute inset-0 select-none pointer-events-none opacity-30 z-0">
          <div className="absolute top-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/15 blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-[120px]"></div>
          
          {/* Gold Particles Background Overlay as modeled on the theme design */}
          <div className="absolute top-20 left-40 w-1 h-1 bg-[#D4AF37] rounded-full"></div>
          <div className="absolute top-60 right-80 w-2 h-2 bg-[#FFD700] rounded-full blur-[1px]"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[2px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column Text branding */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left"
            >
              {/* Top ambient banner chip */}
              <div className="inline-flex items-center space-x-2 rounded-none border border-zinc-800 bg-[#0c0c0e]/80 px-4 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#D4AF37] uppercase py-2 px-4">
                <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-spin-slow" />
                <span>PICKING CHINESE FOOD – AUTHENTIC taste near you</span>
              </div>

              {/* Huge typography header */}
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] block">
                  ESTABLISHED IN GUJRANWALA
                </span>
                <h1 className="text-[54px] sm:text-[76px] md:text-[88px] leading-[0.85] font-black uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-700">
                  Picking<br/>Chinese<br/><span className="text-white">Food.</span>
                </h1>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-black">
                  Authentic Taste Near You
                </p>
              </div>

              {/* Delicious narrative */}
              <p className="text-xs sm:text-xs md:text-sm text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
                Indulge in a multi-million-dollar atmosphere where culinary mastery meets imperial tradition. Every plate is slow-cooked dynamically using authentic Wok tosses, imported spices, and absolute five-star royalty ingredients in Model Town, Gujranwala.
              </p>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => handleScrollToSegment('menu')}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-none bg-[#D4AF37] text-black px-8 py-4.5 text-[11px] font-black tracking-[0.2em] uppercase shadow-[0_4px_30px_rgba(212,175,55,0.25)] hover:bg-[#FFD700] hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer"
                >
                  Order Now <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleScrollToSegment('menu')}
                  className="w-full sm:w-auto rounded-none border border-zinc-700 bg-transparent px-8 py-4.5 text-[11px] font-black tracking-[0.2em] uppercase text-white hover:border-[#D4AF37] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>

              {/* Subtle visual specs */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-zinc-900 text-center lg:text-left">
                {[
                  { value: '100%', label: 'Halal Certified' },
                  { value: 'Wok Master', label: 'Elegance Cuisine' },
                  { value: 'Model Town', label: 'Near Pizza Hut' }
                ].map((spec, idx) => (
                  <div key={idx}>
                    <p className="font-sans text-xs sm:text-sm font-black tracking-widest text-[#D4AF37] uppercase">{spec.value}</p>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase mt-1">{spec.label}</p>
                  </div>
                ))}
              </div>

              {/* Founder Patron Tribute */}
              <div className="pt-6 border-t border-zinc-900 flex items-center justify-center lg:justify-start space-x-2.5">
                <Crown className="h-4 w-4 text-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-400 uppercase">
                  Owned & Curated By Patron: <span className="text-white font-sans font-black tracking-normal">KASHIF MALIK</span>
                </span>
              </div>
            </motion.div>

            {/* Right Column Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="w-full flex justify-center"
            >
              <HeroVisual />
            </motion.div>

          </div>
        </div>
      </header>

      {/* 3. Best Seller Section with Carousel/Grid layout */}
      <section 
        id="best-sellers"
        className="relative py-28 bg-[#050505] overflow-hidden border-t border-zinc-900"
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] block">
              CHEF'S MASTERPIECES
            </span>
            <h2 className="text-[44px] sm:text-[60px] leading-tight font-black uppercase tracking-tighter italic text-white">
              OUR BEST SELLERS
            </h2>
            <div className="h-[2px] w-16 bg-[#D4AF37] mx-auto"></div>
            <p className="text-xs text-zinc-400 tracking-wider font-medium leading-relaxed">
              These six culinary landmarks represent our highest gourmet prestige. Voted favorites by Gujranwala’s finest food critiques.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BEST_SELLERS.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-none border border-zinc-800 bg-[#0c0c0e] hover:bg-black hover:border-[#D4AF37] p-5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col"
              >
                {/* Visual */}
                <div className="relative h-56 w-full rounded-none overflow-hidden bg-black mb-5 border border-zinc-900 select-none">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
                  
                  {/* Glowing recommended tag */}
                  <span className="absolute top-3 left-3 rounded-none bg-[#D4AF37] px-3 py-1 text-[9px] font-black tracking-[0.2em] text-black flex items-center gap-1 shadow-lg">
                    <Star className="h-3 w-3 fill-black" /> BEST SELLER
                  </span>

                  <span className="absolute bottom-3 right-3 text-[10px] font-mono font-black text-[#D4AF37] tracking-[0.15em] uppercase block">
                    {dish.category}
                  </span>
                </div>

                {/* Info Text */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-sans text-lg font-black tracking-tight uppercase text-white group-hover:text-[#D4AF37] transition duration-200">
                    {dish.name}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-zinc-400 mt-2 font-sans line-clamp-3">
                    {dish.description}
                  </p>
                  
                  {/* Price info & Order button */}
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-zinc-900">
                    <div>
                      <span className="text-[9px] font-mono tracking-[0.2em] text-zinc-500 block font-bold">PRICING</span>
                      <span className="text-base font-sans font-black tracking-tight text-[#D4AF37]">{dish.price}</span>
                    </div>
                    <button
                      onClick={() => {
                        const message = `Hello, I want to order the best-seller: ${dish.name} from Picking Chinese Food.`;
                        window.open(`https://wa.me/923338181815?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="rounded-none bg-white font-sans text-[10px] font-black tracking-[0.2em] uppercase text-black hover:bg-[#D4AF37] hover:scale-105 active:scale-95 py-2.5 px-5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      ORDER
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Luxury Multi-Tab Live Menu Category Experience */}
      <section 
        id="menu"
        className="relative py-28 bg-[#050505]"
      >
        <div id="glow-menu" className="absolute top-[20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[200px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] block">
                GOURMET SELECTION
              </span>
              <h2 className="text-[44px] sm:text-[60px] leading-tight font-black uppercase tracking-tighter italic text-white mt-2">
                EXQUISITE MENU
              </h2>
              <p className="text-zinc-400 text-xs italic mt-2">
                Every flavor tells a story of prestige, tradition, and Wok-tossing grandeur.
              </p>
            </div>

            {/* In-Menu Instant Search Bar */}
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search favorite Chinese dishes..."
                className="w-full rounded-none border border-zinc-800 bg-[#0c0c0e] py-4 pl-12 pr-5 text-[11px] text-white placeholder-zinc-650 font-sans tracking-widest uppercase focus:border-[#D4AF37] focus:outline-none focus:bg-black transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {/* Premium Category Navigation Selectors */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 border-b border-zinc-900 scrollbar-none select-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery(''); // clear search when tab switches
                }}
                className={`flex items-center space-x-2 shrink-0 rounded-none py-3 px-6 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black border-transparent shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                    : 'bg-[#0c0c0e] border-zinc-800 text-zinc-400 hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Real-time Loading transition of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMenuItems.length > 0 ? (
                filteredMenuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center select-none bg-zinc-950/20 rounded-none border border-dashed border-zinc-800">
                  <Info className="h-10 w-10 text-zinc-500 mx-auto mb-3" />
                  <p className="font-sans text-xs tracking-widest text-[#D4AF37] uppercase font-black">No Exquisite Dishes Found</p>
                  <p className="text-xs text-zinc-500 mt-1.5 font-sans leading-relaxed">
                    We apologize, guest. We couldn't find items matching "{searchQuery}". Try browsing other luxury tabs!
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA under Menu */}
          <div className="mt-16 text-center p-8 rounded-none border border-zinc-800 bg-[#0c0c0e]">
            <p className="text-xs tracking-wider text-zinc-400">
              "Looking to serve a larger party? We design dynamic catering combinations and custom buffet setups in Gujranwala."
            </p>
            <p className="text-[11px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-black mt-3">
              SPEAK WITH OUR EXECUTIVE CONCIERGE AT +92 333 8181815
            </p>
          </div>

        </div>
      </section>

      {/* 5. Animated Gallery Section with Popups */}
      <section 
        id="gallery"
        className="relative py-28 bg-[#050505] overflow-hidden border-t border-zinc-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] block">
              GASTRONOMIC CANVAS
            </span>
            <h2 className="text-[44px] sm:text-[60px] leading-tight font-black uppercase tracking-tighter italic text-white">
              GASTRONOMIC GALLERY
            </h2>
            <div className="h-[2px] w-16 bg-[#D4AF37] mx-auto"></div>
            <p className="text-xs text-zinc-400 tracking-wider">
              Immerse yourself visually in our golden stir-fries, slow-rendered broths, and crispy sea delights.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedGalleryImg(item)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative h-48 sm:h-64 rounded-none overflow-hidden cursor-zoom-in border border-zinc-800 bg-black shadow-lg select-none"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
                
                {/* Micro Ambient Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-black">{item.category}</span>
                  <p className="text-xs font-sans tracking-tight text-white font-black uppercase mt-1.5">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Gallery Image Inspector Popup */}
        <AnimatePresence>
          {selectedGalleryImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGalleryImg(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full rounded-none overflow-hidden border border-[#D4AF37] bg-black shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedGalleryImg(null)}
                  className="absolute top-4 right-4 z-10 rounded-none bg-black border border-zinc-800 p-2 text-zinc-400 hover:text-white transition"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="h-[350px] sm:h-[450px]">
                  <img 
                    src={selectedGalleryImg.image} 
                    alt={selectedGalleryImg.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="bg-[#0c0c0e] p-6 border-t border-zinc-900">
                  <span className="font-sans text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-black leading-none block">
                    {selectedGalleryImg.category}
                  </span>
                  <h3 className="font-sans font-black text-lg text-white uppercase mt-2">
                    {selectedGalleryImg.title}
                  </h3>
                  <p className="text-xs text-zinc-450 mt-2 font-sans leading-relaxed">
                    Exclusively presented and dynamically plated inside the Picking Chinese Food dining parlor, Gujranwala.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. Guest Reviews Section */}
      <section 
        id="reviews"
        className="relative py-24 bg-[#050505] overflow-hidden border-t border-zinc-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section banner */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] block">
              NOBLE WORDS
            </span>
            <h2 className="text-[44px] sm:text-[60px] leading-tight font-black uppercase tracking-tighter italic text-white text-shadow-gold">
              HONORED REVIEWS
            </h2>
            <div className="h-[2px] w-16 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-none border border-zinc-800 bg-[#0c0c0e] p-6 flex flex-col justify-between"
              >
                {/* Decorative quote marks */}
                <div className="absolute top-4 right-6 font-serif text-6xl text-zinc-900 leading-none select-none">“</div>
                
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed italic z-10 relative">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Profile card below */}
                <div className="mt-6 flex items-center space-x-3 pt-4 border-t border-zinc-900/40">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-800">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-sans text-[12px] font-black tracking-[0.1em] text-[#D4AF37] uppercase">
                      {rev.name}
                    </h4>
                    <p className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5">
                      Verified Guest &nbsp;|&nbsp; {rev.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Premium Location, Map, & Hours Section */}
      <section
        id="location-contact"
        className="relative py-28 bg-[#050505] overflow-hidden border-t border-zinc-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            
            {/* Left Block: Information Card */}
            <div className="space-y-6">
              <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] block">IMPERIAL LOCATION</span>
              <h2 className="text-[44px] sm:text-[60px] leading-tight font-black uppercase tracking-tighter italic text-white leading-none">
                VISIT THE PARLOR
              </h2>
              
              <div className="h-[2px] w-20 bg-[#D4AF37]"></div>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Step away from the everyday and experience fine Asian dining in the heart of Model Town Market. Framed by comfortable classic spacing, gold lighting, and premium service.
              </p>

              {/* Physical details block */}
              <div className="space-y-4">
                
                {/* 1. Address Line */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-zinc-800 bg-[#0c0c0e] p-2 text-[#D4AF37]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-black tracking-[0.1em] text-white uppercase">Address</p>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-sans">
                      Near Pizza Hut, Model Town Market, Gujranwala, Pakistan
                    </p>
                    <button
                      onClick={() => {
                        window.open("https://maps.google.com/?q=Pizza+Hut+Model+Town+Market+Gujranwala+Pakistan", "_blank");
                      }}
                      className="mt-2 text-[10px] font-mono tracking-widest text-[#D4AF37] hover:underline uppercase flex items-center gap-1 cursor-pointer"
                    >
                      Get Route Directions <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* 2. Hotline Call / WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-zinc-800 bg-[#0c0c0e] p-2 text-[#D4AF37]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-black tracking-[0.1em] text-white uppercase">Reservation & Direct Line</p>
                    <p className="text-xs text-zinc-400 mt-1 font-mono">
                      +92 333 8181815 &nbsp;(WhatsApp Enabled)
                    </p>
                  </div>
                </div>

                {/* 3. Operational Timeline */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-zinc-800 bg-[#0c0c0e] p-2 text-[#D4AF37]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-black tracking-[0.1em] text-white uppercase">Royal Dining Hours</p>
                    <div className="text-[11px] grid grid-cols-2 gap-x-6 gap-y-1 text-zinc-400 mt-1.5 font-mono">
                      <span>Mon – Thu:</span> <span>12:00 PM – 11:30 PM</span>
                      <span>Fri – Sun:</span> <span>12:00 PM – 12:30 AM</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Block: Elegant Styled Map Vector Card */}
            <div className="relative rounded-none overflow-hidden border border-zinc-800 bg-[#0c0c0e] p-6 flex flex-col justify-center select-none shadow-2xl h-[350px]">
              
              {/* Gold Grid background pattern layer wrapper */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-none border border-[#D4AF37] p-[2px] shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-none bg-black">
                    <Compass className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                </div>

                <h3 className="font-sans font-black text-white text-base tracking-[0.2em] uppercase">
                  PICKING CHINESE ROADMAP
                </h3>

                <p className="text-xs text-zinc-400 font-sans max-w-sm mx-auto leading-relaxed">
                  We are situated at the premier culinary avenue of Model Town Market, Gujranwala, right near the Pizza Hut landmark. Safe parking and executive valet services available.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      window.open("https://maps.google.com/?q=Pizza+Hut+Model+Town+Market+Gujranwala+Pakistan", "_blank");
                    }}
                    className="rounded-none bg-white px-6 py-3 text-[10px] font-black tracking-[0.2em] uppercase text-black hover:bg-[#D4AF37] transition duration-300 cursor-pointer"
                  >
                    Launch Google Maps
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Floating Pulse WhatsApp Ordering Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          id="whatsapp-floater"
          onClick={() => {
            const defaultMsg = "Hello, I am visiting your luxury website and would love to place a gourmet food order!";
            window.open(`https://wa.me/923338181815?text=${encodeURIComponent(defaultMsg)}`, '_blank');
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-605 shadow-[0_0_20px_rgba(16,185,129,0.5)] border-2 border-emerald-450/30 animate-pulse hover:shadow-[0_0_30px_rgba(16,185,129,0.9)] cursor-pointer"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="h-7 w-7 fill-white font-extrabold"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.424 2.5 1.134 3.473l-.74 2.701 2.76-.723a5.726 5.726 0 0 0 2.613.637l.001-.002c3.182 0 5.767-2.585 5.768-5.766 0-3.18-2.585-5.767-5.768-5.767zm3.326 8.163c-.15.424-.764.764-1.054.814-.28.05-.56.09-.94-.03-.27-.08-.59-.2-.99-.37-1.72-.72-2.82-2.48-2.91-2.59-.09-.12-.72-.96-.72-1.85 0-.89.46-1.33.62-1.51.15-.15.34-.23.51-.23h.36c.12 0 .28-.02.43.32.16.37.56 1.37.61 1.48.05.11.08.24.01.38-.07.13-.15.24-.26.37-.11.12-.22.24-.31.35-.11.12-.23.25-.1.47.13.22.58.96 1.24 1.55.85.76 1.56.99 1.78 1.1.22.11.35.09.48-.05.13-.15.56-.65.71-.87.15-.22.3-.18.5-.11l1.58.74c.2.1.33.24.28.52z" />
          </svg>
        </motion.button>
      </div>

      {/* 9. Chef Dragon AI Executive Chatbot component */}
      <ChefDragonChat />

      {/* 10. Imperial Luxury Footer Block */}
      <footer className="relative bg-black pt-20 pb-10 border-t border-zinc-900 overflow-hidden">
        {/* Decorative ambient rays */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-yellow-550/5 to-transparent pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-zinc-900 pb-16">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
              <h3 className="font-sans text-lg font-black tracking-widest text-[#D4AF37]">
                PICKING CHINESE FOOD
              </h3>
              <div className="space-y-1">
                <p className="font-sans text-xs italic text-zinc-400">
                  "Authentic Taste Near You"
                </p>
                <p className="text-[10px] font-mono tracking-[0.1em] text-zinc-400 uppercase">
                  Owner: <span className="text-[#D4AF37] font-sans font-black">KASHIF MALIK</span>
                </p>
              </div>
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                Experience pristine Chinese specialties and grand Asian fusion cuisine crafted with top-tier culinary devotion. Unforgettable taste and luxury ambiance at Model Town, Gujranwala.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4 text-center md:text-left select-none">
              <h4 className="font-sans text-xs font-black tracking-widest text-white uppercase">Gourmet Directory</h4>
              <ul className="text-xs space-y-2.5 text-zinc-400">
                {[
                  { label: 'Special Starters', id: 'menu' },
                  { label: 'Chef Recommended Soups', id: 'menu' },
                  { label: 'Wok Noodles & Rice', id: 'menu' },
                  { label: 'Premium Best Sellers', id: 'best-sellers' },
                  { label: 'Roadmap & Hours', id: 'location-contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => handleScrollToSegment(item.id)} 
                      className="hover:text-[#D4AF37] transition font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contacts */}
            <div className="space-y-4 text-center md:text-left select-none">
              <h4 className="font-sans text-xs font-black tracking-widest text-white uppercase">Royal Contact</h4>
              <ul className="text-xs space-y-2.5 text-gray-400 font-mono">
                <li className="flex items-center justify-center md:justify-start gap-1.5 font-sans">
                  <MapPin className="h-3 w-3 text-[#D4AF37]" /> Model Town, Gujranwala
                </li>
                <li className="flex items-center justify-center md:justify-start gap-1.5">
                  <Phone className="h-3 w-3 text-emerald-500" /> +92 333 8181815 (WhatsApp)
                </li>
                <li className="flex items-center justify-center md:justify-start gap-1.5">
                  <Clock className="h-3 w-3 text-zinc-500" /> Open Everyday from 12:00 PM
                </li>
              </ul>
            </div>

          </div>

          {/* Golden animated closing statement */}
          <div className="mt-12 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-4 text-[#D4AF37] group"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase font-black animate-pulse">
                "Thank you for choosing Picking Chinese Food. Every bite tells a story."
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
            </motion.div>

            {/* Copyright & credit line */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 border-t border-neutral-900/60 font-mono">
              <p>© 2026 Picking Chinese Food. All Rights Reserved.</p>
              <p className="tracking-widest uppercase">
                Created by <span className="text-gray-300 font-bold">Fast Target Co GT</span>
              </p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
