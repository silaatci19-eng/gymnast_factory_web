import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xbgrwkjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Başvurunuz başarıyla iletildi! En kısa sürede size dönüş yapacağız.");
        setFormData({ name: "", email: "", phone: "", message: "", age: "" });
      } else {
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 (554) 007 8994"],
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["gymnastfactoryy@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Alacaatlı, 3158. Cd. No:119c İç Kapı No:7, 06810 Çankaya/Ankara"],
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Hafta İçi: 09:00 - 20:00", "Hafta Sonu: 10:00 - 18:00"],
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
            Ücretsiz Deneme Dersi
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Formu doldurun, size en uygun program için ücretsiz deneme dersi ayarlayalım
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-[#1A1A1A] text-2xl mb-6">Kayıt Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#333333] mb-2">
                  Veli Adı Soyadı
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAFAFA] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#F36C21] transition-colors"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#333333] mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAFAFA] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#F36C21] transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#333333] mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAFAFA] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#F36C21] transition-colors"
                  placeholder="+90 (5__) ___ __ __"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-[#333333] mb-2">
                  Çocuğunuzun Yaşı
                </label>
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAFAFA] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#F36C21] transition-colors"
                >
                  <option value="">Yaş seçiniz</option>
                  <option value="3-5">3-5 Yaş</option>
                  <option value="6-8">6-8 Yaş</option>
                  <option value="9-12">9-12 Yaş</option>
                  <option value="13+">13+ Yaş</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#333333] mb-2">
                  Mesajınız (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#FAFAFA] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#F36C21] transition-colors resize-none"
                  placeholder="Özel notlarınız veya sorularınız..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F36C21] text-white py-4 rounded-full hover:bg-[#FF7A2E] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#F36C21]/25"
              >
                <Send size={20} />
                Gönder
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border border-[#E5E5E5] rounded-2xl p-5 hover:border-[#F36C21] transition-all duration-300 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-[#F36C21]/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="text-[#F36C21]" size={24} />
                    </div>
                    <h4 className="text-[#1A1A1A] mb-2">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[#666666]">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-[#F36C21] rounded-3xl overflow-hidden h-[300px] relative shadow-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFF8F4]">
                <div className="text-center">
                  <MapPin className="text-[#F36C21] mx-auto mb-3" size={48} />
                  <p className="text-[#1A1A1A] mb-1">Alacaatlı, 3158. Cd. No:119c İç Kapı No:7, 06810</p>
                  <p className="text-[#888888]">Çankaya\Ankara</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
