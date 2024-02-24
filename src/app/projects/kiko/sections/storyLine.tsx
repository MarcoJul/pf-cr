import Image from 'next/image'
import styles from './storyLine.module.css'

export default function StoryLine() {

	return (
		<div className={styles.container}>
			<Image
				className={styles.coverImage}
				alt="kiko intro image"
				width={864}
				height={512}
				src="/kiko/storyLine/2019_stylegudeD.png"
				priority
			/>
			<div className={styles.textColumn}>
				<div className={styles.column}>
					<h4 className={styles.title}>Key Goals</h4>
					<ul className={styles.text}>
						<li><span>A mobile first design</span></li>
						<li><span>Promos</span></li>
						<li><span>Quick Buy</span></li>
						<li><span>Conversion Rate</span></li>
						<li><span>Search enhancements</span></li>
					</ul>
				</div>
				<div className={styles.column}>
					<h4 className={styles.title}>Activities</h4>
					<ul  className={styles.text}>
						<li><span>Market trend analysis</span></li>
						<li><span>CX analysis</span></li>
						<li><span>Creative Concept</span></li>
						<li><span>UX/UI design</span></li>
						<li><span>Development Support</span></li>
					</ul>
				</div>
				<div className={styles.column}>
					<h4 className={styles.title}>Achived Results</h4>
					<ul  className={styles.text}>
						<li><span>Average Order Value +5%</span></li>
						<li><span>Transactions +23%</span></li>
						<li><span>Purchase Frequency +25%</span></li>
						<li><span>Conversion Rate +22%</span></li>
					</ul>
				</div>
			</div>
		</div>
	)
}