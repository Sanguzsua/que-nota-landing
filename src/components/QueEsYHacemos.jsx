import Reveal from './Reveal.jsx'
import { IconBrand, IconDotacion, IconGift, IconGear } from './Icons.jsx'

export function QueEs() {
  return (
    <section id="que-es" className="split">
      <div className="text-side">
        <Reveal as="span" className="eyebrow">
          01 — Nuestra esencia
        </Reveal>
        <Reveal as="h2" className="section-title">
          ¿Qué es Que Nöta?
        </Reveal>
        <Reveal className="gold-rule" style={{ marginLeft: 0 }} />
        <Reveal as="p" className="body-text">
          Somos una marca especializada en el diseño y desarrollo de productos personalizados para personas y
          organizaciones.
        </Reveal>
        <Reveal as="p" className="body-text" delay={100}>
          Creamos piezas que combinan identidad visual, funcionalidad y presentación profesional, transformando
          ideas en productos físicos que fortalecen la conexión con clientes, colaboradores y equipos de trabajo.
        </Reveal>
      </div>
      <div className="visual-side">
        <Reveal className="mini-notebook">
          <div className="clip"></div>
          <div className="qn2">
            <div className="m">QN</div>
            <div className="w">QUE NÖTA</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const cards = [
  { Icon: IconBrand, title: 'Identidad de Marca', text: 'Productos que comunican la esencia de una organización.' },
  {
    Icon: IconDotacion,
    title: 'Dotación Corporativa',
    text: 'Elementos diseñados para fortalecer la experiencia de colaboradores y equipos.',
  },
  { Icon: IconGift, title: 'Regalos Corporativos', text: 'Productos personalizados para clientes, aliados y eventos.' },
  {
    Icon: IconGear,
    title: 'Producción a Medida',
    text: 'Desarrollo de soluciones adaptadas a las necesidades de cada proyecto.',
  },
]

export function QueHacemos() {
  return (
    <section id="hacemos" className="cards-section">
      <div className="container">
        <div className="cards-head">
          <Reveal as="span" className="eyebrow">
            02 — Nuestro alcance
          </Reveal>
          <Reveal as="h2" className="section-title">
            ¿Qué hacemos?
          </Reveal>
          <InkStroke />
        </div>
        <div className="cards-grid">
          {cards.map(({ Icon, title, text }, i) => (
            <Reveal key={title} className="card" delay={i * 70}>
              <div className="ic">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InkStroke({ style }) {
  return (
    <Reveal as="svg" className="ink-stroke" style={style} viewBox="0 0 220 14">
      <path d="M4 8 Q60 2 110 8 T216 8" />
    </Reveal>
  )
}
