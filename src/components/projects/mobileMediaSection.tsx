import Image from 'next/image';
import styles from './mobileMediaSection.module.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IMobileMediaSection {
	media1: string;
	media2: string;
	media3: string;
	poster?: string;
	idSection: string;
}

export default function MobileMediaSection ({ media1, media2, media3, poster, idSection }: IMobileMediaSection) {

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const startingMargin = '300px';

	useGSAP(() => {
		gsap.to(`#${idSection}-first`, {
			opacity: '1',
			transform: 'translateY(0)',
			scrollTrigger: {
				trigger: `#${idSection}`,
				start: `${startingMargin} bottom`,
				markers: true,
				once: true,
			},
			duration: 1,
		});
		gsap.to(`#${idSection}-second`, {
			opacity: '1',
			transform: 'translateY(80px)',
			scrollTrigger: {
				trigger: `#${idSection}`,
				start: `${startingMargin} bottom`,
				// markers: true,
				once: true,
			},
			duration: 1,
			delay: .5,
		});
		gsap.to(`#${idSection}-third`, {
			opacity: '1',
			transform: 'translateY(160px)',
			scrollTrigger: {
				trigger: `#${idSection}`,
				start: `${startingMargin} bottom`,
				// markers: true,
				once: true,
			},
			duration: 1,
			delay: 1,
		});
	})

	setTimeout(()=>{
		// Tweak for waiting for images to be fully loaded
		ScrollTrigger.refresh();
	}, 2000)

	return (
	<div className={styles.container} id={idSection}>
		<div className={styles.imageBox}>
			{media1.includes('.mp4') && poster ?
				<video 
					id={`${idSection}-first`}
					className={`${styles.image} ${styles.video}`}
					width={216}
					height={466.5}
					controls
					poster={poster}
					preload="none"
				>
				<source src={media1}
				type="video/mp4"
				/> Your browser does not support the video tag.
				</video>
				:
				<Image
					id={`${idSection}-first`}
					className={styles.image}
					alt="kiko intro image"
					width={216}
					height={466.5}
					src={media1}
				/>
			}
			<Image
				id={`${idSection}-second`}
				className={styles.image}
				alt="kiko intro image"
				width={216}
				height={466.5}
				src={media2}
			/>
			<Image
				id={`${idSection}-third`}
				className={styles.image}
				alt="kiko intro image"
				width={216}
				height={466.5}
				src={media3}
			/>
		</div>
	</div>
	)
}