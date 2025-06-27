import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Import from 'jose' for token verification

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";

  const token = request.cookies.get("token")?.value || "";

  let role;
  let currentPath;
  if (token) {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.TOKEN_SECRET!)
    );
    role = payload.role;
    currentPath = request.nextUrl.pathname;
  }

  // Only redirect if not already on the target page
  // console.log("role", role);
  // console.log("currentPath", currentPath);

  if (role === "student" && !currentPath?.startsWith("/student")) {
    return NextResponse.redirect(new URL("/student", request.url));
  } else if (role === "supervisor" && !currentPath?.startsWith("/supervisor")) {
    return NextResponse.redirect(new URL("/supervisor", request.url));
  } else if (role === "admin" && !currentPath?.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/aboutme",
    "/verifyemail",
    "/logout",
    "/student/:path*",
    "/supervisor",
    "/admin",
    "/create",
  ],
};
