const PostCard = ({ post }) => {
  return (
    <div className="max-w-2xl bg-gray-800 text-slate-100 px-20 py-8 rounded mb-5">
      <h2 className="text-xl font-bold py-5">{post.title}</h2>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
