"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
  const sliderRef = useRef(null);
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ?enablejsapi=1",
    "https://www.youtube.com/embed/tgbNymZ7vqY?enablejsapi=1",
    "https://www.youtube.com/embed/LXb3EKWsInQ?enablejsapi=1",
    "https://www.youtube.com/embed/kJQP7kiw5Fk?enablejsapi=1",
    "https://www.youtube.com/embed/2Vv-BfVoq4g?enablejsapi=1",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Pause carousel when a video starts playing
  const handleVideoPlay = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  // Resume carousel when a video ends
  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  // Load YouTube API script dynamically
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      // Initialize YT.Player instances for each video
      videos.forEach((video, index) => {
        new window.YT.Player(`video-${index}`, {
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                handleVideoPlay(index);
              } else if (
                event.data === window.YT.PlayerState.ENDED ||
                event.data === window.YT.PlayerState.PAUSED
              ) {
                handleVideoEnd();
              }
            },
          },
        });
      });
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* <h2 className="text-2xl font-bold text-center mb-6">Video Carousel</h2> */}
      <Slider {...settings} ref={sliderRef} className="relative">
        {videos.map((video, index) => (
          <div key={index} className="px-2">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                id={`video-${index}`}
                src={video}
                title={`Video ${index + 1}`}
                allowFullScreen
                className="w-full h-60 rounded-xl shadow-lg"
                aria-label={`Video ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;