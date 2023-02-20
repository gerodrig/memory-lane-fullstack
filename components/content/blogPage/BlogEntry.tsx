import { BlogPost } from 'interfaces/blog';
import Link from 'next/link';

import style from './BlogEntry.module.css';

export const BlogEntry = (props: BlogPost) => {
  return (
    <div className={style['blog-entry']}>
      <Link href={`/blog/${props.id}`} className={style.link}>
        <h2>{props.title}</h2>
      </Link>
      <p>
        Author: <span className="primary-color">{props.articleAuthor}</span> |{' '}
        {props.postedDate} | Categories: {props.category}
      </p>
      <p>Original Article Source Credits: {props.credits}</p>
      <p>Article Written by: {props.articleAuthor}</p>
      <p>Original Article Posted on: {props.originalDate}</p>
      <p>
        Link to Original Article:{' '}
        <Link
          href={props.originalUrl}
          className={style['external-link']}
          target="_blank">
          Navigate to external link
        </Link>
      </p>
      <Link href={`/blog/${props.id}`} className={style.link}>
        <h3>CLICK TO READ MORE </h3>
      </Link>
    </div>
  );
};
