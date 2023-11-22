import React from "react";
import UserPostDisplay from "@/app/(components)/UserPostDisplay";
import UserPostForm from "../../(components)/UserPostForm";

const getUserPosts = async () => {
  try {
    const resp = await fetch("http://localhost:3000/api/UserPosts", {
      cache: "no-store",
    });
    return resp.json();
  } catch (error) {
    console.log("Failed to get posts", error);
  }
};

const UserPostPage = async () => {
  const { userposts } = await getUserPosts();

  if (!userposts) {
    return <p>No posts yet.</p>;
  }

  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-4">
      {userposts?.map((filteredPost, index) => (
        <UserPostDisplay id={index} key={index} userPost={filteredPost} />
      ))}
    </div>
  );
};

export default UserPostPage;
