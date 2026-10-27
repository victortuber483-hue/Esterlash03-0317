import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".frame-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    }, { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/5583991173570?text=Ol%C3%A1%2C%20Ester!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Ester Lash Designer pelo WhatsApp"
      title="Fale comigo pelo WhatsApp"
    >
      <span className="whatsapp-button__icon"><FaWhatsapp aria-hidden="true" /></span>
    </a>
  );
}