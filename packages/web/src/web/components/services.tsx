import { LashCardPreview } from "./lash-card-preview";
import { LashEditorialPhoto } from "./lash-editorial-photo";

export function Services() {
  return (
    <div className="services-content">
      <section className="lash-section" aria-labelledby="lashes-title">
        <div className="service-intro content-width">
          <div className="service-intro__copy">
            <span className="section-kicker"><span /> ESTER LASH DESIGNER</span>
            <h2 id="lashes-title">Seu olhar.<br />Seu <em>destaque.</em></h2>
            <p>Extensão de cílios para realçar a sua beleza. Descubra as opções e encontre o seu próximo olhar.</p>
          </div>
        </div>
        <LashEditorialPhoto />
        <h2 className="lash-services-heading">Serviços</h2>
        <LashCardPreview />
      </section>
    </div>
  );
}