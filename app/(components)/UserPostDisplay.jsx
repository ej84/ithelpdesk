import Link from "next/link";
import DeleteBlock from "./DeleteBlock";

const UserPostDisplay = ({ userPost }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-20 m-2">
      <h4>{userPost.postTitle}</h4>
      <p>{userPost.postCategory}</p>
      <p>Created At: {formatTimestamp(userPost.createdAt)}</p>
      <textarea>{userPost.postBody}</textarea>
    </div>
  );
};

export default UserPostDisplay;
