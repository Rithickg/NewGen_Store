import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { signInUser } from "../utils/Fetcher"
import SignInPageImg from "../assets/ecommerce/Ecommerce-web-page-pana.svg"

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
        <div>
            <div>
                <h2>Welcome to NewGen Store</h2>
                <img src={SignInPageImg} alt="NewGen Store" width="300" height="300" />
            </div>
            <div>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" {...register("email")} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register("password")} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <p>Don&rsquo;t have an account? <Link to="/signup">Sign Up</Link></p>

                    <button type="submit">Sign In</button>
                </form>
            </div>

        </div >
    )
}
