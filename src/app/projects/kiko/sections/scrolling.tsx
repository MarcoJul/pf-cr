import Image from "next/image";
import styles from "./scrolling.module.css";
import Marquee from "react-fast-marquee";

export default function Scrolling() {
	return (
		<section className={styles.scrollingSection}>
			<Marquee>
				{[0, 1, 2].map(logo=>{
					return (
						<Image
							key={logo}
							className={styles.logo}
							alt='kiko-logo'
							width={1572}
							height={56}
							src="/kiko/logo-kiko-gradient.svg"
							priority
						/>
					)
				})}
			</Marquee>
		</section>
	);
}
