import { Link } from 'react-router-dom';

import styles from './post.module.scss';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export const Post = ({ id, title, body }: PostProps) => (
  <Link to={`/more/${id}`}>
    <article className={styles.container}>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  </Link>
);
