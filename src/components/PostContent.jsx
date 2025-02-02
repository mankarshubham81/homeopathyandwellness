'use client';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const LazyLoad = dynamic(
  () => import('vanilla-lazyload').then(mod => mod.default),
  { ssr: false }
);

const MarkdownComponents = {
  h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-8" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mt-8 mb-6 border-b pb-3" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-2xl font-medium mt-6 mb-4" {...props} />,
  h4: ({ node, ...props }) => <h4 className="text-xl font-medium mt-5 mb-3" {...props} />,

  // Paragraph with block element handling
  p: ({ node, children, ...props }) => {
    const hasBlockElement = React.Children.toArray(children).some(child =>
      React.isValidElement(child) &&
      (child.type === 'div' ||
       child.type === 'pre' ||
       child.type === 'iframe' ||
       child.type === 'ul' ||
       child.type === 'ol' ||
       child.type === 'table' ||
       child.type === MarkdownComponents.img ||
       child.type === MarkdownComponents.iframe)
    );

    return hasBlockElement ? (
      <div {...props}>{children}</div>
    ) : (
      <p className="mb-6 leading-relaxed text-gray-700" {...props}>{children}</p>
    );
  },

  // Images
  img: ({ node, src, alt, ...props }) => {
    const cleanAlt = alt?.replace('{:priority}', '') || '';

    return (
      <div className="my-8 relative w-full aspect-video">
        <Image
          src={src || ''}
          alt={cleanAlt}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority={alt?.includes('{:priority}')}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJ/p08ESgAAAABJRU5ErkJggg=="
        />
        {cleanAlt && (
          <div className="text-center text-sm text-gray-500 mt-3">
            {cleanAlt}
          </div>
        )}
      </div>
    );
  },

  // Videos
  iframe: ({ node, ...props }) => (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-lg shadow-xl">
      <iframe
        {...props}
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        title={props.title || 'Embedded content'}
      />
    </div>
  ),

  code: ({ node, inline, className, children, ...props }) => {
    if (inline) {
      return <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>{children}</code>;
    }
    return (
      <div className="my-6 overflow-hidden rounded-lg">
        <pre className="bg-gray-800 p-5 overflow-x-auto text-sm rounded-md">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  },

  a: ({ href, children }) => (
    href.startsWith('/') ? (
      <Link href={href} className="text-blue-600 hover:underline">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  ),

  ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
  ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
  li: ({ node, ...props }) => <li className="pl-2" {...props} />,

  table: ({ node, ...props }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md" {...props} />
    </div>
  ),
  th: ({ node, ...props }) => (
    <th className="bg-gray-200 text-center py-4 px-6 border border-gray-300 font-semibold text-sm md:text-base" {...props} />
  ),
  td: ({ node, ...props }) => (
    <td className="py-4 px-6 border border-gray-300 text-center text-sm md:text-base even:bg-gray-50" {...props} />
  ),

  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-blue-500 pl-5 my-6 italic text-gray-600 bg-gray-50 p-4 rounded-md" {...props} />
  ),
};

export default function PostContent({ content }) {
  useEffect(() => {
    let lazyLoadInstance;

    if (typeof window !== 'undefined') {
      const LazyLoad = require('vanilla-lazyload');
      lazyLoadInstance = new LazyLoad();
    }

    return () => {
      if (lazyLoadInstance && typeof lazyLoadInstance.destroy === 'function') {
        lazyLoadInstance.destroy();
      }
    };
  }, []);

  return (
    <ReactMarkdown
      components={MarkdownComponents}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeHighlight, { ignoreMissing: true }]]}
      className="prose lg:prose-lg max-w-none"
    >
      {content}
    </ReactMarkdown>
  );
}
