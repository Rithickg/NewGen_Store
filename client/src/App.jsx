import { Header } from "./components/Header"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getProducts } from "./utils/Fetcher"
// import { getProducts } from "./utils/Fetcher"


export const App = () => {
  const getProducts = async () => {
    await fetch("http://localhost:2002/api/product/get-all-products").then((res) => res.json()).then((data) => console.log("beta", data))
  }
  getProducts()
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:2002/api/product/get-all-products")
      return data
    }
  })

  console.log("Data", data)
  return (
    <>
      <Header />
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

