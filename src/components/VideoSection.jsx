"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "Amazing Health Transformation",
    duration: "4:32",
  },
  {
    id: "yPYZpwSpKmA",
    title: "Holistic Wellness Guide",
    duration: "6:15",
  },
  {
    id: "9bZkp7q19f0",
    title: "Homeopathy Success Story",
    duration: "5:47",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Natural Remedies Demo",
    duration: "7:22",
  },
  {
    id: "JGwWNGJdvx8",
    title: "Patient Experience",
    duration: "8:01",
  },
  {
    id: "mRD0-GxqHVo",
    title: "Wellness Workshop",
    duration: "9:14",
  },
];

// Reusable Video Card Component
const VideoCard = ({ video, loadedVideos, handleVideoLoad }) => (
  <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
    <div className="aspect-video bg-gray-200 relative">
      {loadedVideos.has(video.id) ? (
        <iframe
          title={video.title}
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <button
            onClick={() => handleVideoLoad(video.id)}
            className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/50 hover:bg-black/40 transition-colors"
            aria-label={`Play video: ${video.title}`}
          >
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{video.title}</h3>
      {video.duration && (
        <p className="text-sm text-gray-600">Duration: {video.duration}</p>
      )}
    </div>
  </div>
);

// Pagination Controls Component
const PaginationControls = ({
  totalGroups,
  activeIndex,
  handlePrev,
  handleNext,
}) => (
  <div className="flex items-center justify-center gap-4 mt-8">
    <button
      onClick={handlePrev}
      className="p-2 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Previous videos"
      disabled={totalGroups <= 1}
    >
      <ChevronLeft className="w-8 h-8" />
    </button>

    <div className="flex gap-2">
      {Array.from({ length: totalGroups }).map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === activeIndex ? "bg-green-600" : "bg-gray-300"
          }`}
          aria-label={`View video group ${index + 1} of ${totalGroups}`}
          aria-current={index === activeIndex ? "true" : "false"}
        />
      ))}
    </div>

    <button
      onClick={handleNext}
      className="p-2 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Next videos"
      disabled={totalGroups <= 1}
    >
      <ChevronRight className="w-8 h-8" />
    </button>
  </div>
);

const VideoSection = ({ videos = DEFAULT_VIDEOS }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for desktop
  const [loadedVideos, setLoadedVideos] = useState(new Set());

  const totalGroups = Math.ceil(videos.length / itemsPerPage);

  const updateItemsPerPage = useCallback(() => {
    const width = window.innerWidth;
    setItemsPerPage(width >= 1280 ? 3 : width >= 768 ? 2 : 1);
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    const handleResize = () => {
      const newItemsPerPage =
        window.innerWidth >= 1280
          ? 3
          : window.innerWidth >= 768
          ? 2
          : 1;

      if (newItemsPerPage !== itemsPerPage) {
        setActiveIndex(0);
        setItemsPerPage(newItemsPerPage);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerPage, updateItemsPerPage]);

  useEffect(() => {
    if (paused || videos.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalGroups);
    }, 10000);

    return () => clearInterval(interval);
  }, [paused, videos.length, totalGroups, itemsPerPage]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
    setPaused(true);
  }, [totalGroups]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalGroups);
    setPaused(true);
  }, [totalGroups]);

  const handleVideoLoad = (id) => {
    setLoadedVideos((prev) => new Set(prev).add(id));
  };

  if (!videos.length) {
    return (
      <section
        aria-label="Videos"
        className="py-16 text-center bg-gray-50"
      >
        <p className="text-gray-600">No videos available at the moment.</p>
      </section>
    );
  }

  return (
    <section
      aria-label="Health and Wellness Videos"
      className="py-16 bg-gray-50"
      tabIndex={0}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Homeopathy Videos
        </h2>

        {/* Video Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / itemsPerPage)}%)`,
              width: `${totalGroups * 100}%`,
            }}
          >
            <div className="flex">
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`flex gap-6 px-2 ${
                    itemsPerPage === 1 ? "flex-col" : ""
                  }`}
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  {videos
                    .slice(
                      groupIndex * itemsPerPage,
                      (groupIndex + 1) * itemsPerPage
                    )
                    .map((video) => (
                      <VideoCard
                        key={video.id}
                        video={video}
                        loadedVideos={loadedVideos}
                        handleVideoLoad={handleVideoLoad}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        {videos.length > itemsPerPage && (
          <PaginationControls
            totalGroups={totalGroups}
            activeIndex={activeIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        )}
      </div>
    </section>
  );
};

export default VideoSection;