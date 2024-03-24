import styles from "./introImage.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IntroImage() {

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.to(`#first-image`, {
			y: '-45px',
			scrollTrigger: {
				trigger: `#image-content`,
				start: `top 25%`,
				end: '50% top',
				// markers: true,
				scrub: true,
			},
		});
		gsap.to(`#second-image`, {
			y: '-45px',
			scrollTrigger: {
				trigger: `#image-content`,
				start: `50% 50%`,
				end: 'bottom 50%',
				// markers: true,
				scrub: true,
			},
		});
	});

	return (
		<div className={styles.imageContent} >
			<div className={styles.boxImage} >
				{/* TODO: Add Next Image Tag */}
				<img
					id="first-image"
					className={styles.coverImage}
					alt="kiko intro image"
					src="/kiko/intro-first.jpg"
				/>
				<img
					className={`${styles.coverImage} ${styles.secondImage}`}
					alt="kiko intro image"
					src="/kiko/intro-second.jpg"
					id="second-image"
				/>
			</div>
			<div id="oval" className={styles.ovalBox}>
				<img className={styles.oval} src="/shared/oval.svg" alt=""/>
			</div>
		</div>
	);
}
