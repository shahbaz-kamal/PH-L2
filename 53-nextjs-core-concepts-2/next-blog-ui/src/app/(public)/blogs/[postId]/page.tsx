import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { envVars } from "@/config/env";
import { IPost } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`${envVars.BASE_URL}/post`);
  const { data: posts } = (await res.json()) as { data: IPost[] };

  return posts.slice(0, 2).map((post) => ({
    postId: String(post.id),
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const res = await fetch(`${envVars.BASE_URL}/post/${postId}`);
  const post = (await res.json()) as IPost;
  return (
    <div className="pt-32">
      <h3 className="text-4xl text-center">Blog Details</h3>

      <BlogDetailsCard blog={post}></BlogDetailsCard>
    </div>
  );
};

export default BlogDetailsPage;
