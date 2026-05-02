import { Suspense } from 'react';
import LoginForm from './LoginForm';

function LoginLoading() {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <div className='container mx-auto min-h-[60vh] flex justify-center items-center'>
            <Suspense fallback={<LoginLoading />}>
                <LoginForm />
            </Suspense>
        </div>
    );
}