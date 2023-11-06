import { Footer } from "./Footer"
import { NavBar } from "./NavBar"
import { Product } from "./Product"

export const ProductPage = () => {
    return (
        <>
            <NavBar />
            <Product />
            <div>Similar products</div>
            <div>Bought Togather</div>
            <div>Recently Viewed</div>
            <Footer />
        </>
    )
}
