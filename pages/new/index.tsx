import Image from 'next/image';
import { MemoryLaneLayout } from '@components/layouts/MemoryLaneLayout';
import styleSection from '@styles/Section.module.css';
import { FlyerImage, YoutubeVideo } from '@components/ui';

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

          <div className="column mb-5">
            <h1 className={`text-center mb-5 ${styleSection['check']}`}>
              Upcoming Event: Soupfest & Stand-Up Improv Comedy
            </h1>
            <div className="d-flex justify-content-center">
              <p>
                Memory Lane Home Living invites you to a delightful afternoon of
                laughter and warmth at our “Soupfest & Stand-Up” event!
                Featuring the hilarious Bent Forks Comedy Troupe, this event
                promises a hearty mix of delicious soups and improvisational
                comedy that will keep you smiling.
              </p>
            </div>
            <h4>When:</h4>
            <p>
              Saturday, February 8, 2025
              <br />
              11:30 AM to 2:30 PM
            </p>
            <h4>Where:</h4>
            <p>
              St. Matthew’s United Church
              <br />
              333 Crosby Avenue, Richmond Hill
            </p>

            <p>
              🎁 <strong>Looking for the perfect Christmas gift?</strong> Treat
              your loved ones to this heartwarming fundraiser supporting our
              local community!
            </p>

            <p>
              To purchase tickets or for more information, call{' '}
              <a href="tel:9052371419">905-237-1419</a> or send us an email at{' '}
              <a className="underline" href="mailto:mlliving14@gmail.com">
                mlliving14@gmail.com
              </a>{' '}
              .
            </p>

            <p>
              <strong>Don’t miss out</strong> on this fantastic opportunity to
              enjoy a fun-filled afternoon while supporting a great cause!
            </p>
            <div className="d-flex justify-content-center mb-3 mt-3 px-5 flex-column flex-md-row">
              <Image
                src="/assets/images/new/christmas-soupfest.jpg"
                alt="Volunteer"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="column mb-5">
            <h1 className={`text-center mb-5 ${styleSection['check']}`}>
              Upcoming Event: “All My Sons” by Arthur Miller
            </h1>
            <div className="d-flex justify-content-center">
              <p>
                Memory Lane Home Living is excited to collaborate with Curtain
                Club Theatre for a special presentation of Arthur Miller’s
                classic drama All My Sons. Join us on Thursday, January 23,
                2025, at 8:00 PM for an unforgettable evening of theater and
                community spirit. Tickets are just $30. THIS WOULD MAKE A GREAT CHRISTMAS PRESENT. To purchase tickets, please call
                905-237-1419. Don’t miss this opportunity to enjoy a remarkable
                performance while supporting a great cause!
              </p>
            </div>
            <div className="d-flex justify-content-center mb-3 mt-3 px-5 flex-column flex-md-row">
              <Image
                src="/assets/images/new/all-my-sons.jpeg"
                alt="Volunteer"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
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
              <YoutubeVideo
                videoId="G7FVqQ6-Hww"
                // title="Music From the Heart"
                width={500}
                embed
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
