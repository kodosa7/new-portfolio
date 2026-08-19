import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

/**
 * Carousel Component
 * Responsive multi-card slider with navigation arrows, dots, and touch swipe.
 */
export default function Carousel({ items, onSelectProject }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Update visible items per page based on viewport size
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 600) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 900) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const maxIndex = Math.max(0, items.length - itemsPerPage);

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;
        if (distance > 50 && currentIndex < maxIndex) {
            nextSlide();
        } else if (distance < -50 && currentIndex > 0) {
            prevSlide();
        }
    };

    const totalDots = maxIndex + 1;

    return (
        <div class="carousel-container">
            {/* Previous Arrow */}
            <button
                class="carousel-arrow carousel-arrow--prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous projects"
                type="button"
            >
                <i class="fas fa-chevron-left"></i>
            </button>

            {/* Track Wrapper */}
            <div
                class="carousel-track-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    class="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                    }}
                >
                    {items.map((project) => (
                        <div class="carousel-slide" key={project.id}>
                            <ProjectCard
                                project={project}
                                onSelectProject={onSelectProject}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Arrow */}
            <button
                class="carousel-arrow carousel-arrow--next"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                aria-label="Next projects"
                type="button"
            >
                <i class="fas fa-chevron-right"></i>
            </button>

            {/* Dot Indicators */}
            {totalDots > 1 && (
                <div class="carousel-dots">
                    {Array.from({ length: totalDots }).map((_, idx) => (
                        <button
                            key={idx}
                            class={`carousel-dot ${idx === currentIndex ? "carousel-dot--active" : ""}`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            type="button"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
