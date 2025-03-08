import { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-900" />
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`fixed top-0 left-0 w-full h-full object-cover -z-10 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoBackground;
