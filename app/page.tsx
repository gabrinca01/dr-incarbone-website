import { AreeEccellenza } from "@/components/AreeEccellenza";
import { AttivitaScientifica } from "@/components/AttivitaScientifica";
import { ChiSono } from "@/components/ChiSono";
import { Contatti } from "@/components/Contatti";
import { EsperienzaOperatoria } from "@/components/EsperienzaOperatoria";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Formazione } from "@/components/Formazione";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Neuromodulazione } from "@/components/Neuromodulazione";
import { PatologieTrattate } from "@/components/PatologieTrattate";
import { PercheScegliere } from "@/components/PercheScegliere";
import { PercorsoPaziente } from "@/components/PercorsoPaziente";
import { PrestazioniAggiuntive } from "@/components/PrestazioniAggiuntive";
import { PubblicazioniSelezionate } from "@/components/PubblicazioniSelezionate";
import { SediConsulenza } from "@/components/SediConsulenza";
import { SpecializzazioniChirurgiche } from "@/components/SpecializzazioniChirurgiche";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SediConsulenza />
        <AreeEccellenza />
        <ChiSono />
        <SpecializzazioniChirurgiche />
        <PatologieTrattate />
        <Neuromodulazione />
        <PrestazioniAggiuntive />
        <EsperienzaOperatoria />
        <PercheScegliere />
        <Formazione />
        <PercorsoPaziente />
        <AttivitaScientifica />
        <PubblicazioniSelezionate />
        <FAQ />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
