'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import playButtonIcon from '@/public/assets/playbutton.svg'; // Play button icon
import videoThumbnail from '@/public/assets/thumbnail.svg'; // Thumbnail image

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc?: string;
  altText?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  thumbnailSrc = videoThumbnail, // Default thumbnail
  altText = 'Video Thumbnail',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleVideoPlay = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when the modal is closed
    }
  };

  return (
    <div className="relative w-full h-full aspect-video"> {/* 16:9 Aspect Ratio */}
      {/* Thumbnail Section */}
      <div className="absolute inset-0 cursor-pointer flex justify-end">
        <div
          onClick={handleVideoPlay}
          className="relative w-full h-full overflow-hidden md:translate-x-[40%] md:translate-y-[-15%]"
        >
          {/* Thumbnail with full rounding and border */}
          <Image
            src={thumbnailSrc}
            alt={altText}
            fill // Updated from 'layout="fill"' to 'fill'
            className="md:rounded-full object-cover border-4 border-[#77E4C8] shadow-lg"
          />
          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="rounded-full bg-white p-3 shadow-lg"
              aria-label="Play video"
            >
              <Image src={playButtonIcon} alt="Play Button" width={50} height={50} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Video Playback */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-[90%] h-[90%] max-w-4xl bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-8 right-2 text-white text-xl bg-gray-800 rounded-full p-2 z-50"
              aria-label="Close video"
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              autoPlay
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
