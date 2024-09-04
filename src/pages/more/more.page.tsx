import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAppSelector } from '@/hooks/redux';
import { requestedPosts } from '@/store/selectors';
import { PostComment, useGetPostsCommentsQuery } from '@/services/api/commentsApi';
import { Post } from '@/services/api/postsApi';

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
    return <h1>Error...</h1>;
  }

  return (
    <main>
      <h1>{selectedPosts?.title}</h1>
      <h2>Comments</h2>
      <ul>
        {filteredComments?.map(({ id: commentId, name, body }) => (
          <li key={commentId}>
            <h5>Username: {name}</h5>
            <h6>Comment: {body}</h6>
          </li>
        ))}
      </ul>
    </main>
  );
};
