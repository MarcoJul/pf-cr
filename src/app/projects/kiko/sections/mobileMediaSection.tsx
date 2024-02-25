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
			<Image
				className={styles.image}
				alt="kiko intro image"
				width={216}
				height={466.5}
				src={image1}
			/>
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