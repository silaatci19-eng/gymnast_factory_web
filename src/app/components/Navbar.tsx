import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/a90acd27cb51ccaa5ef932aa12fe128349183705.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Programlar", href: "#programs" },
    { label: "Başarılarımız", href: "#achievements" },
    { label: "Galeri", href: "#gallery" },
    { label: "İletişim", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Gymnast Factory" className="h-12 w-auto mix-blend-multiply" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[#333333] hover:text-[#F36C21] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block bg-[#F36C21] text-white px-6 py-3 rounded-full hover:bg-[#FF7A2E] transition-all duration-200"
          >
            Kayıt Ol
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#333333]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-50 md:hidden overflow-y-auto shadow-xl"
            >
              <div className="p-6">
                <div className="mb-8">
                  <img src={logo} alt="Gymnast Factory" className="h-10 w-auto" />
                </div>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="text-[#333333] hover:text-[#F36C21] text-left py-3 border-b border-[#F0F0F0] transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="bg-[#F36C21] text-white px-6 py-3 rounded-full hover:bg-[#FF7A2E] transition-all duration-200 mt-4"
                  >
                    Kayıt Ol
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
