/* eslint-disable @next/next/no-img-element */
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
// import { FB_PIXEL_ID } from '../lib/fpixel/fpixel';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="q6VmvA9x4XZUl8LKplK5x-kidX9LDsghquGtOF73blI" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
