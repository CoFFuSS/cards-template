import { useDispatch } from 'react-redux';

import { setPosts } from '@/store/slices/postsSlice';
import { useGetPostsQuery } from '@/services/api/postsApi';

import styles from './postList.module.scss';

import { Post } from '../post/post.component';

export const PostsList = () => {
  const dispatch = useDispatch();
  const { data: posts, error, isLoading } = useGetPostsQuery();
  dispatch(setPosts(posts ?? []));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {JSON.stringify(error)}</div>;
  }

  return (
    <section>
      <h1>Posts</h1>
      <div className={styles.container}>
        {posts?.map(({ id, title, body }) => (
          <Post
            key={id}
            id={id}
            title={title}
            body={body}
          />
        ))}
      </div>
    </section>
  );
};
