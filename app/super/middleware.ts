import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { BASE_URL } from '@/config/config';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token'); // Extract the token from cookies
    const url = req.nextUrl.clone();
    const pathArray=['/super/dashboard']
    console.log("super middleware")
    
    console.log(url.pathname)
    if (pathArray.includes(url.pathname)) {
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
                    const user = response.data.data; // Assuming the user object contains a `role` field
                    const userRole = user.role;

                    // Example: Allow only 'admin' or 'superadmin' roles for /super
                    if (!userRole || userRole!=='super') {
                        console.log(`Access denied for role: ${userRole}`);
                        url.pathname = '/super/login'; // Redirect to login or unauthorized page
                        return NextResponse.redirect(url);
                    }
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

    return NextResponse.next();
}

export const config={
    matcher:["/super/:path*"]
}