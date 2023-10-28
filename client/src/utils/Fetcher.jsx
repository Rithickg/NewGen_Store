export const getProducts = async () => {
    await fetch("http://localhost:2002/api/product/get-all-products").then((res) => res.json()).then((data) => console.log(data))
}