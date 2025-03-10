import { AdModal } from '@components/ui/AdModal';
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


export default function Home() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. is a dementia care home in Richmond Hill, ON. We provide a safe and secure environment for your loved ones.">

        {/* Ad modals can be included here        */}
        {/* <AdModal showModal={true} image="/assets/images/new/soupfest.png" registerLink='docs.google.com/forms/d/e/1FAIpQLSdTzOmfItlIfKHUq2zTaf-z_cJfZ6Cj4UhZLQvjf54ZcQnhVQ/viewform' /> */}

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
