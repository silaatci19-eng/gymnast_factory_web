import { Facebook, Instagram, Youtube, Twitter, Mail, Phone } from "lucide-react";
import logo from "figma:asset/a90acd27cb51ccaa5ef932aa12fe128349183705.png";

export function Footer() {
  const footerLinks = {
    "Hızlı Linkler": [
      { label: "Ana Sayfa", href: "#hero" },
      { label: "Hakkımızda", href: "#about" },
      { label: "Programlar", href: "#programs" },
      { label: "Galeri", href: "#gallery" },
    ],
    "Programlar": [
      { label: "Temel Cimnastik", href: "#programs" },
      { label: "Artistlik Cimnastik", href: "#programs" },
      { label: "Aerobik Cimnastik", href: "#programs" },
      { label: "Parkur Cimnastik", href: "#programs" },
    ],
    "Destek": [
      { label: "İletişim", href: "#contact" },
      { label: "SSS", href: "#" },
      { label: "Gizlilik Politikası", href: "#" },
      { label: "Kullanım Koşulları", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F0EDE8] text-[#555555] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="Gymnast Factory" className="h-12 w-auto mix-blend-multiply" />
            </div>
            <p className="text-[#888888] mb-6 leading-relaxed max-w-sm">
              Çocuğunuzun potansiyelini keşfetmesi için güvenli, eğlenceli ve profesyonel
              bir cimnastik eğitimi deneyimi sunuyoruz.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+902125550123"
                className="flex items-center gap-2 text-[#BFBFBF] hover:text-[#F36C21] transition-colors"
              >
                <Phone size={18} />
                <span>+90 (554) 007 8994</span>
              </a>
              <a
                href="mailto:gymnastfactoryy@gmail.com"
                className="flex items-center gap-2 text-[#BFBFBF] hover:text-[#F36C21] transition-colors"
              >
                <Mail size={18} />
                <span>gymnastfactoryy@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[#1A1A1A] mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-[#777777] hover:text-[#F36C21] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#D9D4CE] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#888888] text-center md:text-left">
              © 2025 Gymnast Factory. Tüm hakları saklıdır.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white border border-[#D9D4CE] rounded-full flex items-center justify-center hover:bg-[#F36C21] hover:border-[#F36C21] transition-all duration-200 group"
                  >
                    <Icon size={18} className="text-[#777777] group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
