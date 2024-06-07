import * as React from "react";
import { PostItem } from "./PostItem";

export interface PostListProps {}

export function PostList(props: PostListProps) {
  return (
    <div>
      <PostItem />
    </div>
  );
}
