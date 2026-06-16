import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { Flame, Sparkles } from 'lucide-react';

export default function HeroVisual() {
  const [showBuyNow, setShowBuyNow] = useState(false);
  
  // Mouse hover parallax variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse coordinates to smooth movement ranges
  const moveX = useTransform(mouseX, [-400, 400], [-20, 20]);
  const moveY = useTransform(mouseY, [-400, 400], [-20, 20]);
  const rotatePlate = useTransform(mouseX, [-400, 400], [-15, 15]);

  useEffect(() => {
    // Show premium "BUY NOW" alert/animation after 4 seconds
    const timer = setTimeout(() => {
      setShowBuyNow(true);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Get relative offsets from center of screen
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Handle direct WhatsApp order link for Buy Now trigger
  const handleBuyNowClick = () => {
    const itemName = encodeURIComponent("Divine Special Hinsoy Soup and Szechuan Platter");
    const whatsappUrl = `https://wa.me/923338181815?text=Hello,%20I%20want%20to%20order%20the%20${itemName}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center p-4 min-h-[400px]">
      {/* Cinematic Golden Spotlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[280px] w-[280px] rounded-full bg-[#dfac4c]/15 blur-[120px] lg:h-[400px] lg:w-[400px]"></div>
        <div className="absolute h-[150px] w-[150px] rounded-full bg-yellow-400/10 blur-[90px]"></div>
      </div>

      {/* Parallax Container holding the food elements */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="relative flex h-[350px] w-[350px] items-center justify-center md:h-[450px] md:w-[450px]"
      >
        {/* Halo Golden Aura Ring Behind Plate */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-dashed border-[#dfac4c]/20 p-8"
        >
          <div className="h-full w-full rounded-full border border-[#dfac4c]/10 bg-[radial-gradient(ellipse_at_center,rgba(223,172,76,0.05)_0%,transparent_70%)]"></div>
        </motion.div>

        {/* Dynamic floating golden particle dust */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r from-yellow-300 to-[#dfac4c] animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Steam Effect rising from the dish */}
        <div className="absolute bottom-[35%] z-20 flex w-full justify-center pointer-events-none">
          <div className="relative h-20 w-32">
            <div className="steam-particle absolute bottom-0 left-[20%] h-12 w-1.5 rounded-full bg-white/20 blur-md"></div>
            <div className="steam-particle absolute bottom-0 left-[45%] h-16 w-3 rounded-full bg-white/10 blur-lg" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
            <div className="steam-particle absolute bottom-0 left-[70%] h-10 w-2 rounded-full bg-white/15 blur-md" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }}></div>
          </div>
        </div>

        {/* Majestic 3D Rotating Dish Container */}
        <motion.div
          style={{ rotate: rotatePlate }}
          className="relative z-10 flex h-[260px] w-[260px] items-center justify-center md:h-[360px] md:w-[360px] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-700"
        >
          {/* Inner Golden Rim Shadow Plate */}
          <div className="absolute inset-2 rounded-full bg-black shadow-[inset_0_0_40px_rgba(223,172,76,0.3)]"></div>
          
          <img
            src="/src/assets/images/hero_dish_luxury_1781613399048.jpg"
            alt="Majestic Steaming Chinese Noodle Platter"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // High Quality fine-dining Chinese cuisine fallback plate
              e.currentTarget.src = "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600";
            }}
            className="h-full w-full rounded-full object-cover border-4 border-[#dfac4c] shadow-[0_0_50px_rgba(223,172,76,0.5)] animate-slow-rotate select-none"
          />

          {/* Floating Food Card sliding in */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-4 right-[-40px] md:right-[-60px] z-30 flex items-center space-x-2 rounded-lg border border-[#dfac4c]/30 bg-black/90 p-3 shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#dfac4c] to-yellow-500">
              <Flame className="h-4 w-4 text-black font-extrabold animate-pulse" />
            </div>
            <div>
              <p className="font-display text-[10px] font-bold tracking-widest text-[#dfac4c]">SIGNATURE PLATTER</p>
              <p className="text-[11px] font-medium text-white">Wok master's pick</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Dynamic BUY NOW golden badge sliding in after a few seconds */}
      <AnimatePresence>
        {showBuyNow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-6 z-40"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBuyNowClick}
              className="group flex cursor-pointer items-center space-x-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 px-5 py-2.5 font-sans font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.6)] border border-yellow-400/40 animate-pulse-gold select-none"
            >
              <Sparkles className="h-4 w-4 text-yellow-300 group-hover:animate-spin" />
              <span className="text-xs uppercase tracking-wider font-extrabold text-shadow">Buy Now – Get 10% Royal Discount! ⛩️</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
