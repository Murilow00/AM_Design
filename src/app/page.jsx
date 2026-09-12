import { Zap, TrendingUp, Wrench } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import MetricCard from "../components/MetricCard";
import styles from "./page.module.css";

const services = [
  {
    icon: Zap,
    title: "Sites estratégicos",
    description:
      "Landing pages e sites institucionais focados em conversão, credibilidade e geração de leads.",
    list: ["Posicionamento de marca", "Estrutura de vendas", "Design premium"],
  },
  {
    icon: TrendingUp,
    title: "Presença digital",
    description:
      "Transformamos sua empresa em uma marca reconhecida com identidade visual e presença online sólida.",
    list: ["Branding digital", "Conteúdo comercial", "Foco em resultado"],
  },
  {
    icon: Wrench,
    title: "Manutenção e crescimento",
    description:
      "Acompanhamos seu site com melhorias contínuas para garantir performance, segurança e evolução.",
    list: ["Performance", "SEO", "Atualizações e suporte"],
  },
];

const metrics = [
  {
    value: "Velocidade",
    label: "Agilidade na entrega",
    detail: "Do planejamento ao lançamento, com acompanhamento.",
  },
  {
    value: "4.9/5",
    label: "avaliação média",
    detail: "de clientes e parceiros",
  },
  {
    value: "Tecnologia",
    label: "Tecnologia para o seu negócio",
    detail: "Ferramentas alinhadas às necessidades de cada projeto.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className={styles.page}>
        <section id="inicio" className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                Agência digital com visão de negócio
              </p>
              <h1>Sites que vendem, posicionam e escalam marcas.</h1>
              <p className={styles.heroDescription}>
                A AM Digital Studio cria experiências digitais que conectam
                estratégia, tecnologia e resultados para empresas que querem
                crescer com presença profissional e autoridade no mercado.
              </p>

              <div className={styles.heroActions}>
                <a href="/contato" className={styles.primaryButton}>
                  Falar com a equipe
                </a>
                <a href="#servicos" className={styles.secondaryButton}>
                  Ver serviços
                </a>
              </div>

              <ul
                className={styles.socialProof}
                aria-label="Principais diferenciais"
              >
                <li>Design premium</li>
                <li>Conversão</li>
                <li>Suporte contínuo</li>
              </ul>
            </div>

            <div
              className={styles.visualPanel}
              aria-label="Logo da AM Digital Studio"
            >
              <img
                src="/images/logo.png"
                alt="AM Digital Studio"
                className={styles.logoImage}
              />
            </div>
          </div>
        </section>

        <section id="sobre" className={styles.about}>
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div>
              <SectionHeading
                eyebrow="Quem somos"
                title="Uma agência que entende estratégia, estética e conversão."
                description="Nós ajudamos negócios a transformar presença digital em diferencial competitivo. Da ideia ao lançamento, cuidamos das decisões que fazem a diferença no resultado real da sua marca."
              />
            </div>

            <div className={styles.aboutPanel}>
              <p>
                A AM Digital Studio combina criatividade, tecnologia e
                entendimento de mercado para criar sites que comunicam valor,
                fortalecem a reputação e geram oportunidades reais de negócio.
              </p>
              <p>
                Nosso trabalho vai além do visual: estruturamos mensagens,
                experiências e fluxos que fazem clientes tomarem ação e
                confiarem no seu negócio.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className={styles.services}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Serviços"
              title="Soluções digitais feitas para faturar e crescer"
              description="Tudo o que sua marca precisa para se destacar no mercado digital com presença forte e credibilidade."
            />

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  list={service.list}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.metrics}>
          <div className={styles.container}>
            <div className={styles.metricsGrid}>
              {metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  detail={metric.detail}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className={styles.process}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Processo"
              title="Como trabalhamos para entregar resultado real"
            />

            <div className={styles.processGrid}>
              <article>
                <span>01</span>
                <h3>Diagnóstico</h3>
                <p>
                  Entendemos sua marca, público e objetivos para mapear a melhor
                  direção estratégica.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Design & estrutura</h3>
                <p>
                  Criamos a identidade visual, arquitetura da informação e
                  mensagens que aumentam a percepção de valor.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Desenvolvimento</h3>
                <p>
                  Transformamos o conceito em um site moderno, responsivo,
                  rápido e preparado para conversão.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Entrega & evolução</h3>
                <p>
                  Você recebe o projeto pronto e ainda conta com acompanhamento
                  para otimizar sempre mais.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className={styles.contact}>
          <div className={`${styles.container} ${styles.contactBox}`}>
            <div>
              <p className={styles.eyebrow}>Vamos conversar?</p>
              <h2>
                Seu próximo site pode ser o grande diferencial da sua empresa.
              </h2>
            </div>
            <a
              href="mailto:amdigitalstudio67@gmail.com"
              className={styles.primaryButton}
            >
              amdigitalstudio67@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
