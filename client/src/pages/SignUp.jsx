import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '../utils/Fetcher';
import { useCookies } from "react-cookie"
import SignInPageImg from "../assets/ecommerce/Ecommerce-web-page-pana.svg"
import { Container, Wrapper, ContentWrapper, Title, Image, FormWrapper, FormTitle, Input, ErrorMessage, SignInLink, SignUpButton } from '../styles/SignUp.Styled';




const schema = yup.object().shape({
  name: yup.string().min(2).required("Name is required"),
  email: yup.string().email().required("Email is required"),
  phone_number: yup.string().required("Phone Number is required"),
  password: yup.string().min(8).required("Password is required").matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
  ),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
}).required("Confirm Password is required");

export const SignUp = () => {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies()
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const signUpMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      const auth = {
        "token": data.token,
        "userId": data.User._id
      }
      console.log(auth)
      setCookie("auth", auth, { path: '/', maxAge: 3600000 })
      console.log("SignUp success");
      navigate("/");
    },
    onError: (error) => {
      console.error("SignUp failed", error);
    },
  });
  const handleSignUp = async (values) => {
    try {
      await signUpMutation.mutateAsync(values);
    } catch (error) {
      console.error("SignUp failed", error);
    }
  }
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Title>Welcome to </Title>
          <Title>NewGen Store</Title>
          <Image src={SignInPageImg} alt="NewGen Store" />
        </ContentWrapper>
        <FormWrapper>
          <FormTitle>Sign Up</FormTitle>
          <form onSubmit={handleSubmit(handleSignUp)} noValidate>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" {...register("name")} />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <label htmlFor='email'>Email</label>
            <Input type="email" id='email' name="email" {...register("email")} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <label htmlFor='phone_number'>Phone Number</label>
            <Input type="number" id='phone_number' name="phone_number" {...register("phone_number")} />
            <ErrorMessage>{errors.phone_number?.message}</ErrorMessage>
            <label htmlFor='password'>Password</label>
            <Input type="password" id='password' name="password" {...register("password")} />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <label htmlFor='confirm_password'>Confirm Password</label>
            <Input type="password" id='confirm_password' name="confirmPassword" {...register("confirmPassword")} />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
            <SignInLink>Already have an account?<Link to="/signin"> SignIn</Link></SignInLink>
            <SignUpButton type="submit">Sign Up</SignUpButton>
          </form>
        </FormWrapper>
      </Wrapper>
    </Container>
  )
}
