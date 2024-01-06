import { MemoryLaneLayout } from '@components/layouts/MemoryLaneLayout';
import { YoutubeVideo } from '@components/ui';
import styleSection from '@styles/Section.module.css';


export default function TestimonailPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Testimonials."
    >
      <section id="testimonials" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>Testimonials</h2>
          </div>
          {/* justify center */}
          <div className='column'>
            <YoutubeVideo videoId={'CfHWIwW9xjI'} title='Community Connection Program Testimonial'embed />
            <YoutubeVideo videoId={'ehAzXh-czyM'} title='Living With Us Testimonial' embed/>
            <YoutubeVideo videoId={'amYH6XXiN1Y'} title='Music From The Heart Program Testimonial' embed/>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
