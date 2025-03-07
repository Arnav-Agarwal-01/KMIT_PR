import React, { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    console.log('Video element:', video);
    console.log('Video source:', video?.currentSrc);
    console.log('Video ready state:', video?.readyState);
    
    if (video) {
      video.play().catch(error => {
        console.error("Video playback error:", error);
      });

      // Log when video starts playing
      video.addEventListener('playing', () => {
        console.log('Video is now playing');
      });

      // Log any errors
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
      });
    }
  }, []);

  return (
    <div className="video-background">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-bg"
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: '-1'
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
}
