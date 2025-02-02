"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { getAllPosts } from '@/lib/posts';
import { Suspense } from 'react'; // Import Suspense

const BlogContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }, [searchQuery, posts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Articles</h1>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-6 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
          defaultValue={searchQuery}
          onChange={(e) => {
            const newQuery = e.target.value;
            const params = new URLSearchParams(window.location.search);
            if (newQuery) {
              params.set('query', newQuery);
            } else {
              params.delete('query');
            }
            window.history.replaceState(null, '', `?${params.toString()}`);
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No articles found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default function BlogPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogContent />
    </Suspense>
  );
}