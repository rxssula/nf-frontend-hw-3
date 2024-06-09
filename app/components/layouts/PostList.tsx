import * as React from "react";
import PostItem from "./PostItem";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

interface IPostListProps {
  posts: Post[];
}

const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-[45px]">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          image={`https://avatar.iran.liara.run/username?username=${post.id}`}
        />
      ))}
    </div>
  );
};

export default PostList;
