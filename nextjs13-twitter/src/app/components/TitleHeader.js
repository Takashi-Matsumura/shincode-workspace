import Link from "next/link";
import React from "react";

const TitleHeader = () => {
  return (
    <div className="bg-gray-400 flex pt-2">
      <div className="container mx-auto justify-between items-center pl-4">
        <Link
          href={`/`}
          className="rounded border-black px-3 py-2 hover:bg-gray-500"
        >
          {/* 私のサポート */}
        </Link>
        <div className="flex items-center py-2">
          <p>◀</p>
          <p className="text-3xl text-center font-medium">15日（火）</p>
          <p>▶</p>
        </div>
      </div>
      <div className="pr-4">
        <div>
          <Link
            href={`/fullcalendar`}
            className="rounded border-black px-3 py-2 hover:bg-gray-500"
          ></Link>
        </div>
        <div className="flex py-2 space-x-1">
          <button className="w-10 h-10 rounded-full px-1 py-1 bg-gray-100 hover:bg-gray-300">
            松
          </button>
          <button className="w-10 h-10 rounded-full px-1 py-1 bg-gray-100 hover:bg-gray-300">
            幸
          </button>
          <button className="w-10 h-10 rounded-full px-1 py-1 bg-gray-100 hover:bg-gray-300">
            板
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
