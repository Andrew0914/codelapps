export interface Author {
  name: string;
  avataUrl: string;
}

export interface Tag {
  name: string;
  url: string;
}

export interface Post {
  slug: string;
  title: string;
  author: Author;
  date: Date;
  subtitle?: string;
  excerpt?: string;
  thumbnail: string;
  tags?: Tag[];
  recommendations?: string[];
}

export interface PostParams {
  params: {
    lang: "en" | "es";
    slug: string;
  };
}
