import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Award, Crown, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  // Let the customer select half or full portion size if applicable
  const hasMultipleSizes = item.halfPrice !== undefined && item.fullPrice !== undefined;
  const [selectedSize, setSelectedSize] = useState<'half' | 'full'>('full');
  
  // Hover tilt coordinates
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Calculate tilt angles (max 12 deg tilt)
    setRotateX(-y / (box.height / 2) * 12);
    setRotateY(x / (box.width / 2) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const currentPrice = hasMultipleSizes 
    ? (selectedSize === 'half' ? item.halfPrice! : item.fullPrice!) 
    : item.price;

  const currentNameWithPortion = hasMultipleSizes 
    ? `${item.name} (${selectedSize === 'half' ? 'Half Portion' : 'Full Portion'})` 
    : item.name;

  const handleOrder = () => {
    // Open WhatsApp with prefilled message
    const orderText = `Hello, I want to order ${currentNameWithPortion} for Rs. ${currentPrice} from Picking Chinese Food.`;
    const whatsappUrl = `https://wa.me/923338181815?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col rounded-none border border-zinc-800 bg-[#0c0c0e] p-4 shadow-2xl transition-all duration-300 hover:border-[#D4AF37] hover:bg-black hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden cursor-pointer"
    >
      {/* 3D glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>

      {/* Food Image Container */}
      <div className="relative h-48 w-full overflow-hidden rounded-none bg-[#050505] border border-zinc-900">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 select-none">
          {item.isBestSeller && (
            <span className="flex items-center gap-1 rounded-none bg-red-600 px-2.5 py-1 text-[9px] font-black tracking-[0.2em] text-white uppercase shadow-lg border border-red-500">
              <Crown className="h-2.5 w-2.5 fill-white" /> BEST SELLER
            </span>
          )}
          {item.isChefRecommended && (
            <span className="flex items-center gap-1 rounded-none bg-[#D4AF37] px-2.5 py-1 text-[9px] font-black tracking-[0.2em] text-black uppercase shadow-lg border border-[#FFD700]/20">
              <Award className="h-2.5 w-2.5" /> RECOMMENDED
            </span>
          )}
        </div>

        {/* Short Quantity info Badge */}
        {item.quantityInfo && (
          <span className="absolute bottom-3 right-3 rounded-none bg-black border border-zinc-800 px-2.5 py-1 font-mono text-[9px] font-bold text-[#D4AF37] tracking-wider uppercase">
            {item.quantityInfo}
          </span>
        )}
      </div>

      {/* Content Block */}
      <div className="flex-1 flex flex-col pt-5 pb-2">
        <h3 className="font-sans text-base font-black uppercase tracking-tight text-white group-hover:text-[#D4AF37] transition duration-300 leading-tight">
          {item.name}
        </h3>
        
        <p className="mt-2 text-[11px] leading-relaxed text-zinc-400 font-sans line-clamp-2">
          {item.description}
        </p>

        {/* Portion Selector for half/full dishes */}
        {hasMultipleSizes && (
          <div className="mt-4 flex items-center justify-between rounded-none bg-black p-1 border border-zinc-800">
            <button
              onClick={() => setSelectedSize('half')}
              className={`flex-1 rounded-none py-1.5 text-[9px] font-black tracking-[0.15em] uppercase transition ${
                selectedSize === 'half'
                  ? 'bg-[#D4AF37] text-black font-extrabold'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              Half
            </button>
            <button
              onClick={() => setSelectedSize('full')}
              className={`flex-1 rounded-none py-1.5 text-[9px] font-black tracking-[0.15em] uppercase transition ${
                selectedSize === 'full'
                  ? 'bg-[#D4AF37] text-black font-extrabold'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              Full
            </button>
          </div>
        )}

        {/* Price & Order CTA Row */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-zinc-900">
          <div>
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500 block font-bold">
              INVESTMENT
            </span>
            <span className="text-base font-sans font-black tracking-tight text-[#D4AF37]">
              Rs. {currentPrice.toLocaleString()}
            </span>
          </div>

          <button
            onClick={handleOrder}
            className="flex items-center gap-1.5 rounded-none bg-white text-black px-4 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:scale-105 active:scale-95 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
          >
            ORDER
          </button>
        </div>
      </div>
    </motion.div>
  );
}
