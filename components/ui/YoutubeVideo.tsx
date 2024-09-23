import Image from 'next/image';
import React from 'react';

type Props = {
  videoId: string;
  title?: string;
  width?: number;
  height?: number;
  embed?: boolean;
  className?: string;
};

export const YoutubeVideo = ({
  videoId,
  title,
  width = 560,
  height = 315,
  embed = false,
  className,
}: Props) => {
  return (
    <div className={`col-xl-4 col-md-6 col-sm-12 mb-4 cursor-pointer mx-auto ${className}`}>
      {!embed ? (
        <>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title ?? 'YouTube Video'}
              width={width}
              height={height}
              className="img-fluid"
            />
          </a>
          <p className="text-center text-bold">{title}</p>
        </>
      ) : (
        <div className='mx-auto'>
          <p className="text-bold">{title}</p>
          <iframe
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title ?? 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};
