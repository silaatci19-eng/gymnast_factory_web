import { ArrowLeft, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import galeri1 from "../../assets/galeri1.jpeg";
import galeri2 from "../../assets/galeri2.jpeg";
import galeri3 from "../../assets/galeri3.jpeg";
import galeri4 from "../../assets/galeri4.jpeg";
import artistlik from "../../assets/artistlik.webp";
import anasayfa from "../../assets/anasayfa.webp";
import GALERİ1 from "../../assets/GALERİ1.jpeg";
import GALERİ2 from "../../assets/GALERİ2.jpeg";
import GALERİ3 from "../../assets/GALERİ3.jpeg";
import GALERİ4 from "../../assets/GALERİ4.jpeg";
import GALERİ5 from "../../assets/GALERİ5.jpeg";
import GALERİ6 from "../../assets/GALERİ6.jpeg";


const allImages = [
  { url: galeri1, title: "Eğlenceli anlar" },
  { url: galeri2, title: "eğelenceli anlar" },
  { url: galeri3, title: "yarışmadan kesitler" },
  { url: galeri4, title: "Aerobik yarışmacı sporcularımız" },
  { url: artistlik, title: "Artistlik cimnastik sporcularımız" },
  { url: anasayfa, title: "Gymnast Factory" },
  { url: GALERİ1, title: "Antrenman anları" },
  { url: GALERİ2, title: "Antrenman anları" },
  { url: GALERİ3, title: "Antrenman anları" },
  { url: GALERİ4, title: "Antrenman anları" },
  { url: GALERİ5, title: "Antrenman anları" },
  { url: GALERİ6, title: "Gymnast Factory" },
];

type Props = {
  onBack: () => void;
};

export function GalleryFull({ onBack }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Bar */}
      <div className="bg-[#F8F8F8] border-b border-[#E5E5E5] pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#555555] hover:text-[#F36C21] transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Ana Sayfaya Dön</span>
          </button>
          <span className="text-[#888888] text-sm">{allImages.length} fotoğraf</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-3">Galeri</h1>
        <p className="text-[#555555] text-lg max-w-xl mx-auto">
          Modern salonumuz, profesyonel ekipmanlarımız ve mutlu öğrencilerimizden tüm kareler
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => setLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid shadow-sm"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm">{image.title}</span>
              </div>
              <div className="absolute inset-0 border-2 border-[#F36C21] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>
          <motion.img
            key={lightbox}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={allImages[lightbox].url}
            alt={allImages[lightbox].title}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {allImages[lightbox].title} — {lightbox + 1} / {allImages.length}
          </div>
        </motion.div>
      )}
    </div>
  );
}
