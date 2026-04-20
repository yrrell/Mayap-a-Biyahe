import Head from 'next/head';
import type { AppProps } from "next/app";
import { LocationProvider } from "../context/LocationContext";

// Comment out the local CSS import that is failing
// import "../styles/globals.css"; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationProvider>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Component {...pageProps} />
    </LocationProvider>
  );
}