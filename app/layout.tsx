import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: 'Todo List',
    description: 'Next app with server actions, Prisma and MongoDB',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={josefinSans.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
