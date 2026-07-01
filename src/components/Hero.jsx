import Reveal from './Reveal.jsx'
import { IconDesign, IconPersonalize, IconProduction, IconLeaf } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Reveal as="span" className="eyebrow">
          Catálogo corporativo 2026
        </Reveal>
        <Reveal as="h1">Soluciones de diseño y personalización corporativa</Reveal>
        <Reveal as="p" className="sub">
          Productos personalizados para representar marcas, equipos y experiencias.
        </Reveal>

        <Reveal className="hero-icons">
          <div className="hicon">
            <div className="circ">
              <IconDesign />
            </div>
            <span>Diseño Corporativo</span>
          </div>
          <div className="hicon">
            <div className="circ">
              <IconPersonalize />
            </div>
            <span>Personalización</span>
          </div>
          <div className="hicon">
            <div className="circ">
              <IconProduction />
            </div>
            <span>Producción</span>
          </div>
        </Reveal>

        <Reveal className="quote-block">
          <IconLeaf className="leaf" />
          <p>
            Creamos piezas que <strong>comunican</strong> la identidad de tu marca y <strong>dejan huella</strong> en
            cada detalle.
          </p>
        </Reveal>

        <Reveal className="hero-ctas">
          <a href="https://wa.me/573103275424" target="_blank" rel="noreferrer" className="btn">
            Cotiza tu proyecto
          </a>
          <a href="#que-es" className="btn ghost">
            Conocer más
          </a>
        </Reveal>
      </div>

      <div className="hero-visual">
        <Reveal className="notebook">
          <div className="cover">
            <div className="ribbon"></div>
            <div className="emblem">
              <div className="qn">QN</div>
              <div className="word">QUE NÖTA</div>
            </div>
          </div>
          <div className="pen"></div>
        </Reveal>
        <Reveal className="float-tag">Agenda negra con detalles dorados — acabado premium para tu marca.</Reveal>
      </div>
    </section>
  )
}
