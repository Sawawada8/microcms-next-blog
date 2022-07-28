import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { useStore } from '@/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useStore();
  return (
    <div data-theme={theme}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
