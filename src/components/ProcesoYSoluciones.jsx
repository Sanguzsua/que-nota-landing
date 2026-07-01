import Reveal from './Reveal.jsx'
import { IconRocket, IconCalendar, IconGiftSol, IconUsers } from './Icons.jsx'

const steps = [
  { num: '01', title: 'Idea', text: 'Escuchamos tu marca y definimos el concepto del producto.' },
  { num: '02', title: 'Diseño', text: 'Desarrollamos boceto y propuesta visual a la medida.' },
  { num: '03', title: 'Producción', text: 'Cuidamos cada detalle en la selección de materiales y elaboración.' },
  { num: '04', title: 'Entrega', text: 'Llevamos el producto terminado listo para representar tu marca.' },
]

export function Proceso() {
  return (
    <section id="proceso" className="process-section">
      <div className="container">
        <div className="cards-head">
          <Reveal as="span" className="eyebrow">
            03 — Cómo trabajamos
          </Reveal>
          <Reveal as="h2" className="section-title">
            Nuestro proceso
          </Reveal>
          <Reveal as="p" className="lede" style={{ margin: '18px auto 0' }}>
            De la idea a la entrega, cada etapa cuidada al detalle.
          </Reveal>
        </div>
        <div className="process-track">
          <div className="process-line"></div>
          {steps.map((s, i) => (
            <Reveal key={s.num} className="p-step" delay={i * 90}>
              <div className="num-circ">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const solutions = [
  { Icon: IconRocket, title: 'Onboarding', text: 'Productos que dan la bienvenida y crean pertenencia desde el primer día.' },
  { Icon: IconCalendar, title: 'Eventos', text: 'Material institucional que comunica profesionalismo y deja una impresión duradera.' },
  { Icon: IconGiftSol, title: 'Clientes', text: 'Obsequios corporativos que fortalecen relaciones y mantienen tu marca presente.' },
  { Icon: IconUsers, title: 'Equipos Internos', text: 'Dotación ejecutiva que motiva, organiza y refleja la identidad de tu empresa.' },
]

export function Soluciones() {
  return (
    <section className="solutions-section">
      <div className="container">
        <div className="cards-head">
          <Reveal as="span" className="eyebrow">
            04 — Momentos clave
          </Reveal>
          <Reveal as="h2" className="section-title">
            Soluciones corporativas
          </Reveal>
          <Reveal as="p" className="lede" style={{ margin: '18px auto 0' }}>
            Ideas que fortalecen tu marca en cada momento clave.
          </Reveal>
        </div>
        <div className="solutions-grid">
          {solutions.map(({ Icon, title, text }, i) => (
            <Reveal key={title} className="sol-item" delay={i * 70}>
              <div className="ic">
                <Icon />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
