import { StyledFooter, FooterSection, Subscribe, SocialLink } from "../styles/Footer.styled"
import { MdUnsubscribe } from "react-icons/md"
import { LuSendHorizonal } from "react-icons/lu"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterSection>
                <h2>NewGen</h2>
                <h3>Subscribe</h3>
                <p>Get the latest news from NewGen</p>
                <Subscribe>
                    <MdUnsubscribe />
                    <input type="text" placeholder="Enter your email" />
                    <button><LuSendHorizonal /></button>
                </Subscribe>
            </FooterSection>
            <FooterSection>
                <h3>Support</h3>
                <p>Ram nagar,Anna Salai,<br />
                    Chennai-600002</p>
                <p>+919638527412</p>
                <p>newGen@gmail.com</p>
            </FooterSection>
            <FooterSection>
                <h3>Account</h3>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </FooterSection>
            <FooterSection>
                <h3>Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Shipping Policy</p>
                <p>Return Policy</p>
                <p>FAQ</p>
            </FooterSection>
            <FooterSection>
                <h3>Download App</h3>
                <p>Google Play</p>
                <p>App Store</p>
                <SocialLink >
                    <AiFillFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                </SocialLink>
            </FooterSection>
        </StyledFooter>
    )
}
