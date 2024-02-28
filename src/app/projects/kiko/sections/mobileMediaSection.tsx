import Image from 'next/image';
import styles from './mobileMediaSection.module.css';

interface IMobileMediaSection {
	media1: string;
	media2: string;
	media3: string;
}

export default function MobileMediaSection ({media1, media2, media3}: IMobileMediaSection) {

	return (
	<div className={styles.container}>
		<div className={styles.imageBox}>
			{media1.includes('.mp4') ?
				<video 
					className={styles.image}
					width="216"
					height="466.5"
					controls
					poster="/kiko/storyline/2020_app1.jpg"
					preload="none"
				>
				<source src={media1}
				type="video/mp4"
				/> Your browser does not support the video tag.
				</video>
				:
				<Image
					className={styles.image}
					alt="kiko intro image"
					width={216}
					height={466.5}
					src={media1}
				/>
			}
			<Image
				className={styles.image}
				alt="kiko intro image"
				width={216}
				height={466.5}
				src={media2}
			/>
			<Image
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