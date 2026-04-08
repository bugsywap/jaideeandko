const HYGRAPH_API = 'https://us-west-2.cdn.hygraph.com/content/cmng0vdzi00ec07wedv3fyibe/master';

// Optional: you can set this in .env.local like HYGRAPH_TOKEN="..."
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

async function fetchAPI(query: string, variables = {}) {
  try {
    const res = await fetch(HYGRAPH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(HYGRAPH_TOKEN && { Authorization: `Bearer ${HYGRAPH_TOKEN}` }),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    });

    const json = await res.json();
    if (json.errors) {
      console.error("Hygraph errors:", json.errors);
      return { data: null, error: json.errors[0] };
    }
    return { data: json.data, error: null };
  } catch (error) {
    console.error("Fetch API errors:", error);
    return { data: null, error };
  }
}

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category?: string;
  readTime?: string;
  image?: string;
  content: {
    html: string;
  };
  coverImage?: {
    url: string;
  };
  authorName?: string;
  author?: {
    name?: string;
    picture?: {
      url: string;
    };
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const { data } = await fetchAPI(`
    query AllPosts {
      posts(orderBy: date_DESC) {
        id
        title
        slug
        date
        excerpt
        coverImage {
          url
        }
        author {
          ... on Author {
            name
            picture {
              url
            }
          }
        }
      }
    }
  `);
  
  if (!data?.posts) return [];
  
  // Map Hygraph shape to what the app expects
  return data.posts.map((post: any) => ({
    ...post,
    category: "Insights", // Default category if not present
    readTime: "5 min read", // Mocked read time (can be added to model later)
    image: post.coverImage?.url || '/img/blog-placeholder.jpg',
    authorName: post.author?.name || 'Jaidee & Ko Team',
  }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await fetchAPI(
    `
    query PostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        date
        excerpt
        content {
          html
        }
        coverImage {
          url
        }
        author {
          ... on Author {
            name
            picture {
              url
            }
          }
        }
      }
    }
  `,
    { slug }
  );

  if (!data?.post) return null;

  return {
    ...data.post,
    category: "Insights",
    readTime: "5 min read",
    image: data.post.coverImage?.url || '/img/blog-placeholder.jpg',
    authorName: data.post.author?.name || 'Jaidee & Ko Team',
  };
}
