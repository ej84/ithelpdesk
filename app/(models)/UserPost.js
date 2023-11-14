import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const UserPostSchema = new Schema(
  {
    postTitle: String,
    postBody: String,
    postCategory: String,
  },
  {
    timestamps: true,
  }
);

const UserPost =
  mongoose.models.UserPost || mongoose.model("UserPost", UserPostSchema);

export default UserPost;
