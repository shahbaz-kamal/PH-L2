"use server";

import { envVars } from "@/config/env";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const postData = Object.fromEntries(data.entries());
  const modifiedData = {
    ...postData,
    authorId: 3,
    tags: postData.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: Boolean(postData.isFeatured),
  };
  console.log(modifiedData);
  const res = await fetch(`${envVars.BASE_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();
  if (result?.id) {
    revalidateTag("POSTS");
    redirect("/");
  }
  console.log("Results", result);
  return result;
};
