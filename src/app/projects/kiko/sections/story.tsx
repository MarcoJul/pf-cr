'use client'

import {useEffect, useRef, useState} from "react";
import styles from "./story.module.css";
import  StoryImage  from "@/components/projects/StoryImage";
import Data from "@/projects/kiko/sections/data";

export default function Story() {
  const myRef = useRef(null);
  const [storyIsVisible, setStoryIsVisible] = useState<boolean>(false);
const handleScroll = () => {
  const position = window.scrollY;
  const windowHeight = window.innerHeight;
  if(windowHeight - 100 < position){
    setStoryIsVisible(true);
  } else {
    setStoryIsVisible(false);
  }
  console.log(position);
  const obj:HTMLElement = document.querySelector('#content')!;
  if(myRef.current && position > 1450 && position < 2450){
    console.log('translate', position, window.innerHeight);
    obj.style.transition = "none";
    obj.style.transform = 'translateX(-' + (position-1450) + 'px)';
    console.log('max', 3500 - window.innerHeight * 0.75)
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
      <section ref={myRef} id="story" className={`${styles.storySection} ${storyIsVisible? styles.fullPage : ''}`}>
        <div id="content" className={styles.contentBox}>
          <div className={styles.textImage}>
            <p className={`${styles.textParagraph} ${storyIsVisible? styles.textParagraphFull : ''}`}>
              KIKO Milano is an Italian professional cosmetics brand that features a range of cutting-edge makeup, face and body treatments. Safe and effective products of the highest quality, created to satisfy the beauty requirements of women of any age.
            </p>
          </div >
          
          <div className={styles.imageSection}>
            <StoryImage/>
          </div>
          <div className={styles.secondParagraph}>
              <p>
                Their call to never stopping evolution and innovation led them to collaborate with my team to give birth, improve, evolve and expand their digital experience through years and markets.
              </p>
            </div >
        </div>
    </section>
</>
  );
}