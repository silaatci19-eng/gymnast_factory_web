import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Elif Yıldız",
      role: "Ece'nin Annesi (7 yaş)",
      text: "Kızım Gymnast Factory'ye başladıktan sonra hem fiziksel hem de özgüven açısından inanılmaz gelişti. Eğitmenler çok ilgili ve güler yüzlü. Teşekkür ederiz!",
      rating: 5,
    },
    {
      name: "Ahmet Kara",
      role: "Can'ın Babası (5 yaş)",
      text: "Oğlumun enerjisini doğru yönlendirmek istiyorduk. Burası tam aradığımız yermiş. Hem eğleniyor hem de spor yapmanın disiplinini öğreniyor. Harika bir ortam!",
      rating: 5,
    },
    {
      name: "Zeynep Aydın",
      role: "Defne'nin Annesi (9 yaş)",
      text: "3 yıldır Gymnast Factory'de eğitim alıyoruz. Kızımın gelişimini gördükçe ne kadar doğru bir karar verdiğimizi anlıyoruz. Profesyonel kadro ve modern ekipmanlar.",
      rating: 5,
    },
    {
      name: "Murat Demir",
      role: "İkiz Çocuk Babası (6 yaş)",
      text: "İkiz çocuklarımız farklı programlarda eğitim alıyor. Her ikisi için de uygun program bulduk. Eğitmenler her çocuğun özel ihtiyaçlarına göre yaklaşıyor. Çok memnunuz!",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
            Velilerimiz Ne Diyor?
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Binlerce mutlu veli ve çocuğumuzun deneyimlerinden bazıları
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 hover:border-[#F36C21] transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-8 group-hover:opacity-15 transition-opacity duration-300">
                <Quote size={64} className="text-[#F36C21]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#F36C21] fill-[#F36C21]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#444444] mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F36C21]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#F36C21]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-[#1A1A1A]">{testimonial.name}</div>
                  <div className="text-[#888888]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "3000+", label: "Mutlu Öğrenci" },
            { number: "15+", label: "Uzman Eğitmen" },
            { number: "10", label: "Yıllık Deneyim" },
            { number: "98%", label: "Memnuniyet" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl text-[#F36C21] mb-2">
                {stat.number}
              </div>
              <div className="text-[#555555]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
