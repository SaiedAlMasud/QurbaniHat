'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import 'animate.css';

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams(); 
    const returnUrl = searchParams.get('returnUrl') || '/';
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    const handleLogin = async (data) => {
        const { email, password } = data;
        const { data: userdata, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        if(error){
            alert(error.message);
        }
        if (userdata) {
            alert("Login Successful");
            router.push(returnUrl);
        }
    };
    
    const handleSignInGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: returnUrl,
        });
    };
    
    return (
        <div className="p-10 rounded-xl bg-base-200 animate__animated animate__lightSpeedInLeft">
            <h1 className='text-2xl font-bold text-center text-green-700'>Login Your Account</h1>
            <form className='flex flex-col gap-2 justify-center' onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-gray-500 text-md">Email</legend>
                    <input {...register("email",{required:"Email required"})} type="email" className="input w-full" placeholder="your@email.com" />
                    {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-gray-500 text-md">Password</legend>
                    <input {...register("password" ,{required:"Password required"})} type="password" className="input w-full" placeholder="••••••••" />
                    {errors.password && <p className='text-red-600 mt-1 text-sm'>{errors.password.message}</p>}
                </fieldset>
                <input type="submit" value="Login" className='btn bg-green-600 text-white hover:bg-green-700 w-full mt-2' />
                <p className="text-center mt-2">
                    Don&apos;t have an account?
                    <span className='underline hover:text-green-500 ml-1'>
                        <Link href="/register"> Register Now</Link>
                    </span>
                </p>
            </form>
            
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-base-200 text-gray-500">Or</span>
                </div>
            </div>
            
            <button onClick={handleSignInGoogle} className='w-full flex justify-center items-center gap-2 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors'>
                <FaGoogle /> Sign In With Google
            </button>
        </div>
    );
}