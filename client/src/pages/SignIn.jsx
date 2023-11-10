import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { signInUser } from "../utils/Fetcher"
import SignInPageImg from "../assets/ecommerce/Ecommerce-web-page-pana.svg"
import { Container, Wrapper, ContentWrapper, Title, Image, FormWrapper, FormTitle, Input, ErrorMessage, SignUpLink, SignInButton } from '../styles/SignIn.Styled';

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required")
})

export const SignIn = () => {
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [cookie, setCookie] = useCookies()
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const signInMutation = useMutation({
        mutationFn: signInUser,
        onSuccess: (data) => {
            const auth = {
                "token": data.token,
                "userId": data.User._id
            }
            console.log(auth)
            setCookie("auth", auth, { path: '/', maxAge: 3600000 })
            console.log("SignIp success");
            navigate("/");
        },
        onError: (error) => {
            console.error("SignIp failed", error);
        },
    })
    const handleSignIn = async (values) => {
        try {
            await signInMutation.mutateAsync(values);
        } catch (error) {
            console.error("SignIp failed", error);
        }
    }
    return (
        <Container>
            <Wrapper>
                <ContentWrapper>
                    <Title>Welcome to NewGen Store</Title>
                    <Image src={SignInPageImg} alt="NewGen Store" width="300" height="300" />
                </ContentWrapper>
                <FormWrapper>
                    <FormTitle>Sign In</FormTitle>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Input type="text" id="email" {...register("email")} />
                            <ErrorMessage>{errors.email?.message}</ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input type="password" id="password" {...register("password")} />
                            <ErrorMessage>{errors.password?.message}</ErrorMessage>
                        </div>
                        <SignUpLink>Don&rsquo;t have an account? <Link to="/signup">Sign Up</Link></SignUpLink>

                        <SignInButton type="submit">Sign In</SignInButton>
                    </form>
                </FormWrapper>
            </Wrapper>
        </Container>
    )
}
