import styles from './timestamp.module.css'

interface ITimestamp {
	isVisible: boolean;
}

export default function Timestamp ({isVisible}: ITimestamp) {
	return (
		<div className={`${styles.container} ${isVisible ? styles.showContainer: ''}`}>
			<div className={styles.textContent}>
				<h3>2018-2019</h3>
				<p>E-commerce Design</p>
			</div>
		</div>
	)
}