import Image from 'next/image';
import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';
import { BlogEntry } from '@components/content/blogPage/BlogEntry';

import { blogData } from 'database/dummyData';

export default function Donations() {
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
            {blogData.map((blog) => {
              return (
                <>
                  <BlogEntry key={blog.id} {...blog} />
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
