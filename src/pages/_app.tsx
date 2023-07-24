import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App ({ Component, pageProps}: AppProps) {
    return (
    <>


    <Head>
        <title>My Trips </title>
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
    <Component {...pageProps} />
    

    </>
    )    
}



export default App