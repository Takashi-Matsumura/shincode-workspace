import Link from "next/link";
import React from "react";

const Post = ({ tweet }) => {
  return (
    <div className="bg-white border-2">
      <div className="flex flex-auto items-center">
        <div className="w-full px-10 pt-1">
          <p>
            {tweet.period.begin}-{tweet.period.end} ({tweet.date})
          </p>
          <p className="font-light text-3xl">{tweet.guest.name}</p>
        </div>
        <div className="flex w-full items-center">
          <div>
            {tweet.helper.map((helper) => (
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full px-1 py-1"
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
                />
                <p className="text-sm px-5">{helper.name}</p>
              </div>
            ))}
          </div>
          <p>{tweet.transportation}</p>
        </div>
      </div>
      {tweet.text && (
        <div className="text-center border py-4 text-lg mx-10 my-2 bg-gray-100">
          {tweet.text}
        </div>
      )}
    </div>
  );
};

export default Post;
