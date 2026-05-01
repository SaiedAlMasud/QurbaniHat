'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const router = useRouter(); // Add this
    const searchParams = useSearchParams(); // Add this
    const returnUrl = searchParams.get('returnUrl') || '/';
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const handleLogin = async (data) => {
        console.log(data);
        const { email, password } = data;
                const {data: userdata, error } = await authClient.signIn.email({
                    email: email, // required
                    password: password, // required
                    rememberMe:true,
                    callbackURL: "/",
                })
            if(error){
                alert(error.message);
            }
            if (userdata) {
            alert("Login Successful");
            router.push(returnUrl); // Redirect to return URL or home
        }
    }
    const handleSignInGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: returnUrl,
        });
    };
    return (
        <div className='container mx auto min-h-[60vh] flex justify-center items-center'>
            <div className="p-10 rounded-xl bg-base-200">
                <h1 className='text-2xl font-bold text-center text-green-700'>Login Your Account</h1>
                <form action="" className='flex flex-col gap-2 justify-center' onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-gray-500 text-md">Email</legend>
                        <input {...register("email",{required:"Email required"})} type="text" className="input" placeholder="Type here" />
                        {errors.email && <p className='text-red-600 mt-3 text-[14px]'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-gray-500 text-md">Password</legend>
                        <input {...register("password" ,{required:"Password required"})} type="password" className="input" placeholder="Type here" />
                        {errors.password && <p className='text-red-600 mt-3 text-[14px]'>{errors.password.message}</p>}
                    </fieldset>
                    <input type="submit" value="Login" className='btn text-lg bg-green-600 text-white px-7 hover:bg-green-800' />
                    <p>Don&apos;t have an account?
                    <span className='underline hover:text-green-500'>
                        <Link href="/register"> Register Now</Link>
                    </span>
                </p>
                </form>
                
                <p className="text-lg font-bold text-center">Or</p>
                    <button onClick={handleSignInGoogle} className='flex justify-center items-center gap-4 mx-auto rounded-md py-1 text-md bg-green-600 text-white px-3 hover:bg-green-800'><FaGoogle /> SignIn With Google</button>
            </div>
        </div>
    );
};

export default LoginPage;