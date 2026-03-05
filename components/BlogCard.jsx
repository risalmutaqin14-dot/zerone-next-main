"use client";

import Link from "next/link";

function truncateWords(text = "", wordLimit = 20) {
  if (!text) return "";
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

function BlogCard({ blog }: { blog: any }) {
  return (
    <article className="blog-card bg-white rounded-[20px] overflow-hidden shadow-lg p-4 mb-8">
      <img
        className="rounded-[12px] w-full h-44 object-cover mb-4"
        src={blog.image}
        alt={blog.title || "Blog image"}
      />
      <div className="blog-content">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {truncateWords(blog.description, 20)}
        </p>
        <Link
          href={`/post/${blog.id}`}
          aria-label={`Read more about ${blog.title}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Read More
        </Link>
        <hr className="mt-4 border-gray-300" />
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <p className="author">{blog.author}</p>
          <p className="date">{blog.date}</p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;