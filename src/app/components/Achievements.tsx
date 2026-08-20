import { motion } from "motion/react";
import { Trophy, Medal, Star, Award, Ribbon, Globe } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Türkiye Şampiyonası",
    description: "2024 Türkiye Cimnastik Şampiyonası'nda öğrencilerimiz 3 altın, 5 gümüş ve 4 bronz madalya kazandı.",
    year: "2024",
    highlight: "3 Altın Madalya",
  },
  {
    icon: Globe,
    title: "Balkan Kupası",
    description: "Balkan Cimnastik Kupası'nda genç sporcularımız bölgesel arenada Türkiye'yi gururla temsil etti.",
    year: "2023",
    highlight: "1. Takım Sıralaması",
  },
  {
    icon: Star,
    title: "İstanbul Şampiyonası",
    description: "İstanbul Büyükşehir Belediyesi Cimnastik Turnuvası'nda tüm yaş kategorilerinde derece elde ettik.",
    year: "2024",
    highlight: "12 Madalya",
  },
  {
    icon: Award,
    title: "Ulusal Küçükler Ligi",
    description: "Küçükler kategorisinde sporcularımız Ulusal Lig'de sezon boyunca üst sıralarda yer aldı.",
    year: "2023",
    highlight: "Sezon Şampiyonu",
  },
  {
    icon: Medal,
    title: "Akdeniz Gençlik Oyunları",
    description: "Akdeniz Gençlik Oyunları'nda takımımız gümüş ve bronz madalya kazanarak ülkemizi başarıyla temsil etti.",
    year: "2022",
    highlight: "2 Uluslararası Madalya",
  },
  {
    icon: Ribbon,
    title: "Türkiye Kulüpler Kupası",
    description: "Türkiye Kulüpler Kupası'nda takım kategorisinde birinci olarak ülke çapında tanındık.",
    year: "2022",
    highlight: "Takım Birincisi",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F36C21]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#F36C21] text-sm font-semibold tracking-widest uppercase mb-4">
            Gururumuz
          </span>
          <h2 className="text-4xl md:text-5xl text-[#1A1A1A] mb-6">
            Başarılarımız
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Disiplinle çalışan sporcularımızın her geçen gün kendini aşarak elde ettiği ulusal ve uluslararası başarılar.
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white border border-[#E5E5E5] rounded-2xl p-7 hover:border-[#F36C21]/50 hover:shadow-lg hover:shadow-[#F36C21]/8 transition-all duration-300 relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F36C21]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon + year */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-13 h-13 w-12 h-12 bg-[#F36C21]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#F36C21]/20 transition-colors duration-300">
                    <Icon size={24} className="text-[#F36C21]" />
                  </div>
                  <span className="text-[#F36C21] text-xs font-semibold bg-[#F36C21]/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-5">{item.description}</p>

                {/* Highlight badge */}
                <div className="flex items-center gap-2 border-t border-[#F0F0F0] pt-4">
                  <div className="w-1.5 h-1.5 bg-[#F36C21] rounded-full" />
                  <span className="text-[#F36C21] text-sm font-semibold">{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
