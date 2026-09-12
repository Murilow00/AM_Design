import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'AM Digital Studio | Sites que geram resultados',
    description: 'Agência especializada em criação de sites, presença digital e estratégia para marcas que querem crescer.',
    icons: {
        icon: '/images/logo.png',
        shortcut: '/images/logo.png',
        apple: '/images/logo.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className="min-h-screen antialiased">
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster />
            </body>
        </html>
    );
}
