import Link from "next/link";
import React from "react";

const Forum = () => {
  return (
    <div className="flex justify-center">
      <div className="justify-start">
        <h3>Forum</h3>
      </div>
      <div>
        <button className="p-2 bg-card rounded-md">
          <Link href="Forum/UserPostPage">New Post</Link>
        </button>
      </div>
    </div>
  );
};

export default Forum;
