"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Intro from './intro';
import Scrolling from './scrolling';
import StoryLine from './storyLine';
import Timestamp from '@/components/nav/timestamp';
import { content1,content2, content3, contentX } from '@/textContent/kiko';
import MobileMediaSection from './mobileMediaSection';

export default function ContainerWrapper({onSetImage}:any) {
	const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);
	const [isTimestampVisible, setIsTimestampVisible] = useState<boolean>(false);

	const handleScroll = () => {
		const position = window.scrollY;
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		console.log('position: ', position, 'width: ', windowWidth, 'height: ', windowHeight);

		const introTextContent:HTMLElement = document.querySelector('#content')!;
		const introImageContent: HTMLElement = document.querySelector('#image-content')!;


		if(windowHeight - 100 < position && position < 10000){
			setContentIsFullPage(true);
		} else {
			setContentIsFullPage(false);
		}

		//TIMESTAMP CONTROLS - TBD
		if(position > 4300 && position < 5300){
			setIsTimestampVisible(true);
		} else {
			setIsTimestampVisible(false);
		}


	if(position > 5000){
		onSetImage(2);
	} else if(position < 5000){
		onSetImage(1);
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

	if(windowHeight - 100 < position && position < 10000){
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
			<StoryLine
				column={3}
				textContent={content1}
				imageUrl="/kiko/storyLine/2019_stylegudeD.png"
			/>
			<StoryLine
				column={2}
				textContent={content2}
				imageUrl="/kiko/storyLine/2019_mockup.png"
			/>
			<StoryLine
				column={3}
				textContent={content3}
				imageUrl="/kiko/storyLine/2020_appArch.png"
			/>
			<MobileMediaSection
				image1="/kiko/storyline/2020_app1.jpg"
				image2="/kiko/storyline/2020_app2.jpg"
				image3="/kiko/storyline/2020_app3.jpg"
			/>			
			<MobileMediaSection
				image1="/kiko/storyline/2020_tryon1.jpg"
				image2="/kiko/storyline/2020_tryon2.jpg"
				image3="/kiko/storyline/2020_tryon3.jpg"
			/>
			<StoryLine
				column={3}
				textContent={contentX}
				imageUrl="/kiko/storyLine/2023_conceptD.jpg"
			/>
			<Timestamp isVisible={isTimestampVisible}/>
			<div className={styles.emptyBox}></div>
		</div>
	)
}