import { useGetPostsQuery } from '@/store/slices/postsApi';

export const PostsList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {JSON.stringify(error)}</div>;
  }

  return (
    <section>
      <h1>Posts</h1>
      <ul>{posts?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </section>
  );
};
