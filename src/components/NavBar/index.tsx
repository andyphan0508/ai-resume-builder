import { images } from "@/assets/images";
import Image from "next/image";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow">
      <div className="text-3xl font-bold text-blue-600">
        <Image src={images.brand_long} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="space-x-4">
        <Link
          href="/pages/about"
          className="text-gray-700 hover:text-indigo-600"
        >
          About
        </Link>
        <a href="/pricing" className="text-gray-700 hover:text-indigo-600">
          Pricing
        </a>

        <a href="/login" className="text-indigo-600 font-medium">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
