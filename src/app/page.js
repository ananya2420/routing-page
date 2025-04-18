import Image from "next/image";
import logo from "./icon.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div id="Home" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Logo */}
      <Image src={logo} alt="A newspaper" width={150} height={150} className="rounded-full shadow-md" />

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mt-6">Next.js Routing & Page Routing</h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mt-4 text-center max-w-2xl">
        Next News is here to deliver you all the latest news—concise & unbiased.
      </p>

      <p className="text-gray-600 text-md mt-2 text-center max-w-2xl">
        Next News aims to provide you with the latest news in a concise & unbiased manner. We strive to deliver news in
        a way that is easy to understand and to the point. We want to keep you informed without overwhelming you with
        unnecessary information.
      </p>

      {/* Button */}
      <Link href="/news" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Read the Latest News
      </Link>
    </div>
  );
}
