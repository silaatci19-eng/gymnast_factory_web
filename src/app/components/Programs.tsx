import { Clock, Users, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export type Program = {
  age: string;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  schedule: string;
  features: string[];
  highlight?: boolean;
};

const programs: Program[] = [
  {
    age: "6+ Yaş",
    title: "Artistik Cimnastik",
    description: "Artistik cimnastik yarışmacı grup",
    duration: "3 saat",
    groupSize: "10-12 çocuk",
    schedule: "Hafta da 4 gün",
    features: ["Temel teknikler", "Güç ve esneklik", "Ekip çalışması", "Düzenli ilerlemeler"],
  },
  {
    age: "6+ Yaş",
    title: "Aerobik Cimnastik",
    description: "Aerobik cimnastik yarışmacı grup",
    duration: "3 saat",
    groupSize: "10-12 çocuk",
    schedule: "Haftada 4 gün",
    features: ["Temel teknikler", "Güç ve esneklik", "Ekip çalışması", "Düzenli ilerlemeler"],
  },
  {
    age: "9-12 Yaş",
    title: "Parkur Cimnastik",
    description: "İleri seviye hareketler ve yarışma hazırlığı",
    duration: "75 dakika",
    groupSize: "8-10 çocuk",
    schedule: "Haftada 3-4 gün",
    features: ["İleri teknikler", "Yarışma hazırlığı", "Disiplin kazanma", "Performans gelişimi"],
  },
  {
    age: "2-12 Yaş",
    title: "Temel Cimnastik",
    description: "Oyun bazlı eğitimle koordinasyon ve denge geliştirme",
    duration: "90 dakika",
    groupSize: "10-12 çocuk",
    schedule: "Haftada 2-3 gün",
    features: ["Temel hareketler", "Oyunla Öğrenme", "Motor beceri geliştirme", "Sosyalleşme"],
    highlight: true,
  },
];

type Props = {
  onSelectProgram: (program: Program) => void;
};

export function Programs({ onSelectProgram }: Props) {
  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Eğitim Programlarımız</h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Uzman antrenörlerimiz, çocuğunuzun yaş, fiziksel gelişim ve yetenek analizini yaparak onu en doğru ve verimli gruba yönlendirir.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white border border-[#E5E5E5] rounded-3xl overflow-hidden hover:border-[#F36C21] transition-all duration-300 group hover:shadow-xl hover:shadow-[#F36C21]/10 flex flex-col ${program.highlight ? "ring-2 ring-[#F36C21]" : ""
                }`}
            >
              {/* Header */}
              <div className="bg-[#F36C21] p-4 text-center group-hover:bg-[#FF7A2E] transition-colors duration-300">
                <div className="text-white opacity-90 mb-1">{program.age}</div>
                <h3 className="text-white">{program.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#555555] mb-6">{program.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-[#777777]">
                    <Clock size={18} className="text-[#F36C21]" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#777777]">
                    <Users size={18} className="text-[#F36C21]" />
                    <span>{program.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#777777]">
                    <Calendar size={18} className="text-[#F36C21]" />
                    <span>{program.schedule}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[#555555]">
                      <CheckCircle2 size={16} className="text-[#F36C21] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProgram(program)}
                  className="mt-auto w-full bg-transparent border border-[#E5E5E5] text-[#1A1A1A] py-3 rounded-full hover:bg-[#F36C21] hover:border-[#F36C21] hover:text-white transition-all duration-200"
                >
                  Detayları Gör
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
