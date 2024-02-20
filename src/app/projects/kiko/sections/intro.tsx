import Data from "./data";
import styles from "./intro.module.css";
import  IntroImage  from "@/components/projects/introImage";

interface IIntroProps {
	isFullPage: Boolean;
}

export default function Intro( {isFullPage} : IIntroProps) {

	return (
		<section className={styles.introSection}>
			<div  className={styles.textBox}>
				<div id="content" className={styles.content}>
					<p className={`${styles.text} ${isFullPage? styles.textParagraphFull : ''}`}>
						KIKO Milano is an Italian professional cosmetics brand that features a range of cutting-edge makeup, face and body treatments. Safe and effective products of the highest quality, created to satisfy the beauty requirements of women of any age.
					</p>
					<p className={`${styles.text} ${styles.secondText}`}>
						Their call to never stopping evolution and innovation led them to collaborate with my team to give birth, improve, evolve and expand their digital experience through years and markets.
					</p>
				</div>
			</div >
			<Data />
			<div id="image-content" className={`${styles.imageSection} ${isFullPage? styles.imageContainerFull : ''}`}>
				<IntroImage />
			</div>
		</section>
	);
}