import { Calendar as CalendarIcon, Compass } from "lucide-react";

export default function Header() {
  // Current Gregorian date: 2026-06-07T13:14:37Z
  const formatDate = () => {
    return new Date("2026-06-07T13:14:37Z").toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert Gregorian June 7, 2026 to Hijri equivalent (estimated 21-22 Zulhijjah 1447 H)
  const getHijriDate = () => {
    return "21 Zulhijjah 1447 H";
  };

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

          {/* Right Header Panel */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Islamic Dates */}
            <div className="flex flex-col items-end text-right pr-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4A3E3E]">
                <CalendarIcon className="w-3.5 h-3.5 text-[#7D8F69]" />
                <span>{formatDate()}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-[#7D8F69] font-serif font-semibold tracking-wide mt-0.5">
                {getHijriDate()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
