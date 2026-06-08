import { useState, useRef } from "react";
import { TOPICS_DATA } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopicCard from "./components/TopicCard";
import SubTopicDetail from "./components/SubTopicDetail";
import * as Icons from "lucide-react";

export default function App() {
  // State hook for active subtopic ID (if null, display dashboard)
  const [activeSubTopicId, setActiveSubTopicId] = useState<string | null>(null);

  // Filter tabs for quick lookup
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");

  // Reference to lesson container for smooth scrolling upon selection
  const lessonViewRef = useRef<HTMLDivElement>(null);

  // Navigate to specific subtopic from home elements
  const navigateToSubTopic = (subTopicId: string) => {
    setActiveSubTopicId(subTopicId);
    setTimeout(() => {
      lessonViewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Quick active subtopic object lookup
  const activeSubTopic = TOPICS_DATA.flatMap((t) => t.subTopics).find(
    (s) => s.id === activeSubTopicId
  );
  const activeParentTopic = TOPICS_DATA.find((t) =>
    t.subTopics.some((s) => s.id === activeSubTopicId)
  );

  // Filter topics and subtopics based on user selections
  const filteredTopics = TOPICS_DATA.filter((topic) => {
    if (selectedCategoryFilter === "all") return true;
    return topic.id === selectedCategoryFilter;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3E3E] font-sans selection:bg-[#7D8F69]/20 selection:text-[#4A3E3E] flex flex-col">
      {/* Dynamic top message announcement bar */}
      <div className="bg-[#4A3E3E] text-[#FDFBF7] text-[11px] sm:text-xs text-center py-2 px-4 font-mono font-medium border-b border-white/5 flex items-center justify-center gap-1.5">
        <Icons.Moon className="w-3 h-3 text-[#E8E2D6] shrink-0" />
        <span>Pelajari Adab & Akhlak Berlandaskan Al-Qur'an & Hadis Shahih secara Mandiri.</span>
      </div>

      {/* Persistent global Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-6">
        
        {/* Render Hero only when browsing main dashboard */}
        {!activeSubTopicId && (
          <Hero onExploreClick={() => {
            const el = document.getElementById("search-focus-id");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }} />
        )}

        {/* Section Target for Scroll Anchoring */}
        <div ref={lessonViewRef} className="scroll-mt-20 shrink-0" />

        {/* If a subtopic is opened, display detail, else show portal grid */}
        {activeSubTopic && activeParentTopic ? (
          <div className="w-full">
            <SubTopicDetail
              subTopic={activeSubTopic}
              parentTopic={activeParentTopic}
              onBackToDashboard={() => setActiveSubTopicId(null)}
            />
          </div>
        ) : (
          /* Landing Dashboard / Educational Catalogue */
          <div className="space-y-6 w-full max-w-7xl mx-auto animate-fade-in">
            
            {/* Filter tools and Search Bar */}
            <div id="search-focus-id" className="bg-white rounded-3xl border border-[#E8E2D6] p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Visual Title */}
              <div className="flex items-center gap-2.5 self-start">
                <div className="w-2.5 h-6 bg-[#7D8F69] rounded-full" />
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#4A3E3E]">Lentera Kajian</h3>
                  <p className="text-[10px] sm:text-xs text-[#4A3E3E]/70 font-sans">Saring materi berdasarkan pilar pilihan untuk memulai membaca</p>
                </div>
              </div>

              {/* Filter pill containers */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button
                  onClick={() => setSelectedCategoryFilter("all")}
                  className={`px-3 py-1.5 rounded-xl font-sans text-xs font-semibold tracking-wide transition select-none cursor-pointer ${
                    selectedCategoryFilter === "all"
                      ? "bg-[#4A3E3E] text-white"
                      : "bg-[#E8E2D6]/30 hover:bg-[#E8E2D6]/45 text-[#4A3E3E]/90"
                  }`}
                >
                  Semua Pilar
                </button>
                {TOPICS_DATA.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedCategoryFilter(topic.id)}
                    className={`px-3 py-1.5 rounded-xl font-sans text-xs font-semibold tracking-wide transition select-none cursor-pointer ${
                      selectedCategoryFilter === topic.id
                        ? "bg-[#7D8F69] text-white shadow-md shadow-[#7D8F69]/10"
                        : "bg-[#E8E2D6]/30 hover:bg-[#E8E2D6]/45 text-[#4A3E3E]/90"
                    }`}
                  >
                    {topic.title.replace("Akhlak Sesama ", "").replace("Peduli ", "")}
                  </button>
                ))}
              </div>

            </div>

            {/* Grid Layout containing filtered categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onSubTopicClick={navigateToSubTopic}
                />
              ))}
            </div>

            {/* "Inspirasi Akhlak Harian" (Daily Wisdom card) */}
            <div className="bg-[#4A3E3E] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-md border border-[#4A3E3E] shrink-0">
              {/* Graphic backdrop element */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#7D8F69]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/10 text-[#E8E2D6] text-[10px] font-mono font-bold tracking-wider uppercase border border-white/5">
                    Inspirasi Shalih Harian
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif font-extrabold text-white tracking-tight leading-tight">
                    "Menjaga Lisan adalah Perisai Kehormatan Seorang Muslim"
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FDFBF7]/85 leading-relaxed font-sans">
                    Rasulullah bersabda, barangsiapa yang menjamin untukku apa yang berada di antara kedua rahangnya (lisan) dan di antara kedua pahanya (kemaluan), aku menjamin surga baginya (HR. Bukhari). Hindari ejekan, carut-marut, dan menyebarkan aib teman kita.
                  </p>
                </div>
                <div className="shrink-0 bg-white/5 p-4 rounded-2xl border border-white/10 text-center flex flex-col items-center">
                  <Icons.Smile className="w-8 h-8 text-[#E8E2D6] shrink-0 animate-bounce" />
                  <span className="text-[10px] text-[#FDFBF7]/70 font-mono mt-2 block">Kunci Rida</span>
                  <span className="text-xs font-bold text-white font-sans mt-0.5">Senyum adalah Sedekah</span>
                </div>
              </div>
            </div>

          </div>
        )}
        
      </main>

      {/* Structured Clean Footer displaying references */}
      <footer className="bg-[#4A3E3E] border-t border-[#E8E2D6]/20 py-10 mt-12 text-[#E8E2D6]/60 text-xs text-center shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7D8F69] animate-pulse" />
            <span className="font-bold text-[#FDFBF7] font-serif text-sm">Hikmah – Media Pembelajaran Karakter Islami</span>
          </div>
          <p className="max-w-xl mx-auto leading-relaxed text-[11px] text-[#E8E2D6]/75 font-sans">
          farhan nur fauzi | K2525014 | fauzifarhannur@student.uns.ac.id
          </p>
          <div className="pt-4 border-t border-white/5 text-[10px] text-[#E8E2D6]/50 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Hikmah App. Dikembangkan untuk Kebaikan Generasi Shalih.</span>
            <div className="flex gap-4">
              <span className="hover:text-[#FDFBF7] transition cursor-default">Syarat Penggunaan</span>
              <span>•</span>
              <span className="hover:text-[#FDFBF7] transition cursor-default">Kebijakan Privasi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
