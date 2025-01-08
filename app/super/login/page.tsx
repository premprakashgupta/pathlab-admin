"use client"

import { isEmail, isStrongPassword } from '@/app/helpers/validators'
import { ToastContainer, useToast } from '@/app/toast'
import { loginAsync, selectAuthUser, selectAuthError, selectAuthMessage, selectAuthStatus } from '@/lib/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'
import loaderGif from '@/public/images/loader.gif'
import React, { FormEvent, ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {}
type errorMsgtype ={
    field:string|null,
    error:boolean,
    errorMsg:string
}
const Login = (props: Props) => {
     const dispatch = useAppDispatch();
     const router = useRouter();
     const apiStatus=useAppSelector(selectAuthStatus);
     const apiData=useAppSelector(selectAuthUser);
     const apiError=useAppSelector(selectAuthError);
     const apiMessage=useAppSelector(selectAuthMessage);

     const { showToast } = useToast();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [rememberMe,setRemeberMe]=useState(false);
    const [error,setError]=useState<errorMsgtype>({field:null,error:false,errorMsg:""})

    const handleSuperLogin =(e:FormEvent)=>{
        e.preventDefault(); 

        // validator
        const isEmailResult=isEmail(email);
        const isPasswordResult=isStrongPassword(password)


        // if(isEmailResult.status){
        //     setError({...error,field:"email",error:true,errorMsg:isEmailResult.msg});
        //     return false
        // }
        
        // if(isPasswordResult.status){
        //     setError({...error,field:"password",error:true,errorMsg:isPasswordResult.msg});
        //     return false
        // }
        // setError({field:null,error:false,errorMsg:""})
        console.log("login hit")
        const loginAgent='admin';
        const deviceId="random-key"
        dispatch(loginAsync({email,password,loginAgent,deviceId}))
        
    }

    useEffect(()=>{
        console.log("useEffect")
        if(apiStatus==='succeeded' && apiMessage){
            console.log("useEffect -> succeeded")
            setEmail("")
            setPassword("")
            setRemeberMe(false)
            showToast(apiMessage,'success')
            router.push('/super/dashboard');
        }
        if(apiStatus==='failed' && apiMessage){
            console.log("useEffect -> failed")
            showToast(apiMessage,'error')
        }
    },[apiStatus])
    return (
        <>
        <div>
            <section className="bg-gray-200 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image width={120} height={60} className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSuperLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    {error.field==="email" && error.error && <div className='text-sm text-red-600 py-2'>{error.errorMsg}</div>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    {error.field==="password" && error.error && <div className='text-sm text-red-600 py-2'>{error.errorMsg}</div>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" onChange={(e)=>setRemeberMe(e.target.checked)} checked={rememberMe} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href="/super/forget-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>
                                <button type="submit" disabled={apiStatus==='loading'} className="w-full text-white bg-light-primary-600 hover:bg-light-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-dark-primary-600 dark:hover:bg-dark-primary-700 dark:focus:ring-dark-primary-800 flex justify-center items-center gap-3"> <Image width={20} height={20} src={loaderGif} alt='loader' className={`${apiStatus==='loading' ? "block":"hidden"}`} />  {apiStatus==="loading"?"wait...":"Sign in"}</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <ToastContainer/>
        </>
    )
}
export default Login