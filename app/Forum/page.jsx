import Link from "next/link";
import React from "react";

const Forum = () => {
  return (
    <div className="flex justify-center">
      <button className="p-4 bg-card">
        <Link href="Forum/UserPostPage">New Post</Link>
      </button>
    </div>
  );
};

export default Forum;
