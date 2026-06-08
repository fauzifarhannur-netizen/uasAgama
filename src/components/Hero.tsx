import { motion } from "motion/react";
import { BookOpen, Quote } from "lucide-react";
import mosqueImage from "../../assets/Masjid_UNS.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#4A3E3E] rounded-3xl shrink-0 my-6 shadow-xl border border-[#4A3E3E]">
      {/* Background Mosque Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mosqueImage}
          alt="Majestic Mosque Background"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Natural gradient overlay for elegant natural lighting */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4A3E3E] via-[#7D8F69]/70 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3E]/95 via-[#4A3E3E]/35 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 sm:py-20 text-center flex flex-col items-center">
        {/* Small greeting label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7D8F69]/20 text-[#E8E2D6] text-xs font-mono mb-4 border border-[#7D8F69]/30 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7D8F69] animate-pulse" />
          <span>Assalamu'alaikum Warahmatullahi Wabarakatuh</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FDFBF7] tracking-tight leading-tight"
        >
          Membentuk Karakter Mulia Berlandaskan <span className="text-[#E8E2D6] font-sans italic">Al-Qur'an & Hadis</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base text-[#FDFBF7]/90 leading-relaxed max-w-2xl font-sans"
        >
          Selamat datang di platform interaktif peningkatan akhlak harian. Pelajari adab pergaulan, etika sehari-hari, tanggung jawab pribadi, dan kepedulian lingkungan secara mendalam, lengkap dengan dalil syar'i orisinal.
        </motion.p>

        {/* Action Button & Stats Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#7D8F69] hover:bg-[#5E6F4A] text-white font-sans font-bold rounded-xl shadow-lg shadow-[#7D8F69]/20 active:scale-95 transition-all text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer border border-white/10"
          >
            <BookOpen className="w-4 h-4" />
            <span>Mulai Belajar Sekarang</span>
          </button>
        </motion.div>

        {/* Core Pillars Indicator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md"
        >
          <div className="flex flex-col items-center p-3 text-center">
            <span className="text-[10px] font-mono text-[#E8E2D6] font-semibold tracking-wider">Materi 1</span>
            <span className="text-xs text-white font-semibold font-sans mt-1">Akhlak Pertemanan</span>
          </div>

          <div className="flex flex-col items-center p-3 text-center border-l border-white/10">
            <span className="text-[10px] font-mono text-[#E8E2D6] font-semibold tracking-wider">Materi 2</span>
            <span className="text-xs text-white font-semibold font-sans mt-1">Adab Harian Sunah</span>
          </div>

          <div className="flex flex-col items-center p-3 text-center border-l border-white/10 lg:pl-4">
            <span className="text-[10px] font-mono text-[#E8E2D6] font-semibold tracking-wider">Materi 3</span>
            <span className="text-xs text-white font-semibold font-sans mt-1">Karakter Diri</span>
          </div>

          <div className="flex flex-col items-center p-3 text-center border-l border-white/10 lg:pl-4">
            <span className="text-[10px] font-mono text-[#E8E2D6] font-semibold tracking-wider">Materi 4</span>
            <span className="text-xs text-white font-semibold font-sans mt-1">Peduli Lingkungan</span>
          </div>
        </motion.div>

        {/* Hadith Verse Quote of the Day */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-center max-w-xl hidden md:flex items-center gap-3 bg-[#4A3E3E]/60 p-4 rounded-xl border border-[#7D8F69]/20"
        >
          <Quote className="w-5 h-5 text-[#7D8F69] shrink-0 self-start mt-0.5" />
          <p className="text-[#FDFBF7]/90 text-xs italic font-serif leading-relaxed text-left">
            "Sesungguhnya aku (Muhammad) diutus tidak lain hanyalah untuk menyempurnakan kebaikan akhlak."
            <span className="block text-[10px] text-[#E8E2D6] font-mono mt-1 font-semibold not-italic">— HR. Ahmad dan Al-Baihaqi</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
