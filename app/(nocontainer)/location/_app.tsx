
import type { AppProps } from 'next/app';
import '@vercel/examples-ui/globals.css';
import { LayoutProps } from '@/utils/types';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
