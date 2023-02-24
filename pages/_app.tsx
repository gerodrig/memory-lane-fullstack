import type { AppProps } from 'next/app';

import FacebookPixel from 'lib/fpixel/FacebookPixel';

import '../styles/globals.css';
import { Loader } from '@components/ui';
import { useIsPageLoading } from '../lib/hooks/useIsPageLoading';

export default function App({ Component, pageProps }: AppProps) {
  const { isPageLoading } = useIsPageLoading();

  return (
    <>
      {isPageLoading && <Loader />}
      {!isPageLoading && (
        <>
          <FacebookPixel />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
