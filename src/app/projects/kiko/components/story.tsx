'use client'

import {useEffect, useRef, useState} from "react";
import styles from "./story.module.css";

export default function Story() {
  const myRef = useRef(null);
  const [storyIsVisible, setStoryIsVisible] = useState<boolean>(false);

  useEffect(()=> {
    const observer = new IntersectionObserver((entries)=> {
      const entry = entries[0];
      document.addEventListener('scroll', ()=> {
      })
      setStoryIsVisible(entry.isIntersecting);
    }, {threshold: 0.5})
    if(!myRef.current) return;
    observer.observe(myRef.current);
  }, [])

  return (
      <section ref={myRef} id="story" className={`${styles.storySection} ${storyIsVisible? styles.fullPage : ''}`}>
        <div className={styles.textImage}>
        <p className={`${styles.textParagraph} ${storyIsVisible? styles.textParagraphFull : ''}`}>
          KIKO Milano is an Italian professional cosmetics brand that features a range of cutting-edge makeup, face and body treatments. Safe and effective products of the highest quality, created to satisfy the beauty requirements of women of any age.
          </p>
        </div>
      </section>
  );
}