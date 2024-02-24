"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Intro from './intro';
import Scrolling from './scrolling';
import StoryLine from './storyLine';
import Timestamp from '@/components/nav/timestamp';

export default function ContainerWrapper() {
	const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);
	const [isTimestampVisible, setIsTimestampVisible] = useState<boolean>(false);

	const handleScroll = () => {
		const position = window.scrollY;
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		console.log('position: ', position, 'width: ', windowWidth, 'height: ', windowHeight);

		const introTextContent:HTMLElement = document.querySelector('#content')!;
		const introImageContent: HTMLElement = document.querySelector('#image-content')!;


		if(windowHeight - 100 < position && position < 5000){
			setContentIsFullPage(true);
		} else {
			setContentIsFullPage(false);
		}

		//TIMESTAMP CONTROLS - TBD
		if(position > 1500 && position < 2000){
			setIsTimestampVisible(true);
		} else {
			setIsTimestampVisible(false);
		}

		const translationGap = 200;

		if(position >= windowHeight + translationGap && position < windowHeight + translationGap + windowWidth / 2){
			introTextContent.style.transition = "none";
			introImageContent.style.transition = "none";
			introTextContent.style.transform = 'translateX(-' + (position - windowHeight - translationGap) + 'px)';
			introImageContent.style.transform = 'translateX(-' + (position - windowHeight- translationGap) + 'px)';
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
			<Timestamp isVisible={isTimestampVisible}/>
			<div className={styles.emptyBox}></div>
		</div>
	)
}