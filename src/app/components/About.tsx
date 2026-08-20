import { Shield, Trophy, Heart, Users } from "lucide-react";

import { motion } from "motion/react";
import anasayfa from "../../assets/anasayfa.webp";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Güvenli Ortam",
      description: "Profesyonel ekipman ve sertifikalı eğitmenlerle güvenli eğitim",
    },
    {
      icon: Trophy,
      title: "Başarı Odaklı",
      description: "Çocukların kendi ritminde gelişmesini sağlayan ve hareket ettirmeyi sevdiren ortam.",
    },
    {
      icon: Heart,
      title: "Eğlenceli Dersler",
      description: "Oyun ve hareketi birleştiren metotlarla çocuklara sporu ve aktif yaşamı sevdiriyoruz.",
    },
    {
      icon: Users,
      title: "Uzman Kadro",
      description: "Alanında uzman, çocuk iletişiminde tecrübeli sertifikalı cimnastik antrenörleri.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div
                className="absolute -inset-1 bg-[#F36C21] blur-xl opacity-10 rounded-3xl"
                style={{ zIndex: -1 }}
              />
              <img
                src={anasayfa}
                alt="Gymnastics Studio Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl border border-[#E5E5E5]"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-6">
              Neden Gymnast Factory?
            </h2>
            <p className="text-[#555555] text-lg mb-8 leading-relaxed">
              2015’ten beri binlerce çocuğun hayatına hareket ve disiplin kattık. Gymnast Factory olarak; modern ekipmanlarımız ve tutkulu antrenör kadromuzla geleceğin şampiyonlarını ve sağlıklı bireylerini yetiştiriyoruz. Çocuğunuzun beden farkındalığını geliştirirken, eğlence ve sporu aynı çatıda buluşturuyoruz.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-5 hover:border-[#F36C21] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#F36C21]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F36C21]/20 transition-colors duration-300">
                      <Icon className="text-[#F36C21]" size={24} />
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2">{feature.title}</h3>
                    <p className="text-[#777777]">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
