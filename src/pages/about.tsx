import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import PageTemplate  from 'templates/Pages'

export default function AboutPage() { return <PageTemplate />
}

export async function getStatiPaths(){
  const {pages} = await client.request(GET_PAGES)

  const paths = pages.map(({slug})=>({
    params:{slug}
  }))

  return {paths}
}

//export const getStaticprops = async () => {
  

  //console.log(pages)


//return {
 // props: {}
//}


//}