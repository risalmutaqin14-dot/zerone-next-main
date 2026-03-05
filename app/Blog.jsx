// src/pages/Home.jsx
import { useState } from "react";
import { blogs } from "../data";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import "../css/Blog.css";
import { Helmet } from "react-helmet-async";

function Blog() {
  const blogsPerPage = 6; // Jumlah blog per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="container mx-auto pt-[50px] blog-page bg-white">
      
      <Helmet>
        {/* Title */}
        <title>Blog | Digital Insights by Zerone Global</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Baca artikel dan insight digital dari Zerone Global. Temukan inovasi, strategi, dan solusi teknologi untuk sekolah, organisasi, dan bisnis di Asia Tenggara."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/blog" />
        <meta property="og:title" content="Blog | Digital Insights by Zerone Global" />
        <meta
          property="og:description"
          content="Artikel dan insight digital dari Zerone Global untuk transformasi sekolah, organisasi, dan bisnis."
        />
        <meta property="og:url" content="https://www.zerone.id/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
      </Helmet>


      <div className="container mx-auto px-5">
        <h1 className="text-[30px] mt-20 sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
          Digital Insights from <br />
          Zerone Global Solution
        </h1>
        <h2 className="mx-auto text-center text-[18px] md:text-[24px] ">
          Discover digital insights and innovations that help schools,
          organizations, and <br></br>businesses transform with Zerone.
        </h2>
      </div>

      <div className="container mx-auto lg:px-25 px-5">
        <div className="blog-list mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Blog;
