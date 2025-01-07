import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';
// import { EventForm } from '@components/ui';
import Image from 'next/image';

export default function PartnerPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Events page"
    >
      <section id="register" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            {/* <h2>No Events at this time</h2> */}
          </div>
          <div className="column mb-5">
            <h1 className={`text-center mb-5 ${styleSection['check']}`}>
              Upcoming Event: Soupfest and Improv Comedy
            </h1>
            <div className="d-flex justify-content-center">
              <p>
                Memory Lane Home Living invites you to a delightful afternoon of
                soup sampling and laughter at our “Soupfest and Improv Comedy”. 
                Bent Fork Improv is the improvisational comedy that will keep
                you smiling.
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
              💝 <strong>Looking for the perfect Valentines Gift?</strong> 💝
              Treat your loved ones to this heartwarming fundraiser supporting
              our local community!
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

            {/* Embed Google Form */}
            {/* Add paragraph with link to Google Form */}
            <div className="text-center mt-5">
              <p
                className="font-weight-bold"
                style={{ fontSize: '1.5rem', color: '#d68eae' }}
              >
                🎟️ <strong>Order Your Tickets Online:</strong>
              </p>
              <p
                className="text-dark"
                style={{ fontSize: '1.2rem', lineHeight: '1.6' }}
              >
                Secure your spot for the{' '}
                <strong>Soupfest & Stand-Up Improv Comedy</strong> event today!
                Click{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdTzOmfItlIfKHUq2zTaf-z_cJfZ6Cj4UhZLQvjf54ZcQnhVQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm mx-2"
                >
                  here
                </a>{' '}
                to fill out the form and complete your purchase.
              </p>
            </div>

            <div className="d-flex justify-content-center mb-3 mt-3 px-5 flex-column flex-md-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTzOmfItlIfKHUq2zTaf-z_cJfZ6Cj4UhZLQvjf54ZcQnhVQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/new/soupfest.png"
                  alt="Volunteer"
                  width={500}
                  height={500}
                  className="img-fluid"
                />
              </a>
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
                community spirit. Tickets are just $30. THIS WOULD MAKE A GREAT
                PRESENT. To purchase tickets, please call 905-237-1419. Don’t
                miss this opportunity to enjoy a remarkable performance while
                supporting a great cause!
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
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
