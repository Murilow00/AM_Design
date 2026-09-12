import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

export default function NotFound() {
    return (
        <>
            <SiteHeader />
            <main className="pageShell">
                <section className="notFoundWrapper">
                    <div className="notFoundCard">
                        <div className="notFoundCode">404</div>
                        <h1>Página não encontrada</h1>
                        <p>
                            Parece que essa página saiu do mapa. A AM Digital Studio ajuda marcas a criar presença digital
                            forte, clara e que converte — e a sua próxima etapa pode começar por aqui.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="/" className="primaryButton">
                                Voltar para a home
                            </Link>
                            <Link href="/contato" className="secondaryButton">
                                Falar com a agência
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
