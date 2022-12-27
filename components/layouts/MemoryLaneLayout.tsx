import 'bootstrap/dist/css/bootstrap.min.css';
import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar, Footer } from '../ui/';

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
