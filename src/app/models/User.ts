export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  location: string;
  username: string;
  pageContent: any;
  password: string;
  friends: Array<string>;
  lastLogin: any;
  created: any;
  boards: Array<string>;
  posts: Array<any>;
}
