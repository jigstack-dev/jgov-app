import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Head>
                <title>JGov - Jigstack Governance Platform</title>
                <meta
                    name="description"
                    content="Jigstack Governance Platform."
                />
                <meta
                    property="og:url"
                    content={'https://www.google.com'}
                    key="ogurl"
                />
                <meta property="og:image" content={'/meta.png'} key="ogimage" />
                <meta
                    property="og:site_name"
                    content="Jigstack Governance Platform."
                    key="ogsitename"
                />
                <meta
                    property="og:title"
                    content="JGov - Jigstack Governance Platform."
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content="Jigstack Governance Platform."
                    key="ogdesc"
                />
                <link rel="icon" href="/favicon.ico" />'
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.google.com" />
                <meta
                    property="twitter:title"
                    content="JGov - Jigstack Governance Platform."
                />
                <meta
                    property="twitter:description"
                    content="Jigstack Governance Platform."
                />
                <meta property="twitter:image" content={'/meta.png'} />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
