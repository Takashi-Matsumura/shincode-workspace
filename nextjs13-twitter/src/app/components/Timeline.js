import React from "react";
import Post from "./Post";
import TitleHeader from "./TitleHeader";

const Timeline = ({ timeline }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TitleHeader />
      {timeline.map((tweet) => (
        <Post key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Timeline;
