import { useState } from "react";
import PostCard from "./components/PostCard";
import {
  useGetPostQuery,
  useSetPostMutation,
} from "./redux/features/api/baseApi";

const App = () => {
  const [query, setQuery] = useState("");
  const { data: post } = useGetPostQuery(query);
  const [setPost, { data, isLoading, isSuccess }] = useSetPostMutation();
  console.log({ data, isLoading, isSuccess });
  const handleParameter = (e) => {
    e.preventDefault();
    // setQuery(e.target.parameter.value);
    setPost({
      title: e.target.parameter.value,
      body: "lorem is beautiful solution for everyone",
      userId: 54876,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-900 min-h-screen">
      {/* {isLoading ? (
        <div className="w-28 h-28 rounded-full border-4 border-dashed animate-spin" />
      ) : (
        posts?.map((post) => <PostCard key={post.id} post={post} />)
      )} */}
      <form onSubmit={handleParameter}>
        <input className="rounded-md mb-5" type="text" name="parameter" />
        <button className="bg-purple-600 px-5 py-2 rounded-md ml-2">
          Submit
        </button>
      </form>
      {post && <PostCard post={post} />}
      {isLoading && (
        <div className="w-28 h-28 rounded-full border-4 border-dashed animate-spin" />
      )}
    </div>
  );
};

export default App;
