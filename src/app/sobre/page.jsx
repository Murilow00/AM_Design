import PageBanner from "../../components/PageBanner";
import SiteHeader from "../../components/SiteHeader";

const values = [
  {
    title: "Estratégia",
    text: "Ajudamos marcas a definir posicionamento, comunicação e objetivos digitais com foco em crescimento real.",
  },
  {
    title: "Design",
    text: "Criamos visual forte, moderno e memorável, alinhado à identidade da sua empresa e ao que ela precisa vender.",
  },
  {
    title: "Execução",
    text: "Transformamos ideias em experiências digitais eficientes, rápidas e preparadas para conversão.",
  },
];

export default function SobrePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="pageShell">
        <PageBanner
          eyebrow="Sobre nós"
          title="Uma agência que entende o que faz uma marca crescer."
          description="A AM Digital Studio combina estratégia, tecnologia e criatividade para transformar presença digital em vantagem competitiva."
        />

        <section className="contentSection">
          <div className="container splitGrid">
            <div>
              <p className="leadParagraph">
                Somos uma agência especializada em criar sites, experiências
                digitais e estratégias de marketing para empresas que desejam
                ser vistas, confiadas e escolhidas.
              </p>
            </div>
            <div className="infoCard">
              <p>
                Nosso trabalho começa com o entendimento do negócio e termina
                com soluções que geram impacto mensurável. Gostamos de unir
                estética e performance para que cada detalhe tenha propósito.
              </p>
            </div>
          </div>
        </section>

        <section className="contentSection altBackground">
          <div className="container">
            <div className="threeColumnGrid">
              {values.map((item) => (
                <article key={item.title} className="featureCard">
                  <span className="cardNumber">{item.title.slice(0, 1)}</span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
