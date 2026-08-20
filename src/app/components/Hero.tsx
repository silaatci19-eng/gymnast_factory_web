import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import giriş from "../../assets/giriş.jpeg";
export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FFF8F4]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-[#F0E0D6] px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="text-[#F36C21]" size={18} />
              <span className="text-[#555555]">"Yeni Nesil Cimnasatik Okulu"</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
              Çocuğunuzun Potansiyelini Keşfedin
            </h1>
            <p className="text-xl text-[#555555] mb-8 leading-relaxed">
              Gymnast Factory'de her yaştan çocuk için profesyonel cimnastik eğitimi sunuyoruz.
              Eğlenceli, güvenli ve modern bir ortamda spor yapmanın keyfini çıkarın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-[#F36C21] text-white px-8 py-4 rounded-full hover:bg-[#FF7A2E] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#F36C21]/25"
              >
                Ücretsiz Deneme Dersi
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollTo("#programs")}
                className="bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
              >
                Programları İncele
              </button>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F36C21]/20 to-transparent z-10 pointer-events-none" />
              <div
                className="absolute -inset-2 bg-[#F36C21] blur-3xl opacity-10 rounded-3xl"
                style={{ zIndex: -1 }}
              />
              <img
                src={giriş}
                alt="Kids Gymnastics Training"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl relative z-0"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#F36C21] rounded-full blur-2xl opacity-30"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#F36C21] rounded-full blur-2xl opacity-20"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F36C21] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#F36C21] rounded-full blur-[100px] opacity-8 pointer-events-none" />
    </section>
  );
}
