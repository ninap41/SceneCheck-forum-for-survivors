export interface Post {
  _id: string;
  author: string;
  content: string;
  dateCreated: string;
  replies: Array<Post>;
  depth: number;
  upvotes: number;
}
