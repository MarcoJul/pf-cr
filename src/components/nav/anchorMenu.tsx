import styles from './anchorMenu.module.css'

interface IAnchorMenuProps {
	firstActive: boolean;
	secondActive: boolean;
	thirdActive: boolean;
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
		className={styles.arrowIcon}
  >
    <path
      d="M28.79 34c.195-.962.52-2.003.977-3.125a15.076 15.076 0 0 1 1.906-3.27 8.76 8.76 0 0 1 2.932-2.403v-.192L11 25.298v-2.596l23.605.288v-.192c-1.205-.737-2.199-1.602-2.98-2.596a13.438 13.438 0 0 1-1.858-3.125A23.538 23.538 0 0 1 28.79 14h2.883c.163 1.154.456 2.276.88 3.365a14.994 14.994 0 0 0 1.759 3.03A16.23 16.23 0 0 0 37 23.086v1.826c-1.499 1.25-2.704 2.58-3.617 3.99-.88 1.411-1.45 3.11-1.71 5.097H28.79Z"
    />
  </svg>
)

export default function AnchorMenu ({firstActive, secondActive, thirdActive}: IAnchorMenuProps) {

	return (
		<div className={styles.container}>
			<div className={styles.textContent}>

				<div className={`${styles.text} ${firstActive ? styles.activeBox: ''}`}>
					<a href="#ecommerce-redesign" className={styles.titleBlock}>
						<ArrowIcon />
						<h3 className={styles.mainTitle}>2018</h3>
						<span className={styles.lineSeparator}></span>
						<h3 className={styles.mainTitle}>19</h3>
					</a>
					<p className={styles.subText}>eCommerce redesign</p>
				</div>

				<div className={`${styles.text} ${secondActive ? styles.activeBox: ''}`}>
					<a href="#evolutive-roadmap" className={styles.titleBlock}>
						<ArrowIcon />
						<h3 className={styles.mainTitle}>2020</h3>
						<span className={styles.lineSeparator}></span>
						<h3 className={styles.mainTitle}>22</h3>
					</a>
					<p className={styles.subText}>Evolutive Roadmap</p>
				</div>

				<div className={`${styles.text} ${thirdActive ? styles.activeBox: ''}`}>
					<a href="#unified-commerce" className={styles.titleBlock}>
						<ArrowIcon />
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