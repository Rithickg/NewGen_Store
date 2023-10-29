import { Header } from "./components/Header"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./utils/Fetcher"


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
      <Header />
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  )
}

