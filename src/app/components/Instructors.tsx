import { Award, Star } from "lucide-react";
import { motion } from "motion/react";

export function Instructors() {
  const instructors = [
    {
      name: "Ayşe Yılmaz",
      specialty: "Baş Antrenör",
      experience: "12 yıl deneyim",
      image: "https://images.unsplash.com/photo-1576490252381-c97ccb950043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW1uYXN0aWNzJTIwY29hY2glMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjQxOTE5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      credentials: "Uluslararası Jimnastik Federasyonu Sertifikalı",
    },
    {
      name: "Mehmet Kaya",
      specialty: "İleri Seviye Antrenörü",
      experience: "10 yıl deneyim",
      image: "https://images.unsplash.com/photo-1655842556556-f7ab19796f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZ3ltbmFzdGljcyUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE5MTkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      credentials: "Olimpik Jimnastik Antrenörü",
    },
    {
      name: "Zeynep Demir",
      specialty: "Mini Jimnastikçiler Uzmanı",
      experience: "8 yıl deneyim",
      image: "https://images.unsplash.com/photo-1658281381502-8f73b17b0253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGd5bW5hc3QlMjBiYWxhbmNlJTIwYmVhbXxlbnwxfHx8fDE3NjQxOTE5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      credentials: "Çocuk Gelişimi ve Spor Pedagojisi Uzmanı",
    },
    {
      name: "Can Özdemir",
      specialty: "Genç Sporcular Antrenörü",
      experience: "9 yıl deneyim",
      image: "https://images.unsplash.com/photo-1631006458455-b12f23b157ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGd5bW5hc3RpY3MlMjBmdW58ZW58MXx8fHwxNzY0MTkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      credentials: "Spor Bilimleri Yüksek Lisans",
    },
  ];

  return (
    <section id="instructors" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Uzman Eğitmen Kadromuz</h2>
          <p className="text-[#BFBFBF] text-lg max-w-2xl mx-auto">
            Sertifikalı ve deneyimli eğitmenlerimiz, her çocuğun potansiyelini 
            ortaya çıkarmak için özenle çalışır
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-3xl overflow-hidden hover:border-[#F36C21] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[#F36C21] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={18} className="text-[#F36C21]" />
                  <span className="text-[#8C8C8C]">{instructor.experience}</span>
                </div>
                <h3 className="text-white mb-2">{instructor.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="h-1 w-12 bg-[#F36C21] rounded-full" />
                </div>
                <p className="text-[#BFBFBF] mb-3">{instructor.specialty}</p>
                <div className="flex items-start gap-2 text-[#8C8C8C]">
                  <Star size={16} className="text-[#F36C21] mt-1 flex-shrink-0" />
                  <span className="text-sm">{instructor.credentials}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-3xl p-8 sm:p-12 inline-block">
            <h3 className="text-white text-2xl mb-4">
              Eğitmenlerimizle Tanışın
            </h3>
            <p className="text-[#BFBFBF] mb-6 max-w-xl">
              Tüm eğitmenlerimiz sertifikalı ve düzenli eğitim almaktadır. 
              Detaylı bilgi ve tanışma randevusu için bizimle iletişime geçin.
            </p>
            <button className="bg-[#F36C21] text-white px-8 py-4 rounded-full hover:bg-[#FF7A2E] transition-all duration-200">
              Randevu Al
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
