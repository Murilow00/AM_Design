import { Globe, PanelsTopLeft, TrendingUp, Wrench } from "lucide-react";
import PageBanner from "../../components/PageBanner";
import SiteHeader from "../../components/SiteHeader";

const services = [
  {
    title: "Sites institucionais",
    icon: Globe,
    text: "Estruturas modernas e profissionais para empresas que precisam transmitir confiabilidade e valor.",
  },
  {
    title: "Landing pages",
    icon: PanelsTopLeft,
    text: "Páginas pensadas para conversão, com mensagens claras, foco em ação e estrutura de vendas.",
  },
  {
    title: "Marketing digital",
    icon: TrendingUp,
    text: "Estratégias de presença, tráfego e posicionamento para atrair e converter mais clientes.",
  },
  {
    title: "Manutenção e otimização",
    icon: Wrench,
    text: "Acompanhamento contínuo para maior performance, segurança, experiência e evolução do projeto.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="pageShell">
        <PageBanner
          eyebrow="Serviços"
          title="Soluções digitais pensadas para mostrar valor e vender melhor."
          description="Cada serviço é criado para fortalecer a presença da sua marca e transformar visitas em oportunidades de negócio."
        />

        <section className="contentSection">
          <div className="container servicesGridPage">
            {services.map((service) => (
              <article key={service.title} className="servicePanel">
                <span className="badge" aria-hidden="true">
                  <service.icon size={24} strokeWidth={1.75} />
                </span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
