import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { QueEs, QueHacemos } from './components/QueEsYHacemos.jsx'
import { Proceso, Soluciones } from './components/ProcesoYSoluciones.jsx'
import { Disenos, Colaboraciones } from './components/DisenosYColaboraciones.jsx'
import { Personalizacion, PorQue } from './components/PersonalizacionYPorQue.jsx'
import Contacto from './components/Contacto.jsx'
import Footer, { WhatsAppFloat } from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <QueEs />
        <QueHacemos />
        <Proceso />
        <Soluciones />
        <Disenos />
        <Colaboraciones />
        <Personalizacion />
        <PorQue />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
