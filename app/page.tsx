import { PostList } from "./components/layouts/PostList";

export default function Home() {
  return (
    <div>
      <div className="py-16">
        <h1 className="text-5xl font-bold">Hello, world!</h1>
      </div>
      <PostList />
    </div>
  );
}
