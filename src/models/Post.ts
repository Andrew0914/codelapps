export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Tag {
  name: string;
  url: string;
}

export interface PostBase {
  title: string;
  slug: string;
  thumbnail: string;
}
export interface Post extends PostBase {
  slug: string;
  title: string;
  author: Author;
  date: string;
  subtitle?: string;
  excerpt?: string;
  thumbnail: string;
  tags?: Tag[];
  recommendations?: PostBase[];
}
