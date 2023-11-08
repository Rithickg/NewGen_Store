import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useQuery } from '@tanstack/react-query';

const schema = yup.object().shape({
    name: yup.string().min(2).required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phone_number: yup.number().required("Phone Number is required"),
    password: yup.string().min(8).required("Password is required").matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
    ),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
}).required("Confirm Password is required");

export const SignUp = () => {
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

    const { register, handleSubmit, formState, watch } = form;
    const { errors } = formState;

    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleSignUp)} noValidate>
                <label>Name</label>
                <input type="text" name="name" {...register("name")} />
                <p>{errors.name?.message}</p>
                <label>Email</label>
                <input type="email" name="email" {...register("email")} />
                <p>{errors.email?.message}</p>
                <label>Phone Number</label>
                <input type="number" name="phone_number" {...register("phone_number")} />
                <p>{errors.phone_number?.message}</p>
                <label>Password</label>
                <input type="password" name="password" {...register("password")} />
                <p>{errors.password?.message}</p>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" {...register("confirmPassword")} />
                <p>{errors.confirmPassword?.message}</p>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
