import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <Link href="/" className="brand" aria-label="AM Digital Studio home">
          <Image
            src="/images/logo.png"
            alt="AM Digital Studio"
            width={260}
            height={130}
            className="brandLogo"
            priority
          />
        </Link>

        <nav className="siteNav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contato" className="primaryButton">
          Solicitar proposta
        </Link>
      </div>
    </header>
  );
}
