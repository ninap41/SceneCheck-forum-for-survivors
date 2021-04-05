export interface Post {
  id: string;
  author: string;
  content: string;
  dateCreated: string;
  replies: Array<Post>;
  depth: number;
  upvotes: number;
}

export interface Thread {
  id: string;
  author: string;
  title: string;
  tags: Array<string>;
  description: string;
  dateCreated: string;
  lastActive: string;
  topPoster: string;
  posts: Array<Post>;
}
