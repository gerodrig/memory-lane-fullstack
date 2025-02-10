import Image from 'next/image';
import styleSection from '@styles/Section.module.css';

const AllMySons2025 = () => {
  return (
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
  )
}

export default AllMySons2025