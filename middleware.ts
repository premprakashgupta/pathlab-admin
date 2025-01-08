import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { BASE_URL } from '@/config/config';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token'); // Extract the token from cookies
    const url = req.nextUrl.clone();
    console.log("root middleware")
    
console.log(url.pathname)
    if (url.pathname === '/super/login') {
        console.log(token)
        if (token) {
            try {
                // Call /auth/me to validate the token
                const response = await axios.get(`${BASE_URL}/auth/v1/me`,{headers: {
                    "Content-Type":"application/json","Cookie":`${token.name}=${token.value}`
                }, withCredentials: true,});
                console.log(response.data)
                if (response.status === 200) {
                    // Token is valid, redirect to dashboard
                    url.pathname = '/super/dashboard';
                    return NextResponse.redirect(url);
                }
            } catch (err) {
                console.log(err)
                // Ignore errors and proceed to show the login page or something went wrong page
                return NextResponse.next();
            }
        }
        // Allow access to login if no token or token invalid
        return NextResponse.next();
    }

    // Protect other routes in /super/
    // if (!token) {
    //     url.pathname = '/super/login';
    //     return NextResponse.redirect(url);
    // }

    // try {
    //     // Call /auth/me to validate the token
    //     await axiosInstance.get(`${BASE_URL}/auth/me`);
    // } catch (err:any) {
    //     if (err.response && err.response.status === 401) {
    //         // Token expired or invalid, redirect to login
    //         url.pathname = '/super/login';
    //         return NextResponse.redirect(url);
    //     }
    // }

    return NextResponse.next();
}

export const config={
    matcher:["/super/:path*"]
}