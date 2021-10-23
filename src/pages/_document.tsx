import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// For media styles
import { Html, Head, Main, NextScript } from 'next/document';
import { mediaStyles } from './media';
export default class MyDocument extends Document {
  // For media SSR with layout media from @artsy/fresnel inject css to head
  render() {
    return (
      <Html>
        <Head>
          <style
            type='text/css'
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  // For SSR with styled-components
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
