import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <div className="bg-white border-2">
      <div className="flex flex-auto items-center">
        <div className="w-full px-10 pt-1">
          <p>13:00-14:00 (08/15)</p>
          <p className="font-light text-xl">沖縄　太郎</p>
        </div>
        <div className="flex w-full items-center">
          <div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full px-1 py-1"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <p className="text-sm px-5">ヘルパー花子</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full px-1 py-1"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <p className="text-sm px-5">ヘルパー次郎</p>
            </div>
          </div>
          <p>社用車</p>
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  );
  // return (
  //   <div className="bg-white shadow-md rounded p-4 mb-4">
  //     <div className="mb-4">
  //       <div className="flex items-center mb-2">
  //         <img
  //           className="w-10 h-10 rounded-full mr-2"
  //           src="https://via.placeholder.com/150"
  //           alt="User Avatar"
  //         />
  //         <div>
  //           <h2 className="font-semibold text-md">username</h2>
  //           <p className="text-gray-500 text-sm">08/15 07:07</p>
  //         </div>
  //       </div>
  //       <p className="text-gray-700">はじめての投稿です。</p>
  //     </div>
  //   </div>
  // );
};

export default Post;
