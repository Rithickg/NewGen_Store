// import { Header } from "./components/Header"
// import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState, useEffect } from "react"
// import { getProducts } from "./utils/Fetcher"


export const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:2002/api/product/get-all-products")
  //     return data
  //   }
  // })

  // console.log("Data", data)
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error loading data.</div>;
  // }
  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:2002/api/product/get-all-products';

    // Use Axios to make the GET request
    axios.get(apiUrl)
      .then((response) => {
        // On success, update the data state with the response data
        setData(response.data);
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        // On error, update the error state
        setError(err);
        setLoading(false); // Set loading to false
      });
  }, []);
  console.log("Data", data)
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );

  // Render your data here when the query is successful
  // return <div>Data: {data}</div>;
  // return (
  //   <>
  //     <Header />
  //     <div>{JSON.stringify(data)}</div>
  //   </>
  // )
}

