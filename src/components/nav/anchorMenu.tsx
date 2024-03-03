import Image from 'next/image';
import styles from './anchorMenu.module.css'

interface IAnchorMenuProps {
	firstActive: boolean;
	secondActive: boolean;
	thirdActive: boolean;
}

export default function AnchorMenu ({firstActive, secondActive, thirdActive}: IAnchorMenuProps) {

	return (
		<div className={styles.container}>
			<div className={styles.textContent}>

				<div className={`${styles.text} ${firstActive ? styles.activeBox: ''}`}>
					<a href="#ecommerce-redesign" className={styles.titleBlock}>
						<Image
								src="/MenuIcon.svg"
								className={styles.arrowIcon}
								alt=""
								width={30}
								height={30}
								priority
							/>
						<h3 className={styles.mainTitle}>2018</h3>
						<span className={styles.lineSeparator}></span>
						<h3 className={styles.mainTitle}>19</h3>
					</a>
					<p className={styles.subText}>eCommerce redesign</p>
				</div>

				<div className={`${styles.text} ${secondActive ? styles.activeBox: ''}`}>
					<a href="#evolutive-roadmap" className={styles.titleBlock}>
						<Image
							src="/MenuIcon.svg"
							className={styles.arrowIcon}
							alt=""
							width={30}
							height={30}
							priority
						/>
						<h3 className={styles.mainTitle}>2020</h3>
						<span className={styles.lineSeparator}></span>
						<h3 className={styles.mainTitle}>22</h3>
					</a>
					<p className={styles.subText}>Evolutive Roadmap</p>
				</div>

				<div className={`${styles.text} ${thirdActive ? styles.activeBox: ''}`}>
					<a href="#unified-commerce" className={styles.titleBlock}>
						<Image
							src="/MenuIcon.svg"
							className={styles.arrowIcon}
							alt=""
							width={30}
							height={30}
							priority
						/>
						<h3 className={styles.mainTitle}>2023</h3>
						<span className={styles.lineSeparator}></span>
						<h3 className={styles.mainTitle}>24</h3>
					</a>
					<p className={styles.subText}>Unified commerce</p>
				</div>
			</div>
		</div>
	)
}