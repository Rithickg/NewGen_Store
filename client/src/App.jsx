import { Header } from "./components/Header"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./utils/Fetcher"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { OfferSale } from "./components/OfferSale"

export const App = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })
  console.log("data", data)
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <OfferSale />
      <NavBar />
      <Header />
      <Footer />
    </>
  )
}

