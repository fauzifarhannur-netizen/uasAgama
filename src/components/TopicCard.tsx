import * as Icons from "lucide-react";
import { Topic, SubTopic } from "../types";

interface TopicCardProps {
  topic: Topic;
  onSubTopicClick: (subTopicId: string) => void;
}

export default function TopicCard({ topic, onSubTopicClick }: TopicCardProps) {
  // Dynamically resolve icon based on string name
  const IconComponent = (Icons as any)[topic.iconName] || Icons.BookOpen;

  // Color classes map based on theme configurations
  const themeMap: Record<string, { bg: string; text: string; hover: string; border: string; accentBg: string; accentText: string; lightBg: string }> = {
    emerald: {
      bg: "hover:border-[#7D8F69] hover:shadow-[#7D8F69]/10",
      text: "text-[#7D8F69]",
      hover: "group-hover:text-[#5E6F4A]",
      border: "border-[#E8E2D6]",
      accentBg: "bg-[#7D8F69]/10",
      accentText: "text-[#7D8F69]",
      lightBg: "bg-[#7D8F69]/10",
    },
    sky: {
      bg: "hover:border-[#C5B495] hover:shadow-[#C5B495]/10",
      text: "text-[#4A3E3E]",
      hover: "group-hover:text-[#7D8F69]",
      border: "border-[#E8E2D6]",
      accentBg: "bg-[#E8E2D6]/40",
      accentText: "text-[#4A3E3E]",
      lightBg: "bg-[#E8E2D6]/30",
    },
    amber: {
      bg: "hover:border-[#C98B75] hover:shadow-[#C98B75]/10",
      text: "text-[#C98B75]",
      hover: "group-hover:text-[#B0705C]",
      border: "border-[#E8E2D6]",
      accentBg: "bg-[#C98B75]/10",
      accentText: "text-[#C98B75]",
      lightBg: "bg-[#C98B75]/10",
    },
    teal: {
      bg: "hover:border-[#8C906B] hover:shadow-[#8C906B]/10",
      text: "text-[#8C906B]",
      hover: "group-hover:text-[#5B5E43]",
      border: "border-[#E8E2D6]",
      accentBg: "bg-[#8C906B]/10",
      accentText: "text-[#8C906B]",
      lightBg: "bg-[#8C906B]/10",
    },
  };

  const selectedTheme = themeMap[topic.colorTheme.primary] || themeMap.emerald;

  return (
    <div className={`group bg-white rounded-3xl border border-[#E8E2D6] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${selectedTheme.bg}`}>
      <div>
        {/* Header Indicator */}
        <div className="flex justify-between items-start mb-5">
          <div className={`p-3 rounded-2xl ${selectedTheme.accentBg} ${selectedTheme.text} transition duration-300`}>
            <IconComponent className="w-6 h-6 shrink-0" />
          </div>
          <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${selectedTheme.accentBg} ${selectedTheme.accentText}`}>
            {topic.subTopics.length} Bab Belajar
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-serif font-bold text-[#4A3E3E] group-hover:text-[#7D8F69] transition-colors">
          {topic.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#4A3E3E]/85 leading-relaxed font-sans">
          {topic.description}
        </p>

        {/* Subtopics quick link rows */}
        <div className="mt-6 space-y-3">
          <div className="text-[10px] font-mono font-bold uppercase text-[#4A3E3E]/60 tracking-wider">Daftar Bahasan Materi:</div>
          {topic.subTopics.map((sub: SubTopic) => {
            const SubIcon = (Icons as any)[sub.iconName] || Icons.BookOpen;

            return (
              <button
                key={sub.id}
                onClick={() => onSubTopicClick(sub.id)}
                className="w-full group/sub flex items-center justify-between p-3 rounded-xl border border-[#E8E2D6]/40 bg-[#F9F7F2]/60 hover:bg-[#E8E2D6]/30 hover:border-[#E8E2D6] transition text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg bg-[#E8E2D6]/40 group-hover/sub:${selectedTheme.accentBg} text-[#4A3E3E]/70 group-hover/sub:${selectedTheme.text} transition-all`}>
                    <SubIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-[#4A3E3E] group-hover/sub:text-[#7D8F69] transition-colors">
                    {sub.title}
                  </span>
                </div>
                
                <Icons.ChevronRight className="w-4 h-4 text-[#4A3E3E]/40 group-hover/sub:translate-x-0.5 transition-all" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
