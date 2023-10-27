import { Container } from "../styles/OfferSale.styled"
import { Link } from "react-router-dom"

export const OfferSale = () => {
    return (
        <Container>
            <p>Summer Sale is on for all products -OFF 50%! <Link to="/offer">shopNow</Link></p>
        </Container>
    )
}
