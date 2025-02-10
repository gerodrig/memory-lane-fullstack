import Image from 'next/image';
import { MemoryLaneLayout } from '@components/layouts/MemoryLaneLayout';
import styleSection from '@styles/Section.module.css';

export default function NewPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. What is new page."
    >
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>New to Memory Lane Home Living</h2>
          </div>

          <div className="column">
            <h1 className={`text-center mb-5 ${styleSection['check']}`}>
              We are currently looking for Volunteers 2024
            </h1>
            <div className="d-flex justify-content-center">
              <p>
                Memory Lane Home Living is currently looking for help in the
                form of volunteers to be on committees (i.e., fundraising,
                program support, music or art therapists) and/or on the Board of
                Directors with experience in social media, senior care and
                recreation therapy, fundraising or finance. We are looking for
                people who ideally have a lived experience with dementia or a
                passion to improve the lives of those living with a dementia and
                their families.
              </p>
            </div>
            <div className="d-flex justify-content-center mb-3 mt-3 px-5 flex-column flex-md-row">
              <Image
                src="/assets/images/new/volunteer-breakfast.jpg"
                alt="Volunteer"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>

            <div className="mt-4 mb-3 d-flex justify-content-center">
              <p>
                At MLHL we are blessed to work with many wonderful volunteers
                <span className="h4"> ❤️</span>. Volunteering weaves us
                together, and strengthens the fabric of our community by those
                sharing their time, talent and energy to support one another. We
                hope to attract persons who already have experience as
                volunteers. Most importantly, though, we need people who are
                ready to help and to work as a member of a team. If you have a
                few hours a week that you can give to help us please call us at{' '}
                <a className="underline" href="tel:905-237-1419">
                  905-237-1419
                </a>{' '}
                or send us an email at{' '}
                <a className="underline" href="mailto:mlliving14@gmail.com">
                  mlliving14@gmail.com
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
