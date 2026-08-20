import { Linkedin, Mail, Quote } from "lucide-react";
import { motion } from "motion/react";

export function Founders() {
  const founders = [
    {
      name: "Ayşe Karaman",
      title: "Kurucu & CEO",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjQxNzAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "15 yıllık profesyonel jimnastik kariyerinin ardından çocukların potansiyelini ortaya çıkarmak için Gymnast Factory'yi kurdu. Olimpik seviye yarışmalarda Türkiye'yi temsil etti.",
      quote: "Her çocuk bir yıldızdır, sadece parlamak için doğru ortamı bulması gerekir.",
      email: "ayse@gymnastfactory.com",
      linkedin: "#",
    },
    {
      name: "Mehmet Karaman",
      title: "Kurucu & COO",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDE5MjgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Spor bilimleri alanında doktora sahibi. Uluslararası antrenörlük sertifikalarıyla çocukların fiziksel ve zihinsel gelişimine odaklanmış eğitim programları geliştirdi.",
      quote: "Spor, sadece fiziksel bir aktivite değil, hayat boyu sürecek değerlerin temelini oluşturur.",
      email: "mehmet@gymnastfactory.com",
      linkedin: "#",
    },
  ];

  return (
    <section
      id="founders"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Kurucularımız</h2>
          <p className="text-[#BFBFBF] text-lg max-w-2xl mx-auto">
            Gymnast Factory vizyonunu hayata geçiren ve Türkiye'de jimnastik eğitimini 
            yeniden tanımlayan deneyimli ekibimiz
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-3xl overflow-hidden hover:border-[#F36C21] transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-5 gap-6 p-6 sm:p-8">
                {/* Image */}
                <div className="md:col-span-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F36C21]/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className="absolute -inset-1 bg-[#F36C21] blur-xl opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"
                      style={{ zIndex: -1 }}
                    />
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-white text-2xl mb-1">{founder.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-12 bg-[#F36C21] rounded-full" />
                    </div>
                    <p className="text-[#F36C21]">{founder.title}</p>
                  </div>

                  <p className="text-[#BFBFBF] mb-6 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Quote */}
                  <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-4 mb-6 relative">
                    <Quote className="absolute top-3 right-3 text-[#F36C21] opacity-20" size={32} />
                    <p className="text-[#EDEDED] italic relative z-10">
                      "{founder.quote}"
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex-1 bg-transparent border border-[#2A2A2A] text-white px-4 py-3 rounded-full hover:bg-[#F36C21] hover:border-[#F36C21] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Mail size={18} />
                      <span>İletişim</span>
                    </a>
                    <a
                      href={founder.linkedin}
                      className="bg-transparent border border-[#2A2A2A] text-white px-4 py-3 rounded-full hover:bg-[#F36C21] hover:border-[#F36C21] transition-all duration-200 flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-[#1C1C1C] border-2 border-[#F36C21] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F36C21] rounded-full blur-[100px] opacity-10" />
            <h3 className="text-white text-2xl sm:text-3xl mb-4 relative z-10">
              Vizyonumuz
            </h3>
            <p className="text-[#BFBFBF] text-lg leading-relaxed relative z-10">
              Gymnast Factory olarak, her çocuğun kendine özgü potansiyelini keşfetmesini ve 
              geliştirmesini sağlayan, güvenli, eğlenceli ve profesyonel bir ortam yaratmayı 
              hedefliyoruz. Jimnastiğin sadece bir spor dalı değil, aynı zamanda disiplin, 
              özgüven ve azim gibi hayat boyu sürecek değerleri kazandıran bir yaşam felsefesi 
              olduğuna inanıyoruz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
