'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const handleLogin = (data) => {
        console.log(data);
    }
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
                </form>
                <p>Don&apos;t have an account?
                    <span className='underline hover:text-green-500'>
                        <Link href="/register"> Register Now</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;