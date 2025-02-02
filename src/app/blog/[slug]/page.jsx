// app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import PostContent from '@/components/PostContent';
import RelatedPosts from '@/components/RelatedPosts';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return post ? {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.content.match(/https:\/\/images\.unsplash\.com[^\s)]+/)?.[0] ? [
        {
          url: post.content.match(/https:\/\/images\.unsplash\.com[^\s)]+/)[0],
          width: 800,
          height: 600,
        },
      ] : [],
    },
  } : {
    title: 'Post Not Found',
    description: 'The requested post could not be found',
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <PostContent content={post.content} />
      <RelatedPosts currentPost={post} />
    </div>
  );
}