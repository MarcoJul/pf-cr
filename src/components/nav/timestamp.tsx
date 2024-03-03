import styles from './timestamp.module.css'

interface ITimestamp {
	firstActive: boolean;
	secondActive: boolean;
	thirdActive: boolean;
}

export default function Timestamp ({firstActive, secondActive, thirdActive}: ITimestamp) {

	return (
		<div className={styles.container}>
			<div className={styles.textContent}>
				<div className={`${styles.text} ${firstActive ? styles.box: ''}`}>
					<a href="#ecommerce-redesign">
						<h3>2018-2019</h3>
					</a>
					<p className={styles.subText}>E-commerce Redesign</p>
				</div>
				<div className={`${styles.text} ${secondActive ? styles.box: ''}`}>
					<a href="#evolutive-roadmap">
						<h3>2020-2022</h3>
					</a>
					<p className={styles.subText}>Evolutive Roadmap</p>
				</div>
				<div className={`${styles.text} ${thirdActive ? styles.box: ''}`}>
					<a href="#unified-commerce">
						<h3>2023-2024</h3>
					</a>
					<p className={styles.subText}>Unified commerce</p>
				</div>
			</div>
		</div>
	)
}