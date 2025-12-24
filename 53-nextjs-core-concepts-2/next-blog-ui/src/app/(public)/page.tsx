import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { envVars } from "@/config/env";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${envVars.BASE_URL}/post`, {
    next: {
tags:["POSTS"]
    },
  });
  const { data: posts } = (await res.json()) as { data: IPost[] };

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {posts.slice(0, 3).map((post, index) => (
          <BlogCard key={index} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
}
