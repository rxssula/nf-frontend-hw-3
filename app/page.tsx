import axios from "axios";
import PostList from "./components/layouts/PostList";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const Home = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <div className="py-16">
        <h1 className="text-5xl font-bold">Hello, world!</h1>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
