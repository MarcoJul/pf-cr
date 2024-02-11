"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Story from './story';

export default function ContainerWrapper() {
  const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);
  const handleScroll = () => {
    const position = window.scrollY;
    const windowHeight = window.innerHeight;
    if(windowHeight - 100 < position){
      setContentIsFullPage(true);
    } else if (windowHeight -100 > 3500){
      setContentIsFullPage(false);
    } else {
      setContentIsFullPage(false);
    }
    console.log(position);
    const obj:HTMLElement = document.querySelector('#content')!;
    const obj2: HTMLElement = document.querySelector('#image-content')!;
    if(position > 1450 && position < 2450){
      console.log('translate', position, window.innerHeight);
      obj.style.transition = "none";
      obj2.style.transition= "none";
      obj.style.transform = 'translateX(-' + (position-1450) + 'px)';
      obj2.style.transform = 'translateX(-' + (position-1450) + 'px)';
      console.log('max', 3500 - window.innerHeight * 0.75)
    }
  }

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className={`${styles.containerWrapper} ${contentIsFullPage? styles.fullPage : ''}`}>
      <Story isFullPage={contentIsFullPage}/>
    </div>
  )
}