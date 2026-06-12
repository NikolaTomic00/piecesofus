import { useEffect, useRef, useState } from "react";

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}picture1.jpg`, alt: "Fotografija mladenaca 1" },
  { src: `${import.meta.env.BASE_URL}picture2.jpg`, alt: "Fotografija mladenaca 2" },
  { src: `${import.meta.env.BASE_URL}picture3.jpg`, alt: "Fotografija mladenaca 3" },
  { src: `${import.meta.env.BASE_URL}picture4.jpg`, alt: "Fotografija mladenaca 4" },
  { src: `${import.meta.env.BASE_URL}picture5.jpg`, alt: "Fotografija mladenaca 5" },
];

export default function GallerySliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const sliderTimer = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % galleryImages.length,
      );
    }, 2000);

    return () => window.clearInterval(sliderTimer);
  }, [isVisible]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % galleryImages.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchDistance = touchStartX.current - event.changedTouches[0].clientX;
    touchStartX.current = null;

    if (Math.abs(touchDistance) < 40) {
      return;
    }

    if (touchDistance > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <section
      className="gallery-slider-section"
      aria-label="Galerija fotografija"
      ref={sectionRef}
    >
      <div className="gallery-slider">
        <div
          className="gallery-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {galleryImages.map((image, index) => (
            <img
              className={`gallery-slider-image${
                index === activeIndex ? " gallery-slider-image-active" : ""
              }`}
              src={image.src}
              alt={image.alt}
              draggable="false"
              key={image.src}
            />
          ))}
        </div>

        <div className="gallery-slider-dots" aria-label="Izbor fotografije">
          {galleryImages.map((image, index) => (
            <button
              className={`gallery-slider-dot${
                index === activeIndex ? " gallery-slider-dot-active" : ""
              }`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Prikazi fotografiju ${index + 1}`}
              aria-pressed={index === activeIndex}
              key={`${image.src}-dot`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
