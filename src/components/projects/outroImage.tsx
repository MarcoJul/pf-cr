import styles from "./outroImage.module.css";

export default function OutroImage() {

	return (
		<div className={styles.imageSection} >
			<div className={styles.imageContent} >
				<div className={styles.boxImage} >
					{/* TODO: Add Next Image Tag */}
					<img
						className={styles.coverImage}
						alt="kiko intro image"
						src="/kiko/outro-image.jpg"
					/>
				</div>
				<div className={styles.ovalBox}>
					<img className={styles.oval} src="/shared/oval.svg" alt=""/>
				</div>
			</div>
		</div>
	);
}
