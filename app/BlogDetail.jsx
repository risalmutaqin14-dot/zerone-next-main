import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { blogs } from "../data";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogs.find((blog) => blog.id === Number(id));

    if (foundPost) {
      setPost(foundPost);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto pt-[100px] text-center min-h-[50vh]">
        <p className="text-xl font-medium">Memuat...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto pt-[150px] text-center min-h-[50vh]">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          404 - Postingan Tidak Ditemukan
        </h2>
        <p className="text-lg text-gray-700">
          Maaf, postingan yang Anda cari tidak ada.
        </p>
        <Link
          to="/"
          className="mt-9 inline-block text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          &larr; Return to Blog Home
        </Link>
      </div>
    );
  }

  // SEO with react-helmet
  return (
    <>
      <Helmet>
        <title>{post.title} | Blog - Zerone.id</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={`blog, ${post.title}, ${post.author}, automation`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.zerone.id/post/${id}`} />
      </Helmet>

      <div className="container mx-auto px-5 lg:px-50 pt-[150px] pb-10 bg-white">
        {/* Header Postingan */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="text-md text-gray-500 flex justify-center space-x-4">
            <p>
              By:{" "}
              <span className="font-semibold text-gray-700">{post.author}</span>
            </p>
            <span className="text-gray-400">|</span>
            <p>
              Publish Date: <span className="font-semibold">{post.date}</span>
            </p>
          </div>
        </header>

        {/* Gambar Utama */}
        <div className="container mx-auto mb-10 px-0 md:px-10">
          <img
            className="w-full max-h-[400px] object-cover rounded-4xl bg-black"
            src={post.image}
            alt={post.title}
          />
        </div>

        {/* Konten Postingan */}
        <article className="max-w-4xl mx-auto prose prose-lg sm:prose-xl">
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
            {post.description}
          </p>
        </article>

        {/* Footer Postingan */}
        <footer className="mt-12 pt-6 border-t border-gray-200 max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 text-center">
            Published by: {post.author} on {post.date}.
          </p>
        </footer>
      </div>
    </>
  );
}

export default PostDetail;
