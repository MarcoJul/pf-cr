"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Intro from './intro';
import Scrolling from './scrolling';
import StoryLine from './storyLine';
import Timestamp from '@/components/nav/timestamp';
import { content1,content2, content3, content4, contentX } from '@/textContent/kiko';
import MobileMediaSection from './mobileMediaSection';
import { useInView } from "react-intersection-observer";

export default function ContainerWrapper({onSetImage}:any) {
	const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);
	const {ref, inView, entry} = useInView({
		rootMargin: `-1000px`
	})


	console.log(inView, entry);
	const handleScroll = () => {
		const position = window.scrollY;
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		// console.log('position: ', position, 'width: ', windowWidth, 'height: ', windowHeight);

		const introTextContent:HTMLElement = document.querySelector('#content')!;
		const introImageContent: HTMLElement = document.querySelector('#image-content')!;


	if(windowHeight - 100 < position && position < 15650){
		setContentIsFullPage(true);
	} else {
		setContentIsFullPage(false);
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

	if(windowHeight - 100 < position && position < 15650){
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
			<div ref={ref} className={styles.storyLineContainer}>
				<StoryLine
					column={3}
					textContent={content1}
					mediaUrl="/kiko/storyLine/2019_stylegudeD.png"
				/>
				<StoryLine
					column={2}
					textContent={content2}
					mediaUrl="/kiko/storyLine/2019_mockup.png"
				/>
				<StoryLine
					column={3}
					textContent={content3}
					mediaUrl="/kiko/storyLine/2020_appArch.png"
				/>
				<MobileMediaSection
					media1="/kiko/storyline/2020_app1.jpg"
					media2="/kiko/storyline/2020_app2.jpg"
					media3="/kiko/storyline/2020_app3.jpg"
				/>
				<MobileMediaSection
					media1="/kiko/storyline/2020_tryon1.jpg"
					media2="/kiko/storyline/2020_tryon2.jpg"
					media3="/kiko/storyline/2020_tryon3.jpg"
				/>
				<StoryLine
					column={2}
					textContent={content4}
					mediaUrl='/kiko/storyline/2023_trioD.png'
				/>
				<StoryLine
					column={3}
					textContent={contentX}
					mediaUrl="/kiko/storyLine/2023_conceptD.png"
				/>
				<MobileMediaSection
					media1="/kiko/storyline/2023_HP_mobile1.mp4"
					media2="/kiko/storyline/2023_HP_mobile2.jpg"
					media3="/kiko/storyline/2023_HP_mobile3.jpg"
				/>
				<StoryLine
					mediaUrl="/kiko/storyline/2023_HP_desktop.mp4"
				/>
				<StoryLine
					mediaUrl='/kiko/storyline/2023_CardTop.png'
					secondMedia={true}
					secondMediaUrl='/kiko/storyline/2023_CardBottom.png'
				/>
				<MobileMediaSection
					media1="/kiko/storyline/2023_PDP_mobile1.mp4"
					media2="/kiko/storyline/2023_PDP_mobile2.jpg"
					media3="/kiko/storyline/2023_PDP_mobile3.jpg"
				/>
				<StoryLine
					mediaUrl="/kiko/storyline/2023_PDP_desktop.mp4"
				/>
				<MobileMediaSection
					media1="/kiko/storyline/2023_PDP_mobile4.jpg"
					media2="/kiko/storyline/2023_PDP_mobile5.jpg"
					media3="/kiko/storyline/2023_PDP_mobile6.jpg"
				/>
				<Timestamp/>
			</div>
			<div className={styles.emptyBox}></div>
		</div>
	)
}