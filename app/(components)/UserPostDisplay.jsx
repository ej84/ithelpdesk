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
    <div className="flex flex-col bg-card shadow-lg p-20 m-10">
      <div className="block pb-3 m-3 w-fit h-fit">
        <h3>{userPost.postTitle}</h3>
      </div>
      <div className="flex flex-col">
        <p>Category: {userPost.postCategory}</p>
        <p>Created At: {formatTimestamp(userPost.createdAt)}</p>
        <p>{userPost.postBody}</p>
      </div>
    </div>
  );
};

export default UserPostDisplay;
