import { Post } from "./Post";

export interface Thread {
  _id: string;
  author: string;
  title: string;
  tags: Array<string>;
  description: string;
  dateCreated: string;
  lastActive: string;
  topPoster: string;
  posts: Array<Post>;
}
