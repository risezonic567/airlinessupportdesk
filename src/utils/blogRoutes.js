import { blogPosts } from "../data/blog.js";

const postsBySlug = new Map();

for (const post of blogPosts) {
  const posts = postsBySlug.get(post.slug) ?? [];
  posts.push(post);
  postsBySlug.set(post.slug, posts);
}

const legacySlugIds = new Map([
  [
    "tu-vuelo-de-avianca-fue-cancelado-mira-cómo-puedes-reclamar-tu-reembolso-aquí.",
    "157",
  ],
  [
    "como-solicitar-un-reembolso-del-dinero-del-boleto-de-aeromexico-usa-airlines",
    "160",
  ],
]);

export function getBlogPath(blog) {
  const path = `/blog/${encodeURIComponent(blog.slug)}`;
  const posts = postsBySlug.get(blog.slug);

  return posts.length > 1
    ? `${path}?id=${encodeURIComponent(String(blog.id))}`
    : path;
}

export function findBlogBySlug(slug, id) {
  const posts = postsBySlug.get(slug);

  if (posts?.length) {
    return (
      posts.find((post) => String(post.id) === id) ??
      [...posts].sort((a, b) => Number(b.id) - Number(a.id))[0]
    );
  }

  const legacyId = legacySlugIds.get(slug) ?? legacySlugIds.get(slug.trim());
  return legacyId
    ? blogPosts.find((post) => String(post.id) === legacyId)
    : undefined;
}
