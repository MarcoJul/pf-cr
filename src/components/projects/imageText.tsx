import Image from 'next/image'
import styles from './imageText.module.css'
import type { TextContent } from '@/types';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IStoryLine {
	mediaUrl: string;
	column?: number;
	textContent?: TextContent;
	secondMedia?: boolean;
	secondMediaUrl?: string;
	poster?: string;
	idSection: string;
}

export default function ImageText({ mediaUrl, column, textContent, secondMedia, secondMediaUrl, poster, idSection}: IStoryLine) {

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.to(`#${idSection}-media`, {
			opacity: '1',
			transform: 'translateY(0)',
			scrollTrigger: {
				trigger: `#${idSection}`,
				start: `50% bottom`,
				// markers: true,
				once: true,
			},
			duration: 1,
		});
		if(textContent){
			gsap.to(`#${idSection}-text`, {
				opacity: '1',
				transform: 'translateY(0)',
				scrollTrigger: {
					trigger: `#${idSection}-text-container`,
					start: `50% bottom`,
					once: true,
				},
				duration: 1,
			});
		}
	});

	setTimeout(()=>{
		// Tweak for waiting for images to be fully loaded
		ScrollTrigger.refresh();
	}, 5000)

	return (
		<div className={styles.container} id={idSection}>
			<div className={`${secondMedia && styles.twoColumnImage}`}>
				{mediaUrl.includes('.mp4') ? 
					<video 
						id={`${idSection}-media`}
						className={styles.coverImage}
						width={864}
						height={512}
						controls
						poster={poster}
						preload="none"
						>
						<source src={mediaUrl}
						type="video/mp4"
						/>Your browser does not support the video tag.
					</video>
				:
				<Image
					id={`${idSection}-media`}
					className={`${secondMedia ? styles.columnImage : styles.coverImage}`}
					alt="kiko intro image"
					width={864}
					height={512}
					src={mediaUrl}
				/>}
			{secondMedia && secondMediaUrl && <Image
				className={`${secondMedia && styles.columnImage}`}
				alt="kiko intro image"
				width={864}
				height={512}
				src={secondMediaUrl}
			/>}
			</div>
			{column && 
				<div id={`${idSection}-text-container`}>
					<div 
						className={column === 3 ? styles.threeTextColumn: styles.twoTextColumn} id={`${idSection}-text`}>
						{textContent?.map(col => 
							<div key={Math.random()} className={styles.column}>
							<h4 className={styles.title}>{col.title}</h4>
								<ul  className={styles.text}>
									{col.content?.map(txt=> 
											<li key={Math.random()}><span>{txt}</span></li>
										)}
								</ul>
								{col.contentImage && 
								<Image
									alt="kiko intro image"
									className={styles.contentImage}
									width={217}
									height={76}
									src={col.contentImage}
								/>}
							</div>
						)}
					</div>
				</div>
			}
		</div>
	)
}