import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { setPosts } from '@/store/slices/postsSlice';
import { useGetPostsQuery } from '@/services/api/postsApi';
import { Post } from '@/components/post/post.component';

import styles from './postList.module.scss';

export const PostsList = () => {
  const dispatch = useDispatch();
  const { data: posts, error, isLoading } = useGetPostsQuery();
  dispatch(setPosts(posts ?? []));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error('Error loading posts!');
  }

  return (
    <section className={styles.posts}>
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
