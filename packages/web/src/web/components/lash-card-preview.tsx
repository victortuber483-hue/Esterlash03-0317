import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function LashCardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle("is-visible", entry.isIntersecting);
    }, { threshold: .15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className="ester-card-preview">
    <div className="ester-card-entry" ref={ref}>
      <article className="ester-lash-card" aria-labelledby="brazilian-card-title">
        <div className="ester-lash-card__body">
        <h3 id="brazilian-card-title">Volume<br />Brasileiro</h3>
        <div className="ester-lash-card__prices">
          <div><span>Aplicação</span><strong>R$ 80</strong></div>
          <div><span>Manutenção</span><strong>R$ 70</strong></div>
        </div>
        <p className="ester-lash-card__period">Manutenção em 15 a 20 dias</p>
        </div>
        <div className="ester-lash-card__art" aria-hidden="true"><img src="/images/lash-3d.png" alt="" /><i /><i /><i /></div>
        <a className="ester-lash-card__cta" href={`https://wa.me/5583991173570?text=${encodeURIComponent("Olá! Gostaria de agendar Volume Brasileiro. Quais horários estão disponíveis?")}`} target="_blank" rel="noopener noreferrer"><span>Agende agora</span><ArrowUpRight size={19} /></a>
      </article>
    </div>
  </div>;
}