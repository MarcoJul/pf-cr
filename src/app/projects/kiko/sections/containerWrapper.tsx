"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Story from './story';
import Scrolling from './scrolling';

export default function ContainerWrapper() {
  const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);

  const handleScroll = () => {
    const position = window.scrollY;
    const windowHeight = window.innerHeight;

    const totalWidth = window.innerWidth;
    console.log(position, totalWidth, windowHeight);


    if(windowHeight - 100 < position){
      setContentIsFullPage(true);
    } else {
      setContentIsFullPage(false);
    }
    const obj:HTMLElement = document.querySelector('#content')!;
    const obj2: HTMLElement = document.querySelector('#image-content')!;
    if(position >= windowHeight && position < windowHeight *2){
      // console.log('translate', position, window.innerWidth);
      console.log('translate');
      obj.style.transition = "none";
      obj2.style.transition= "none";
      obj.style.transform = 'translateX(-' + (position - windowHeight) + 'px)';
      obj2.style.transform = 'translateX(-' + (position - windowHeight) + 'px)';
    } else if (position < 1450){
      obj.style.transform = 'translateX(0px)';
      obj2.style.transform = 'translateX(0px)';
      obj.style.transition = "all .5s";
      obj2.style.transition= "all .5s";
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
      <Scrolling/>
    </div>
  )
}