import HomeTemplate from "templates/Home";
import { MapProps } from "components/Map"
import client from "graphql/client";
import { GET_PLACES } from "graphql/queries";
import { GetPlacesQuery } from "graphql/generated/graphql";

export default function Home ({places}: MapProps){
  console.log(places)
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  console.log(places)
  return{
    revalidate: 5,
    props: {
      places
    }
  }
}