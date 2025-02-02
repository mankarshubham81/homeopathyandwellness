"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    text: "The care I received was exceptional. My chronic migraines improved significantly within weeks of treatment.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    rating: 5,
    authorImage: "/patients/sarah-johnson.jpg",
    condition: "Migraine"
  },
  {
    id: 2,
    text: "Natural and effective approach. My allergy symptoms reduced dramatically after just 3 sessions.",
    author: "Michael Chen",
    date: "2024-02-28",
    rating: 5,
    authorImage: "/patients/michael-chen.jpg",
    condition: "Allergies"
  },
  {
    id: 3,
    text: "Dr. Poonam's expertise in homeopathy is remarkable. My son's eczema cleared up completely.",
    author: "Priya Sharma",
    date: "2024-04-02",
    rating: 5,
    authorImage: "/patients/priya-sharma.jpg",
    condition: "Child Eczema"
  },
  {
    id: 4,
    text: "The holistic approach helped me manage stress and anxiety better than any conventional treatment.",
    author: "David Wilson",
    date: "2024-01-15",
    rating: 5,
    authorImage: "/patients/david-wilson.jpg",
    condition: "Anxiety"
  },
  {
    id: 5,
    text: "Excellent results for my digestive issues. Professional and caring staff.",
    author: "Emma Davis",
    date: "2024-03-01",
    rating: 4,
    authorImage: "/patients/emma-davis.jpg",
    condition: "IBS"
  },
  {
    id: 6,
    text: "My energy levels improved significantly after the treatment plan. Highly recommended!",
    author: "Amit Patel",
    date: "2024-04-10",
    rating: 5,
    authorImage: "/patients/amit-patel.jpg",
    condition: "Chronic Fatigue"
  },
  {
    id: 7,
    text: "Effective treatment for my arthritis pain. Reduced dependency on painkillers.",
    author: "Linda Brown",
    date: "2024-02-10",
    rating: 5,
    authorImage: "/patients/linda-brown.jpg",
    condition: "Arthritis"
  },
  {
    id: 8,
    text: "The wellness programs helped me achieve better work-life balance. Grateful for the guidance.",
    author: "Rajesh Kumar",
    date: "2024-03-22",
    rating: 5,
    authorImage: "/patients/rajesh-kumar.jpg",
    condition: "Stress Management"
  },
  {
    id: 9,
    text: "My sleep quality improved dramatically after just 2 weeks of treatment. Life-changing!",
    author: "Sophia Nguyen",
    date: "2024-04-05",
    rating: 5,
    authorImage: "/patients/sophia-nguyen.jpg",
    condition: "Insomnia"
  },
  {
    id: 10,
    text: "Excellent pediatric homeopathy care. My child's immunity has strengthened noticeably.",
    author: "Fatima Ahmed",
    date: "2024-01-30",
    rating: 5,
    authorImage: "/patients/fatima-ahmed.jpg",
    condition: "Child Immunity"
  },
  {
    id: 11,
    text: "Professional and compassionate service. Helped me manage my PCOS effectively.",
    author: "Jessica Lim",
    date: "2024-03-18",
    rating: 5,
    authorImage: "/patients/jessica-lim.jpg",
    condition: "PCOS"
  }
];

const TestimonialSection = ({ testimonials = DEFAULT_TESTIMONIALS }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const totalGroups = Math.ceil(testimonials.length / itemsPerPage);
  
    const handleDotClick = useCallback((index) => {
      setActiveIndex(index);
      setPaused(true);
    }, []);
  
    const updateItemsPerPage = useCallback(() => {
      const newItemsPerPage = window.innerWidth >= 1024 ? 3 : 
                            window.innerWidth >= 768 ? 2 : 1;
      setItemsPerPage(newItemsPerPage);
    }, []);
  
    useEffect(() => {
      updateItemsPerPage();
      const handleResize = () => {
        const newItemsPerPage = window.innerWidth >= 1024 ? 3 : 
                              window.innerWidth >= 768 ? 2 : 1;
        if (newItemsPerPage !== itemsPerPage) {
          setActiveIndex(0);
          setItemsPerPage(newItemsPerPage);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [itemsPerPage, updateItemsPerPage]);
  
    useEffect(() => {
      if (paused || testimonials.length <= itemsPerPage) return;
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % totalGroups);
      }, 8000);
      return () => clearInterval(interval);
    }, [paused, testimonials.length, totalGroups, itemsPerPage]);
  
    const handlePrev = useCallback(() => {
      setActiveIndex(prev => (prev === 0 ? totalGroups - 1 : prev - 1));
      setPaused(true);
    }, [totalGroups]);
  
    const handleNext = useCallback(() => {
      setActiveIndex(prev => (prev + 1) % totalGroups);
      setPaused(true);
    }, [totalGroups]);
  
    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientX);
    };
  
    const handleTouchEnd = (e) => {
      const touchEnd = e.changedTouches[0].clientX;
      if (touchStart - touchEnd > 50) handleNext();
      if (touchStart - touchEnd < -50) handlePrev();
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
  
    if (!testimonials.length) return (
      <section aria-label="Testimonials" className="py-16 text-center bg-gray-50">
        <p className="text-gray-600">No testimonials available at the moment.</p>
      </section>
    );
  
    return (
      <section 
        aria-label="Customer testimonials"
        className="py-16 bg-gray-50"
        itemScope
        itemType="https://schema.org/Testimonial"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Patient Success Stories
          </h2>
          
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${activeIndex * (100 / itemsPerPage)}%)`,
                width: `${totalGroups * 100}%`
              }}
            >
              <div className="flex">
                {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                  <div 
                    key={groupIndex}
                    className="w-full flex gap-6 px-2"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    {testimonials
                      .slice(groupIndex * itemsPerPage, (groupIndex + 1) * itemsPerPage)
                      .map((testimonial) => (
                        <TestimonialCard 
                          key={testimonial.id}
                          testimonial={testimonial}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous testimonials"
              disabled={totalGroups <= 1}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial group ${index + 1} of ${totalGroups}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>
  
            <button
              onClick={handleNext}
              className="p-2 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next testimonials"
              disabled={totalGroups <= 1}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
  
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": testimonials.map((testimonial, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": testimonial.author
                  },
                  "datePublished": testimonial.date,
                  "reviewBody": testimonial.text,
                  ...(testimonial.rating && {
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": testimonial.rating.toString()
                    }
                  })
                }
              }))
            })
          }}
        />
      </section>
    );
  };
  
  const TestimonialCard = ({ testimonial }) => (
    <article
      className="flex-1 bg-white rounded-xl shadow-lg p-6 w-full"
      itemScope
      itemProp="review"
      itemType="https://schema.org/Review"
    >
      <div className="flex flex-col h-full">
        <blockquote className="text-gray-800 mb-4 flex-1">
          <p className="text-lg italic" itemProp="reviewBody">"{testimonial.text}"</p>
          {testimonial.condition && (
            <div className="mt-3 text-sm text-gray-600">
              Treated for: <span className="font-medium">{testimonial.condition}</span>
            </div>
          )}
        </blockquote>
        
        <footer className="flex items-center mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="font-semibold text-gray-900" itemProp="author">
              {testimonial.author}
            </p>
            {testimonial.date && (
              <time 
                className="text-sm text-gray-600"
                dateTime={new Date(testimonial.date).toISOString()}
                itemProp="datePublished"
              >
                {new Date(testimonial.date).toLocaleDateString('en-SG', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
  
  export default TestimonialSection;