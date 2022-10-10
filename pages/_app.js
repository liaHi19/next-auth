import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import { DialogProvider } from "../context/DialogContext";

import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
