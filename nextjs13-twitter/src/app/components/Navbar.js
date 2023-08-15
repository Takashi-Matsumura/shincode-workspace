import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl">
          <Link href="/" className="text-2xl font-medium">
            Care & Frail
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <>
              <Link
                href={`/calendar`}
                className="rounded border-x border-y border-gray-400 bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
              >
                プロフィール
              </Link>
              <Link
                href={`/`}
                className="rounded border-x border-y border-gray-400 bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
              >
                ログアウト
              </Link>
            </>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
