import { ArrowLeft, Clock, Users, Calendar, CheckCircle2, Star, Target, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import resimGF from '../../assets/resimGF.webp';
import artistlik from '../../assets/artistlik.webp';
import galeri1 from '../../assets/galeri1.jpeg';
import GALERİ6 from '../../assets/GALERİ6.jpeg';


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

const programDetails: Record<string, {
  longDescription: string;
  goals: string[];
  image: string;
  testimonial: { text: string; author: string };
}> = {
  "Artistik Cimnastik": {
    longDescription:
      "Artistik Cimnastik programımız; estetik, güç ve disiplini bir araya getirerek sporcuların kendi sınırlarını keşfetmelerini sağlar. Temel tekniklerden dinamik rutinlere uzanan eğitimlerimizle sporcular, doğru vücut kontrolü, esneklik ve yüksek özgüven kazanır.",
    goals: [
      "Temel denge ve koordinasyon geliştirme",
      "Sosyal etkileşim ve takım ruhu kazandırma",
      "Öz güven ve cesaret oluşturma",
      "Fiziksel sağlık ve esneklik artırma",
    ],
    image: artistlik,
    testimonial: {
      text: "Kızım her ders sonrası koşarak gelip ne yaptığını anlatıyor. Harika bir ortam!",
      author: "Selin A. – Çocuğu 7 Yaşında",
    },
  },
  "Aerobik Cimnastik": {
    longDescription:
      "Aerobik Cimnastik programımız; müzik, ritim ve yüksek tempoyu estetik güç hareketleriyle bir araya getirir. Enerji dolu antrenman ortamımızda sporcular, patlayıcı güçlerini ve esnekliklerini geliştirirken takım ruhu ve yüksek özgüven inşa eder.",
    goals: [
      "Temel Cimnastik tekniklerini öğrenme",
      "Güç, denge ve esneklik geliştirme",
      "Disiplin ve düzenli antrenman alışkanlığı",
      "Yarışmaya hazırlık temeli oluşturma",
    ],
    image: resimGF,
    testimonial: {
      text: "Kızım antrenmanlara büyük bir zevkle gidiyor ve zamanla kendini geliştirdiğini görüyoruz, bu aile ortamı için Gymnast Factory'ye teşekkür ederiz. ",
      author: "Kemal D. – Çocuğu 10 Yaşında",
    },
  },
  "Parkur Cimnastik": {
    longDescription:
      "Parkur Cimnastiği programımız; akrobasi, güç ve çabukluğu özgürce hareket etme sanatıyla bir araya getirir. Sporcular, zorlu engelleri aşarken problem çözme yeteneklerini, patlayıcı güçlerini ve reflekslerini geliştirerek sınırlarını güvenle keşfeder.",
    goals: [
      "İleri seviye cimnastik hareketleri öğrenme",
      "Yarışma deneyimi ve psikolojisi kazanma",
      "Sporcu kimliği ve disiplin geliştirme",
      "Güç, hız ve çeviklik artırma",
    ],
    image: GALERİ6,
    testimonial: {
      text: "Kızımın özgüveni antreenmenlara başladığpından beri çok arttı. Gymnast Factory'nin katkısı çok büyük.",
      author: "Ayşe K. – Çocuğu 10 Yaşında",
    },
  },
  "Temel Cimnastik": {
    longDescription:
      "2-12 yaş grubundaki çocuklar için tasarlanan Temel Eğitim Cimnastik programı, yaş kategorilerine özel seviyelendirilmiş gruplarda gerçekleştirilir. Güvenli ve eğlenceli rutinlerle çocuklar; denge, esneklik ve motor becerilerini geliştirirken spor sevgisini ve takım ruhunu keşfeder.",
    goals: [
      "Temel motor beceriler ve vücut koordinasyonu geliştirme",
      "Kendi yaş grubuna özel esneklik, denge ve kuvvet altyapısı oluşturma",
      "Akranlarıyla sosyal etkileşim, paylaşım ve takım ruhu kazandırma",
      "Özgüven, odaklanma ve yaşam boyu spor alışkanlığı inşa etme",
    ],
    image: galeri1,
    testimonial: {
      text: "Kızımın motor becerileri ve denge yeteneği bu program sayesinde çok gelişti. Antrenörler çok ilgili ve çocuklarla harika bir iletişim kuruyorlar.",
      author: "Burak T. – Çocuğu 12 Yaşında",
    },
  },
};

type Props = {
  program: Program;
  onBack: () => void;
  onContact: () => void;
};

export function ProgramDetail({ program, onBack, onContact }: Props) {
  const detail = programDetails[program.title];

  if (!detail) {
    return (
      <div className="min-h-screen bg-white pt-32 text-center p-8">
        <h2 className="text-2xl text-red-500 mb-4">Program Detayı Bulunamadı</h2>
        <p className="text-gray-600 mb-6">
          "{program?.title}" başlığı programDetails nesnesindeki anahtarlar ile eşleşmiyor.
        </p>
        <button
          onClick={onBack}
          className="bg-[#F36C21] text-white px-6 py-2 rounded-full"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Bar */}
      <div className="bg-[#F8F8F8] border-b border-[#E5E5E5] pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#555555] hover:text-[#F36C21] transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Programlara Dön</span>
          </button>
        </div>
      </div>

      {/* Hero */}
      {/* Hero */}
      <div
        className={`relative overflow-hidden ${program?.title === "Temel Cimnastik"
          ? "h-100 md:h-250"
          : "h-100 md:h-150"
          }`}
      >
        <img
          src={detail?.image}
          alt={program?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <span className="inline-block bg-[#F36C21] text-white text-sm px-4 py-1 rounded-full mb-3">
            {program?.age}
          </span>
          <h1 className="text-3xl md:text-5xl text-white">{program?.title}</h1>
        </div>
      </div>


      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl text-[#1A1A1A] mb-4 flex items-center gap-2">
                <BookOpen size={22} className="text-[#F36C21]" />
                Program Hakkında
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed">{detail.longDescription}</p>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl text-[#1A1A1A] mb-4 flex items-center gap-2">
                <Target size={22} className="text-[#F36C21]" />
                Hedefler
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {detail.goals.map((goal) => (
                  <div key={goal} className="flex items-start gap-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-4">
                    <CheckCircle2 size={18} className="text-[#F36C21] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">{goal}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#FFF8F4] border border-[#F0E0D6] rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F36C21] fill-[#F36C21]" />
                ))}
              </div>
              <p className="text-[#444444] italic mb-3">"{detail.testimonial.text}"</p>
              <p className="text-[#F36C21] text-sm font-semibold">{detail.testimonial.author}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-6 sticky top-28"
            >
              <h3 className="text-[#1A1A1A] text-xl mb-5">Program Detayları</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-[#555555]">
                  <div className="w-9 h-9 bg-[#F36C21]/10 rounded-lg flex items-center justify-center">
                    <Clock size={18} className="text-[#F36C21]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888888]">Süre</div>
                    <div>{program.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#555555]">
                  <div className="w-9 h-9 bg-[#F36C21]/10 rounded-lg flex items-center justify-center">
                    <Users size={18} className="text-[#F36C21]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888888]">Grup Büyüklüğü</div>
                    <div>{program.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#555555]">
                  <div className="w-9 h-9 bg-[#F36C21]/10 rounded-lg flex items-center justify-center">
                    <Calendar size={18} className="text-[#F36C21]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888888]">Program</div>
                    <div>{program.schedule}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] pt-5 mb-5">
                <p className="text-sm text-[#777777] mb-1">Dahil Olanlar</p>
                <div className="space-y-2 mt-3">
                  {program.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[#444444] text-sm">
                      <CheckCircle2 size={14} className="text-[#F36C21] flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onContact}
                className="w-full bg-[#F36C21] text-white py-4 rounded-full hover:bg-[#FF7A2E] transition-all duration-200 shadow-lg shadow-[#F36C21]/25"
              >
                Ücretsiz Deneme Dersi Al
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}