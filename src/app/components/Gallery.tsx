import { motion } from "motion/react";
import { useState } from "react";
import galeri1 from "../../assets/galeri1.jpeg";
import galeri2 from "../../assets/galeri2.jpeg";
import galeri3 from "../../assets/galeri3.jpeg";
import galeri4 from "../../assets/galeri4.jpeg";
import GALERİ6 from "../../assets/GALERİ6.jpeg";
import GALERİ2 from "../../assets/GALERİ2.jpeg";


type Props = {
  onViewAll: () => void;
};

export function Gallery({ onViewAll }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { url: galeri1, title: "" },
    { url: galeri2, title: "" },
    { url: galeri3, title: "" },
    { url: galeri4, title: "" },
    { url: GALERİ6, title: "" },
    { url: GALERİ2, title: "" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Galeri</h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Modern salonumuz, profesyonel ekipmanlarımız ve mutlu öğrencilerimizden kareler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm"
            >
              <div className="aspect-square overflow-hidden bg-[#E5E5E5]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-[#F36C21]/80 via-[#F36C21]/30 to-transparent flex items-end p-6 pointer-events-none"
              >
                <h3 className="text-white">{image.title}</h3>
              </motion.div>

              <div
                className={`absolute inset-0 border-2 rounded-2xl transition-colors duration-300 ${hoveredIndex === index ? "border-[#F36C21]" : "border-transparent"
                  }`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={onViewAll}
            className="bg-[#F36C21] text-white px-8 py-4 rounded-full hover:bg-[#FF7A2E] transition-all duration-200 shadow-md shadow-[#F36C21]/20"
          >
            Tüm Fotoğrafları Görüntüle
          </button>
        </motion.div>
      </div>
    </section>
  );
}
