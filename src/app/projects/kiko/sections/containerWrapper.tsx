"use client"
import { useEffect, useState } from 'react';
import styles from './containerWrapper.module.css';
import Intro from './intro';
import Scrolling from './scrolling';
import StoryLine from '@/components/projects/storyLine';
import { content1,content2, content3, content4, contentX } from '@/textContent/kiko';
import MobileMediaSection from '@/components/projects/mobileMediaSection';
import { useInView } from "react-intersection-observer";
import AnchorMenu from '@/components/nav/anchorMenu';

export default function ContainerWrapper({onSetImage}:any) {
	const [contentIsFullPage, setContentIsFullPage] = useState<boolean>(false);
	const [pagePosition, setPagePosition] = useState<string>('');
	const {ref: firstRef, inView : firstBlockInView} = useInView({
		rootMargin: '-50%'
	})
	const {ref: secondRef, inView : secondBlockInView} = useInView({
		rootMargin: '-50%'
	})
	const {ref: thirdRef, inView : thirdBlockInView} = useInView({
		rootMargin: '-50%'
	})

	const {ref: introContainerRef } = useInView({
		threshold: 0.2,
		onChange: (event, entry)=> {
			setPagePosition(entry.isIntersecting ? 'top' : '');
			if(pagePosition === 'bottom') return;
			setContentIsFullPage(()=> !event);
		}
	})

	const {ref: outroContainerRef } = useInView({
		threshold: 0.7,
		onChange: (event, entry)=> {
			setPagePosition(entry.isIntersecting ? 'bottom' : '');
			if(pagePosition === 'top') return;
			setContentIsFullPage(()=> !event)
		}
	})

useEffect(() => {

	const position = window.scrollY;
	const windowHeight = window.innerHeight;

	setPagePosition(position < windowHeight ? 'top' : 'bottom');

		// if(position > 5000){
		// 	onSetImage(2);
		// } else if(position < 5000){
		// 	onSetImage(1);
		// }

}, []);


	return (
		<div className={`${styles.containerWrapper} ${contentIsFullPage? styles.fullPage : ''}`}>
			<div ref={introContainerRef} className={styles.intersectionRef}></div>
			<Intro isFullPage={contentIsFullPage}/>
			<Scrolling />
			<div className={styles.storyLineContainer}>
				<div ref={firstRef} id="ecommerce-redesign">
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
				</div>
				<div ref={secondRef} id="evolutive-roadmap">
					<StoryLine
						column={3}
						textContent={content3}
						mediaUrl="/kiko/storyLine/2020_appArch.png"
					/>
					<MobileMediaSection
						media1="/kiko/storyLine/2020_app1.jpg"
						media2="/kiko/storyLine/2020_app2.jpg"
						media3="/kiko/storyLine/2020_app3.jpg"
					/>
					<MobileMediaSection
						media1="/kiko/storyLine/2020_tryon1.jpg"
						media2="/kiko/storyLine/2020_tryon2.jpg"
						media3="/kiko/storyLine/2020_tryon3.jpg"
					/>
				</div>
				<div ref={thirdRef} id="unified-commerce">
					<StoryLine
						column={2}
						textContent={content4}
						mediaUrl='/kiko/storyLine/2023_trioD.png'
					/>
					<StoryLine
						column={3}
						textContent={contentX}
						mediaUrl="/kiko/storyLine/2023_conceptD.png"
					/>
					<MobileMediaSection
						media1="/kiko/storyLine/2023_HP_mobile1.mp4"
						media2="/kiko/storyLine/2023_HP_mobile2.jpg"
						media3="/kiko/storyLine/2023_HP_mobile3.jpg"
						poster="/kiko/storyLine/2023_HP_mobile1_poster.jpg"
					/>
					<StoryLine
						mediaUrl="/kiko/storyLine/2023_HP_desktop.mp4"
						poster="/kiko/storyLine/2023_HP_desktop_poster.jpg"
					/>
					<StoryLine
						mediaUrl='/kiko/storyLine/2023_CardTop.png'
						secondMedia={true}
						secondMediaUrl='/kiko/storyLine/2023_CardBottom.png'
					/>
					<MobileMediaSection
						media1="/kiko/storyLine/2023_PDP_mobile1.mp4"
						media2="/kiko/storyLine/2023_PDP_mobile2.jpg"
						media3="/kiko/storyLine/2023_PDP_mobile3.jpg"
						poster="/kiko/storyLine/2023_PDP_mobile1_poster.jpg"
					/>
					<StoryLine
						mediaUrl="/kiko/storyLine/2023_PDP_desktop.mp4"
						poster="/kiko/storyLine/2023_PDP_desktop_poster.jpg"
					/>
					<MobileMediaSection
						media1="/kiko/storyLine/2023_PDP_mobile4.jpg"
						media2="/kiko/storyLine/2023_PDP_mobile5.jpg"
						media3="/kiko/storyLine/2023_PDP_mobile6.jpg"
					/>
				</div>
				<AnchorMenu firstActive={firstBlockInView} secondActive={secondBlockInView} thirdActive={thirdBlockInView}/>
			</div>
			<div ref={outroContainerRef} className={styles.emptyBox}></div>
		</div>
	)
}