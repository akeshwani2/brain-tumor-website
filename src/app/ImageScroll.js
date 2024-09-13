import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles/ImageScroll.module.css';

// This is our list of images
const images = [
  '/image6.jpg',
  '/image7.jpg',
  '/image5.jpg',
  '/image9.jpg',
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',

  // We can add more images here
];

export default function ImageScroll() {
  // This is like a sticky note to remember where we're scrolling
  const scrollRef = useRef(null);

  // This part runs when the component is ready
  useEffect(() => {
    const scrollingElement = scrollRef.current;
    if (scrollingElement) {
      // This function moves the images up a little bit
      const handleScroll = () => {
        // If we've scrolled to the bottom...
        if (scrollingElement.scrollTop + scrollingElement.clientHeight >= scrollingElement.scrollHeight) {
          // ...jump back to the top
          scrollingElement.scrollTop = 0;
        } else {
          // Otherwise, move up by 1 pixel
          scrollingElement.scrollTop += 1;
        }
      };

      // Do the scrolling every 50 milliseconds
      const intervalId = setInterval(handleScroll, 50);

      // Clean up when the component is removed
      return () => clearInterval(intervalId);
    }
  }, []);

  // This is what we see on the screen
  return (
    <div className={styles.imageScroll} ref={scrollRef}>
      <div className={styles.scrollingImages}>
        {/* We repeat the images three times to make sure we have enough */}
        {[...images, ...images, ...images].map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Scroll image ${index + 1}`}
              width={900}
              height={900}
              className={styles.scrollImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
