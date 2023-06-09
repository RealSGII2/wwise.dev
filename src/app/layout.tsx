import Appbar from '@/components/Appbar';
import className from '@/util/className';
import { Fira_Sans } from 'next/font/google';
import { cookies } from 'next/headers';

// Styling
import './global.scss';
import './type.scss';
import './theme.scss';
import ScrollListener from '@/components/ScrollListener';

const firaSans = Fira_Sans({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    variable: '--font-sans',
});

export const metadata = {
    title: 'William Wise',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={className(`theme:${cookies().get('theme')?.value ?? 'system'}`, firaSans.variable)}>
            <body>
                <ScrollListener />

                <Appbar />
                {children}
            </body>
        </html>
    );
}
