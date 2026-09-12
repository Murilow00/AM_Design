import PageBanner from '../../components/PageBanner';
import SiteHeader from '../../components/SiteHeader';

export default function ContatoPage() {
    return (
        <>
            <SiteHeader />
            <main className="pageShell">
                <PageBanner
                    eyebrow="Contato"
                    title="Fale com a AM Digital Studio."
                    description="Vamos discutir como transformar sua presença digital em uma ferramenta de crescimento para o seu negócio."
                />

                <section className="contentSection">
                    <div className="container contactGrid">
                        <div className="contactCard">
                            <h3>Entre em contato</h3>
                            <p>Se você quer um site que comunica valor, gera confiança e vende melhor, este é o lugar certo.</p>
                            <ul>
                                <li>Email: amdigitalstudio67@gmail.com</li>
                                <li>WhatsApp: (19) 98944-9093</li>
                                <li>Campinas - SP</li>
                            </ul>
                        </div>

                        <div className="contactActions">
                            <a
                                href="https://wa.me/5519989949093"
                                className="primaryButton"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Conversar no WhatsApp
                            </a>
                            <a href="mailto:amdigitalstudio67@gmail.com" className="secondaryButton">
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
