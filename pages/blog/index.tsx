// import { GetStaticProps } from 'next';
import Image from 'next/image';
import { MemoryLaneLayout } from '@components/layouts';

// import { db } from 'database/';
// import ModelBlogPost from 'models/BlogPost';
import { BlogEntry } from '@components/content/blogPage/BlogEntry';
import styleSection from '@styles/Section.module.css';

import { BlogPost as IBlogPost } from 'interfaces';
import { blogData } from 'database/dummyData';
// import BlogPost from '../../models/BlogPost';

export default function Blog({ blogs }: { blogs: IBlogPost[] }) {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Media page.">
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-image']}>
            <Image
              src="/assets/images/blog/header.jpg"
              alt="blog image"
              className="img-fluid"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styleSection['section-title']}>
            <h2>BLOG ENTRIES</h2>
          </div>

          <div className="column">
            {/* //sort by date */}
            {blogData
              .sort((a, b) =>
                new Date(a.postedDate) > new Date(b.postedDate) ? -1 : 1
              )
              .map((blog) => {
                return (
                  <div key={blog.id}>
                    <BlogEntry {...blog} />
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}

// const getBlogs = async(): Promise<IBlogPost[]> => {
//     await db.connect();
//     //set _id to id
//     const blogs = await ModelBlogPost.find({}).select('-__v').lean().exec();
//     await db.disconnect();

//     blogs.forEach((blog: any) => {
//         blog.id = blog._id?.toString();
//         delete blog._id;
//     });

//     return blogs;
// }

// export const getStaticProps: GetStaticProps = async (ctx) => {
  
//   const blogs = await getBlogs();

//   console.log('blogs', blogs);

//   if(!blogs) {
//       return {
//           notFound: true
//       }
//   }

//   return {
//       props: {
//           blogs: JSON.parse(JSON.stringify(blogs))
//       }
//   }
// }
