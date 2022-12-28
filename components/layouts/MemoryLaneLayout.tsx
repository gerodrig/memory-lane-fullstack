import { FC, ReactNode, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Navbar, Footer, Loader } from '../ui/';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface MemoryLaneLayoutProps {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children?: ReactNode;
}

export const MemoryLaneLayout: FC<MemoryLaneLayoutProps> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {

  const [loading, setLoading] = useState(false);

  //iniialized AOS
  useEffect(() => {
    AOS.init();
  }, [])

  //check if window is loaded
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('load', () => {
  //       setLoading(false);
  //     });
  //   }
  // }, [])

  //if window is not loaded, show loading screen
  if (loading) {
    return < Loader />;
  }

  return (
    <>
      <Head>
        <title>
          {title ||
            `Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON`}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
      
        {/* display meta if image is available */}
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
        
      </Head>

      {/* Navbar here */}
      <Navbar />

      <main>{children}</main>

      {/* insert footer here */}
      <Footer />
    </>
  );
};
