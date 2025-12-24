import BlogCard from "@/components/modules/Blogs/BlogCard";
import { envVars } from "@/config/env";
import { IPost } from "@/types";

const AllBlogsPage = async () => {
  const res = await fetch(`${envVars.BASE_URL}/post`, {
    cache: "no-store",
  });
  const { data: posts } = (await res.json()) as { data: IPost[] };
  // console.log(posts);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
