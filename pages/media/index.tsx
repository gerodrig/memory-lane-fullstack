import { MediaCard } from '@components/content/mediaPage/MediaCard';
import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';

const mediaContent = [
    {
        src: "/assets/images/media/media-01.jpg",
        text: `In celebration of the Queen Elizabeth II, and her 7 decades of service,
        Mona Lancaster was a recipient of the Platinum Jubilee Award on October
        23, 2022. Mona, Managing Director of Memory Lane Home Living Inc. has
        worked tirelessly to create a volunteer driven, not-for-profit dementia
        initiative for women in the Richmond Hill community. She created this
        for women because 70% of all those diagnosed with a dementia are women.
        Mona recognizes that it is the care and kindness of the volunteers that
        create the foundation of this initiative.`
    },
    {
        src: "/assets/images/media/media-02.jpg",
        text: `January is Alzheimer’s Awareness Month. In January we usually host a Living Well with Dementia Conference. Due to covid we have cancelled this event. We did however get recognized by the Federal Government in December 2021. Mona Lancaster was awarded an Outstanding Canadian Award for her perseverance and compassion in making a difference for a new way of living in community with dementia. Her resolve to re-create an evidence-based home model to live in a community setting instead of an institution, is a first step in ridding the stigma associated with this diagnosis. Mona would like to acknowledge those that contributed to her receipt of this award. This includes her Not-for-Profit Board of Directors at Memory Lane Home Living and volunteers that have contributed countless hours to this cause. It is in January we take the time to appreciate how far we have come in creating a Dementia Inclusive Community in the heart of Richmond Hill.`
    }
];

export default function Donations() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Media page.">
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>Media</h2>
          </div>

            {mediaContent.map(({src, text}, index) => (
                <MediaCard 
                    key={index}
                    image={src}
                    text={text}
                    index={index}
                />
            ))}
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
