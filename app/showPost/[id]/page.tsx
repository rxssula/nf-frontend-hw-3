import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

const fetchPostById = async (id: number): Promise<Post | null> => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

interface IShowPostProps {}

const ShowPost = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const post = await fetchPostById(id);

  if (!post) {
    return <div>Post not Found</div>;
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center py-16">
        <Link href="/">
          <Image
            className="w-6 h-6"
            src="/images/arrow.png"
            width={24}
            height={24}
            alt="arrow"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-[700]">{post.title}</h1>
        </div>
        <Image
          src="/images/laptop.png"
          alt="laptop"
          width={1180}
          height={480}
          className="rounded-md object-cover w-[1120px] h-[480px]"
        />
        <div>
          <p className="text-lg">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
