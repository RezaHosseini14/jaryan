import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-spGreen h-screen grid place-content-center">
      <div className="w-96 h-56 bg-white rounded-2xl flex flex-col gap-2 items-center justify-center">
        <h1 className="text-9xl">404</h1>
        <span className="text-3xl">صفحه مورد نظر یافت نشد</span>

        <Link className="!text-spGreen font-bold text-xl px-4 py-2" href="/dashboard">
          بازگشت به داشبورد
        </Link>
      </div>
    </div>
  );
}
