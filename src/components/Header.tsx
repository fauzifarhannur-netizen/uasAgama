import { Compass } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E2D6] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 bg-[#7D8F69] rounded-xl text-white shadow-md shadow-[#7D8F69]/20">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-serif font-bold text-[#4A3E3E] tracking-tight flex items-center gap-1.5">
                Hikmah <span className="text-[#7D8F69] font-sans font-semibold text-[10px] sm:text-xs bg-[#E8E2D6]/45 px-2.5 py-0.5 rounded-full border border-[#7D8F69]/10">Adab & Akhlak</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-[#4A3E3E]/70 font-mono hidden sm:block">Pembelajaran Islam Berlandaskan Dalil</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
