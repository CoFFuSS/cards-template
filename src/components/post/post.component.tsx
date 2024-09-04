import { Link } from 'react-router-dom';

import { formatText } from '@/utils/formatText';

import styles from './post.module.scss';
import { PostProps } from './post.types';
import { MAX_TITLE_LENGTH } from './post.constants';

export const Post = ({ id, title }: PostProps) => {
  const formattedTitle = formatText(title, MAX_TITLE_LENGTH);

  return (
    <Link to={`/more/${id}`}>
      <article className={styles.container}>
        <h4>{formattedTitle}</h4>
      </article>
    </Link>
  );
};
