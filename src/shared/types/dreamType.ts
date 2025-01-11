export type TPost = {
  title: string;
  content: string;
  category: string;
};

export type TRank = {
  postId: number;
  title: string;
  likes: number;
};

export type TMyDream = {
  id: number;
  title: string;
  open: boolean;
  category: string;
};
