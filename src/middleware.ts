import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); // ادامه‌ی پردازش درخواست
}

export const config = {
  matcher: ["/:path*"], // این خط باعث می‌شود middleware در تمامی مسیرها اجرا شود
};
