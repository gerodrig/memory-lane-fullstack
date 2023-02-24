import { NextPage, GetStaticPaths, GetStaticProps} from 'next';
import Image from 'next/image';
import Link from 'next/link';

import parse from 'html-react-parser';
import { blogData } from 'database/dummyData';
import { dbBlogs } from 'database/';

// import ModelBlogPost from 'models/BlogPost';

import { MemoryLaneLayout } from '@components/layouts';
import { minutesToRead } from 'helpers/timeFunctions';

import { textToHTML } from 'helpers/textConverter';

import styleSection from '@styles/Section.module.css';
import style from '../../components/content/blogPage/BlogEntry.module.css';

import { BlogPost as IBlogPost } from 'interfaces';
import { getAllBlogs } from '../../database/dbBlogs';

interface Props {
  id: number;
  blog: IBlogPost;
}

const BlogPost: NextPage<Props> = ({blog}) => {

  return (
    <MemoryLaneLayout
    title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
    pageDescription={`Memory Lane Home Living Inc. Blog page. article ${blog.id}`}>
    <section id={`logPage ${blog.id}`} style={{ marginTop: '200px' }}>
    <div className="container" data-aos="fade-up">
    <div className={styleSection['section-title']}>
            <h2>{blog.title}</h2>
    </div>
    <p className='fst-italic'>{blog.originalDate} - {`${minutesToRead(blog.content || '')} min read`} </p>
    { blog.image &&
    <div className='my-5 image-container full-bleed'>
        <Image src={blog.image} alt='Blog image' fill className='custom-image'/>
    </div>
    }
      {
        blog.content && parse(textToHTML(blog.content), { trim: true })
      }
    <Link
          href={blog.originalUrl}
          className={style['external-link'] + ' text-xl-end'}
          target="_blank">
          ...Navigate to external link
        </Link>
    </div>
    </section>
  </MemoryLaneLayout>
  );
};

export default BlogPost;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ({
//   query,
// }) => {
//   const { id = '' } = query;
//   const blog = blogData.find((blog) => blog.id === id);

//   return {
//     props: {
//       id,
//         blog,
//     },
//   };
// };

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
//? Simulating Fetching Data from a Database
// const getPosts = async() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(blogData);
//         }, 1000);
//     }
//     );
// };

//? Fetching Data from a DummyDatabase
// const getBlogs = () => blogData;

//? Fetching Data from a Database
// const getBlogs = async(): Promise<IBlogPost[]> => {
//     await db.connect();
//     const blogs = await ModelBlogPost.find({}).lean();
//     await db.disconnect();


//     return blogs;
// }

export const getStaticPaths: GetStaticPaths = async (ctx) => {
 
    const blogs = blogData;

    const ids = blogs.map((blog) => blog.id);

    const params = ids.map(id  => ({params: {id: id.toString()}}));

    return {
        paths: params,
        fallback: 'blocking'
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id = '' } = ctx.params || {};
    const blog = blogData.find((blog) => blog.id === id);

    if(!blog) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            blog
        }
    }
}


