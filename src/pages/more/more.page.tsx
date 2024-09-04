import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAppSelector } from '@/hooks/redux';
import { requestedPosts } from '@/store/selectors';
import { PostComment, useGetPostsCommentsQuery } from '@/services/api/commentsApi';
import { Post } from '@/services/api/postsApi';

import styles from './more.module.scss';

export const MorePage = () => {
  const [filteredComments, setFilteredComments] = useState<PostComment[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Post>();

  const { id } = useParams();
  const posts = useAppSelector(requestedPosts);
  const { data: comments, error } = useGetPostsCommentsQuery();

  useEffect(() => {
    const currentPost = posts?.find((post) => post.id.toString() === id);
    setSelectedPosts(currentPost);

    const filterComments = comments?.filter((comment) => comment.postId === currentPost?.id);
    setFilteredComments(filterComments ?? []);
  }, [comments, id, posts]);

  if (error) {
    toast.error('Error loading comments!');
  }

  return (
    <section className={styles.container}>
      <h1>{selectedPosts?.title}</h1>
      <p>{selectedPosts?.body}</p>
      <h2>Comments</h2>
      <ul>
        {filteredComments?.map(({ id: commentId, name, body }) => (
          <li key={commentId}>
            <h5>{name}</h5>
            <h6>{body}</h6>
          </li>
        ))}
      </ul>
    </section>
  );
};
