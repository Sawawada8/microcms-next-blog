import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link
            rel="icon"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/smiling-face-with-hearts_1f970.png"
          />
        </Head>
        <body>
          <Main />
          {/* <div id="modal" /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
