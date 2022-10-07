import Head from "next/head";

import { DialogProvider } from "../context/DialogContext";

import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DialogProvider>
      <Layout>
        <Head>
          <title>Next Auth</title>
          <meta name="description" content="Next Auth" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </DialogProvider>
  );
}

export default MyApp;
