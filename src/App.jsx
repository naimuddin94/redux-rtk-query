import PostCard from "./components/PostCard";
import { useGetPostQuery } from "./redux/features/api/baseApi";

const App = () => {
  const { data: posts, error, isLoading } = useGetPostQuery();
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-900 min-h-screen">
      {isLoading ? (
        <div className="w-28 h-28 rounded-full border-4 border-dashed animate-spin" />
      ) : (
        posts?.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default App;
