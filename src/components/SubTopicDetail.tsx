import { useState } from "react";
import * as Icons from "lucide-react";
import { SubTopic, Topic } from "../types";

interface SubTopicDetailProps {
  subTopic: SubTopic;
  parentTopic: Topic;
  onBackToDashboard: () => void;
}

export default function SubTopicDetail({
  subTopic,
  parentTopic,
  onBackToDashboard,
}: SubTopicDetailProps) {
  const SubIcon = (Icons as any)[subTopic.iconName] || Icons.BookOpen;

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const playVerseVoice = () => {
    setIsPlayingAudio(true);
    const utterance = new SpeechSynthesisUtterance(subTopic.quranVerse.textLatin);
    utterance.lang = "id-ID";
    utterance.rate = 0.85;
    utterance.onend = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  const themeColors: Record<string, { bg: string; text: string; ring: string; border: string; bgSoft: string; textDark: string; gradient: string }> = {
    emerald: {
      bg: "bg-[#7D8F69]",
      text: "text-[#7D8F69]",
      ring: "focus:ring-[#7D8F69]",
      border: "border-[#E8E2D6]",
      bgSoft: "bg-[#7D8F69]/10",
      textDark: "text-[#7D8F69]",
      gradient: "from-[#F9F7F2] to-[#7D8F69]/10",
    },
    sky: {
      bg: "bg-[#7D8F69]",
      text: "text-[#4A3E3E]",
      ring: "focus:ring-[#7D8F69]",
      border: "border-[#E8E2D6]",
      bgSoft: "bg-[#E8E2D6]/40",
      textDark: "text-[#4A3E3E]",
      gradient: "from-[#F9F7F2] to-[#E8E2D6]/40",
    },
    amber: {
      bg: "bg-[#C98B75]",
      text: "text-[#C98B75]",
      ring: "focus:ring-[#C98B75]",
      border: "border-[#E8E2D6]",
      bgSoft: "bg-[#C98B75]/10",
      textDark: "text-[#B0705C]",
      gradient: "from-[#F9F7F2] to-[#C98B75]/10",
    },
    teal: {
      bg: "bg-[#8C906B]",
      text: "text-[#8C906B]",
      ring: "focus:ring-[#8C906B]",
      border: "border-[#E8E2D6]",
      bgSoft: "bg-[#8C906B]/10",
      textDark: "text-[#5B5E43]",
      gradient: "from-[#F9F7F2] to-[#8C906B]/10",
    },
  };

  const subConfig = themeColors[parentTopic.colorTheme.primary] || themeColors.emerald;

  return (
    <div className="space-y-8 animate-fade-in text-[#4A3E3E] max-w-4xl mx-auto">
      {/* Navigation & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E2D6]">
        <button
          onClick={onBackToDashboard}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-[#4A3E3E]/70 hover:text-[#7D8F69] transition cursor-pointer self-start group"
        >
          <Icons.ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Kembali ke Halaman Utama</span>
        </button>

        <div className="flex items-center gap-2">
          <span className={`text-[10px] uppercase font-mono tracking-wider font-bold px-3 py-1 rounded-full ${subConfig.bgSoft} ${subConfig.textDark}`}>
            Kategori: {parentTopic.title}
          </span>
        </div>
      </div>

      {/* Main Chapter Title Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${subConfig.gradient} border ${subConfig.border} shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`}>
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-2xl ${subConfig.bg} text-white shadow-md shadow-[#E8E2D6]/40`}>
            <SubIcon className="w-6 h-6 shrink-0" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#4A3E3E] leading-tight">
              {subTopic.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#4A3E3E]/80 font-sans mt-1">
              {subTopic.description}
            </p>
          </div>
        </div>

        <div className="hidden lg:block shrink-0 bg-[#F9F7F2] px-4 py-2 border border-[#E8E2D6] rounded-2xl text-center shadow-xs">
          <span className="text-[10px] text-[#4A3E3E]/60 font-mono block">Status Pembahasan</span>
          <span className="text-xs font-bold text-[#7D8F69] flex items-center gap-1 mt-0.5">
            <Icons.CheckCircle className="w-3.5 h-3.5" /> Berlandaskan Syariat
          </span>
        </div>
      </div>

      {/* Main Material Container */}
      <div className="space-y-8">
        
        {/* Ayat Al-Qur'an (Dalil Quran Card) */}
        <div className="bg-white rounded-3xl border border-[#E8E2D6] shadow-sm overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#7D8F69]" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7D8F69]/10 text-[#7D8F69] font-semibold text-xs border border-[#7D8F69]/20 uppercase tracking-wide">
                <Icons.BookOpen className="w-3.5 h-3.5" /> Dalil Al-Qur'an
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#7D8F69] bg-[#7D8F69]/5 px-3 py-1 rounded-lg border border-[#E8E2D6] shadow-inner">
                {subTopic.quranVerse.reference}
              </span>
            </div>

            {/* Arabic Text */}
            <div className="my-8 text-right font-serif text-2xl sm:text-3xl leading-loose font-medium text-[#4A3E3E] tracking-wide select-all px-4 py-3 bg-[#F9F7F2]/60 rounded-2xl border border-[#E8E2D6]/40">
              {subTopic.quranVerse.textArabic}
            </div>

            {/* Transliteration (Latin reading) */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 bg-[#E8E2D6]/20 rounded-xl border border-[#E8E2D6]/50">
                <button
                  onClick={playVerseVoice}
                  className="p-1.5 rounded-lg bg-[#7D8F69]/10 text-[#7D8F69] hover:bg-[#7D8F69]/20 active:scale-95 transition shrink-0 cursor-pointer"
                  title="Dengarkan cara baca"
                >
                  <Icons.Volume2 className={`w-4 h-4 ${isPlayingAudio ? "animate-bounce" : ""}`} />
                </button>
                <div className="flex-1">
                  <span className="text-[9px] font-mono leading-none px-1.5 py-0.5 bg-[#7D8F69]/10 text-[#7D8F69] rounded mb-1.5 inline-block">Transliterasi</span>
                  <p className="text-xs sm:text-sm text-[#4A3E3E]/90 italic leading-relaxed font-sans mt-0.5">
                    "{subTopic.quranVerse.textLatin}"
                  </p>
                </div>
              </div>

              {/* Indonesian Translation Card */}
              <div className="p-4 sm:p-5 bg-[#F9F7F2] text-[#4A3E3E]/95 text-sm sm:text-base leading-relaxed rounded-2xl border border-[#E8E2D6] font-sans shadow-inner">
                <span className="text-[10px] font-mono font-bold uppercase block text-[#4A3E3E]/55 mb-1">Terjemahan Indonesia:</span>
                "{subTopic.quranVerse.textTranslation}"
              </div>
            </div>
          </div>
        </div>

        {/* Hadist Rasulullah Card (Dalil Hadith Card) */}
        <div className="bg-white rounded-3xl border border-[#E8E2D6] shadow-sm overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C98B75]" />
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C98B75]/10 text-[#B0705C] font-semibold text-xs border border-[#C98B75]/20 uppercase tracking-wide">
                <Icons.Compass className="w-3.5 h-3.5" /> Dalil Hadis Shahih
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#B0705C] bg-[#C98B75]/5 px-3 py-1 rounded-lg border border-[#E8E2D6] shadow-inner">
                {subTopic.hadith.reference}
              </span>
            </div>

            {/* Hadith Arabic */}
            {subTopic.hadith.textArabic && (
              <div className="my-6 text-right font-serif text-xl sm:text-2xl leading-loose font-medium text-[#4A3E3E] px-4 py-3 bg-[#F9F7F2]/60 rounded-2xl border border-[#E8E2D6]/40">
                {subTopic.hadith.textArabic}
              </div>
            )}

            {/* Hadith Translation block */}
            <div className="p-4 sm:p-5 bg-[#F9F7F2] text-[#4A3E3E]/95 text-sm sm:text-base leading-relaxed rounded-2xl border border-[#E8E2D6] font-sans shadow-inner">
              <span className="text-[10px] font-mono font-bold uppercase block text-[#C98B75] mb-1">Sabda Rasulullah SAW:</span>
              "{subTopic.hadith.textTranslation}"
            </div>
          </div>
        </div>

        {/* Educational Key Implementation Guidelines */}
        <div className="bg-white rounded-3xl border border-[#E8E2D6] shadow-sm p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-serif font-bold text-[#4A3E3E] flex items-center gap-2 border-b border-[#E8E2D6]/60 pb-3">
            <Icons.Lightbulb className="w-5 h-5 text-[#7D8F69] shrink-0" />
            <span>Cara Mengamalkan dalam Kehidupan Sehari-hari</span>
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subTopic.keyPoints.map((point, index) => (point && (
              <li key={index} className="flex gap-3 group p-4 rounded-2xl bg-[#F9F7F2]/40 border border-[#E8E2D6]/40 hover:border-[#7D8F69]/30 hover:bg-[#7D8F69]/5 transition">
                <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full ${subConfig.bgSoft} ${subConfig.text} font-mono font-bold text-xs flex items-center justify-center border ${subConfig.border}`}>
                  {index + 1}
                </div>
                <p className="text-sm text-[#4A3E3E]/85 leading-relaxed font-sans group-hover:text-[#4A3E3E] transition-colors">
                  {point}
                </p>
              </li>
            )))}
          </ul>
        </div>

      </div>
    </div>
  );
}
