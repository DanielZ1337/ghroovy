import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const origin = request.nextUrl.origin
    const pathname = request.nextUrl.pathname

    // if /admin or /api/admin
    if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
        // If no token, redirect to login page
        if (!token) {
            return NextResponse.redirect(`${origin}/auth/signin`);
        }

        // If there is a token, but not an admin, redirect to home page
        if (token && token.role !== "admin") {
            return NextResponse.redirect(`${origin}/`);
        }
    }

    // if /auth/signin or /api/auth/signin
    if (pathname.startsWith("/auth/signin") || pathname.startsWith("/api/auth/signin")) {
        // If no token, redirect to login page
        /*if (!token) {
            return NextResponse.redirect(`${origin}/auth/signin`);
        }*/

        // if already token, redirect to admin dashboard
        if (token && token.role === "admin") {
            return NextResponse.redirect(`${origin}/admin`);
        }

        // if already token, redirect to user dashboard
        if (token && token.role === "user") {
            return NextResponse.redirect(`${origin}/account`);
        }
    }
}

export const config = { matcher: ["/admin/:path*","/api/admin/:path*", "/auth/signin", "/api/auth/signin"] };