import {
  HeroIntro,
  About,
  Services,
  Testimonials,
  Team,
  Gallery,
  Contact,
} from '../components/content/';
import { MemoryLaneLayout } from '../components/layouts/MemoryLaneLayout';
import { AdModal } from '../components/ui/AdModal';


export default function Home() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. is a dementia care home in Richmond Hill, ON. We provide a safe and secure environment for your loved ones.">

        {/* Ad modals can be included here        */}
        <AdModal showModal={true} image="/assets/images/events/Living-well-with-dementia-march-2024.jpg" registerLink='memorylanehomeliving.ca/events/register' />

        <HeroIntro
          image="/assets/images/slide-1.jpg"
          title="Welcome to Memory Lane Home Living"
          text="Quality of life is about connection, community and purpose.These are all necessary for one to live well with dementia."
          button="Read More"
        />
        <About id="about" />
        <Testimonials id="testimonials" />
        <Services id="services" />
        {/* <ContactForm /> */}
        <Team id="team" />
        <Gallery id="gallery" />
        <Contact id="contact" />
    </MemoryLaneLayout>
  );
}
