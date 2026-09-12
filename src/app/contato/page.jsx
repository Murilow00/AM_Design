import PageBanner from "../../components/PageBanner";
import SiteHeader from "../../components/SiteHeader";

export default function ContatoPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="pageShell">
        <PageBanner
          eyebrow="Contato"
          title="Fale com a AM Digital Studio."
          description="Vamos discutir como transformar sua presença digital em uma ferramenta de crescimento para o seu negócio."
        />

        <section className="contentSection">
          <div className="container contactGrid">
            <div className="contactCard">
              <h2>Entre em contato</h2>
              <p>
                Se você quer um site que comunica valor, gera confiança e vende
                melhor, este é o lugar certo.
              </p>
              <ul>
                <li>
                  E-mail:{" "}
                  <a href="mailto:amdigitalstudio67@gmail.com">
                    amdigitalstudio67@gmail.com
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a href="https://wa.me/5519989449093">(19) 98944-9093</a>
                </li>
                <li>Campinas - SP</li>
              </ul>
            </div>

            <div className="contactActions">
              <a
                href="https://wa.me/5519989449093"
                className="primaryButton"
                target="_blank"
                rel="noreferrer"
              >
                Conversar no WhatsApp
              </a>
              <a
                href="mailto:amdigitalstudio67@gmail.com"
                className="secondaryButton"
              >
                Enviar e-mail
              </a>

              <div className="contactActionList">
                <div className="contactActionItem">
                  <strong>Resposta rápida</strong>
                  <span>Em até 24 horas</span>
                </div>
                <div className="contactActionItem">
                  <strong>Consultoria inicial</strong>
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
