import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App ({ Component, pageProps}: AppProps) {
    return (
    <>


    <Head>
        
        <link rel="shortcut icon" href="public/favicon.ico" />   
        <link rel="shortcut icon" href="public/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""/>


        <meta
         name="description"
         content= "A simple project to show my favorits spots in the world" />
        
    </Head>

        
        <GlobalStyles />

        <NextNProgress 
        color="hsl(238, 94%, 21%)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        />
    <Component {...pageProps} />
    

    </>
    )    
}



export default App