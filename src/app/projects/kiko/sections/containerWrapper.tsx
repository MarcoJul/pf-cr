"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Intro from './intro';
import Scrolling from './scrolling';
import StoryLine from './storyLine';

export default function ContainerWrapper() {
	const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);

	const handleScroll = () => {
		const position = window.scrollY;
		const windowHeight = window.innerHeight;

		const introTextContent:HTMLElement = document.querySelector('#content')!;
		const introImageContent: HTMLElement = document.querySelector('#image-content')!;


		if(windowHeight - 100 < position && position < 5000){
			setContentIsFullPage(true);
		} else {
			setContentIsFullPage(false);
		}

		if(position >= windowHeight && position < windowHeight * 2 - 100){
			introTextContent.style.transition = "none";
			introImageContent.style.transition = "none";
			introTextContent.style.transform = 'translateX(-' + (position - windowHeight) + 'px)';
			introImageContent.style.transform = 'translateX(-' + (position - windowHeight) + 'px)';
		} else if (position < 1450){
			introTextContent.style.transform = 'translateX(0px)';
			introImageContent.style.transform = 'translateX(0px)';
			introTextContent.style.transition = "all .5s";
			introImageContent.style.transition = "all .5s";
		}
	}

useEffect(() => {

	const position = window.scrollY;
	const windowHeight = window.innerHeight;

	const introTextContent:HTMLElement = document.querySelector('#content')!;
	const introImageContent: HTMLElement = document.querySelector('#image-content')!;

	if(windowHeight - 100 < position && position < 5000){
		setContentIsFullPage(true);
		introTextContent.style.transform = 'translateX(-' + (windowHeight-100) + 'px)';
		introImageContent.style.transform = 'translateX(-' + (windowHeight-100) + 'px)';
	} else {
		setContentIsFullPage(false);
	}

	window.addEventListener('scroll', handleScroll, { passive: true });

	return () => {
			window.removeEventListener('scroll', handleScroll);
	};
}, []);

	return (
		<div className={`${styles.containerWrapper} ${contentIsFullPage? styles.fullPage : ''}`}>
			<Intro isFullPage={contentIsFullPage}/>
			<Scrolling />
			<StoryLine />
			<div className={styles.emptyBox}></div>
		</div>
	)
}