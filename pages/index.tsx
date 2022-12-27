import {HeroIntro, About, Services, Testimonials, Team, Gallery, Contact } from '../components/content/';
import { MemoryLaneLayout } from '../components/layouts/MemoryLaneLayout';
import { ContactForm } from '../components/ui';

export default function Home() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. is a dementia care home in Richmond Hill, ON. We provide a safe and secure environment for your loved ones."
    >
      
       <HeroIntro 
        image='/assets/images/slide-1.jpg'
        title='Welcome to Memory Lane Home Living'
        text='Quality of life is about connection, community and purpose.These are all necessary for one to live with dementia.'
        button='Read More'
        /> 

        <About />
        <Services />
        <ContactForm />
        <Testimonials />
        <Team />
        <Gallery />
        <Contact/>
    </MemoryLaneLayout>
  )
}
