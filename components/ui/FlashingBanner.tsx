interface Props {
  text?: string;
  animation?: boolean;
}

export const FlashingBanner = ({ text, animation = true }: Props) => {
  return (
    <div
      className={`p-4 text-center mb-4 rounded ${
        animation ? 'flashing-banner' : ''
      }`}
      style={{
        backgroundColor: '#fff3cd',
        border: '2px solid #ffd700',
        position: 'relative',
        overflow: 'hidden',
      }}
      role="alert"
      aria-live="assertive"
    >
      <div className={`${animation ? 'flashing-overlay' : ''}`} />
      <h3
        style={{
          color: '#856404',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 0 5px white',
          marginBottom: 0,
        }}
      >
        ⚠️ {text} ⚠️
      </h3>

      <style jsx>{`
        .flashing-banner {
          animation: backgroundFlash 1.5s infinite, borderPulse 2s infinite;
        }
        .flashing-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #fff3cd;
          opacity: 0.7;
          animation: opacityFlash 1.5s infinite;
        }
        @keyframes backgroundFlash {
          0% {
            background-color: #fff3cd;
          }
          50% {
            background-color: #ffeeba;
          }
          100% {
            background-color: #fff3cd;
          }
        }
        @keyframes opacityFlash {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.7;
          }
        }
        @keyframes borderPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 214, 0, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 214, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 214, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};
