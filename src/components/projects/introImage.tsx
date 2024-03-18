import styles from "./introImage.module.css"

export default function introImage() {
	return (
		<div className={styles.imageContent}>
			<div className={styles.boxImage} >
				<img
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
