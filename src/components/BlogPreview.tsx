import { getSortedPostsData } from "@/lib/posts";
import BlogPreviewClient from "./BlogPreviewClient";

const BlogPreview = () => {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return <BlogPreviewClient latestPosts={latestPosts} />;
};

export default BlogPreview;
