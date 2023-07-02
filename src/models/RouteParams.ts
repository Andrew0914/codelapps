export interface RoutePostParams {
  params: {
    lang: 'en' | 'es'
    slug: string
  },
  searchParams: {
    [key: string]: string
  }
}

export interface RouteBlogParams {
  params: {
    lang: 'en' | 'es'
  },
  searchParams: {
    tag: string
  }
}