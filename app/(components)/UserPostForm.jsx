"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserPostForm = () => {
  // Define router
  const router = useRouter();
  // Default UserPost Dataset
  const startingUserPosttData = {
    postTitle: "",
    postBody: "",
    postCategory: "General Discussion",
  };

  const [formData, setFormData] = useState(startingUserPosttData);
  // Handles value changes with the user input
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // Set [name]'s value as the user input value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Handles user input data submission on click
  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("/api/UserPosts", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-Type": "application/json",
    });

    if (!resp.ok) {
      throw new Error("Failed to create post.");
    }

    router.refresh();
    router.push("/Forum");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-4 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>New Post</h3>
        <label>Title</label>
        <input
          id="postTitle"
          name="postTitle"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.postTitle}
        />
        <textarea
          id="postBody"
          name="postBody"
          onChange={handleChange}
          required={true}
          value={formData.postBody}
          rows="5"
        />
        <label>Post Category</label>
        <select
          name="postCategory"
          value={formData.postCategory}
          onChange={handleChange}
        >
          <option value="General Discussion">General Discussion</option>
          <option value="Question & Answer">Question & Answer</option>
          <option value="Announcements">Announcements</option>
          <option value="Others">Others</option>
        </select>
        <input type="submit" className="btn" value="Create Post" />
      </form>
    </div>
  );
};

export default UserPostForm;
