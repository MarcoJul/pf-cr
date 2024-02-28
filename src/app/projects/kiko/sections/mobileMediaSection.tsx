import Image from 'next/image';
import styles from './mobileMediaSection.module.css';

interface IMobileMediaSection {
	image1: string;
	image2: string;
	image3: string;
}

export default function MobileMediaSection ({image1, image2, image3}: IMobileMediaSection) {

	return (
	<div className={styles.container}>
		<div className={styles.imageBox}>
			{image1.includes('.mp4') ?
				<video 
					className={styles.image}
					width="216"
					height="466.5"
					controls
					poster="/kiko/storyline/2020_app1.jpg"
					preload="none"
				>
				<source src={image1}
				type="video/mp4"
				/> Your browser does not support the video tag.
				</video>
				:
				<Image
					className={styles.image}
					alt="kiko intro image"
					width={216}
					height={466.5}
					src={image1}
				/>
			}
			<Image
				className={styles.image}
				alt="kiko intro image"
				width={216}
				height={466.5}
				src={image2}
			/>
			<Image
				className={styles.image}
				alt="kiko intro image"
				width={216}
				height={466.5}
				src={image3}
			/>
		</div>
	</div>
	)
}