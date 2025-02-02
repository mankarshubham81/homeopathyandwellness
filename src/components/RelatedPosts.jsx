// components/RelatedPosts.jsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function RelatedPosts({ currentPost }) {
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
            <div className="mt-3 text-sm text-gray-500 flex items-center justify-between">
              <span>{post.readTime}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}