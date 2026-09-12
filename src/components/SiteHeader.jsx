"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  function closeOnEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }
  return (
    <header className="siteHeader" onKeyDown={closeOnEscape}>
      <a className="skipLink" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="container siteHeaderInner">
        <Link
          href="/"
          className="brand"
          aria-label="AM Digital Studio — início"
          onClick={() => setOpen(false)}
        >
          <span className="brandMark" aria-hidden="true" />
          <span className="brandText">
            AM <span>Digital Studio</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menuToggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
        <nav
          id="site-navigation"
          className={`siteNav ${open ? "isOpen" : ""}`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="primaryButton navCta"
            onClick={() => setOpen(false)}
          >
            Solicitar proposta <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
