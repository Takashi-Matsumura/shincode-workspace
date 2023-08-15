import React from "react";

const TitleHeader = () => {
  return (
    <div className="bg-gray-400 flex">
      <div className="px-5">
        <p>私のサポート</p>
        <div className="flex items-center">
          <p>◀</p>
          <p className="text-3xl text-center w-44">15日（火）</p>
          <p>▶</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex w-full">
          <div className="w-full"></div>
          <p className="w-full text-right">表示変更</p>
        </div>
        <div className="flex w-full justify-end">
          <img
            className="w-10 h-10 rounded-full px-1 py-1"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <img
            className="w-10 h-10 rounded-full px-1 py-1"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <img
            className="w-10 h-10 rounded-full px-1 py-1"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
