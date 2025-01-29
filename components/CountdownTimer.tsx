import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, settimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-02-08T11:30:00-05:00'); // EST timezone

    const timer = setInterval(() => {
      const now = new Date();
      const distance = eventDate.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      settimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '20px 0',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '2px solid #dc3545',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>
        ⏳ TIME REMAINING: {timeLeft.days} Days {timeLeft.hours}h{' '}
        {timeLeft.minutes}m {timeLeft.seconds}s
      </h3>
      <p style={{ color: '#6c757d', marginBottom: 0 }}>
        Event date: February 8, 2025 at 11:30 AM EST
      </p>
    </div>
  );
};

export default CountdownTimer;
