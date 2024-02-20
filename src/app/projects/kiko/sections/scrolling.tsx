
import Image from "next/image";
import styles from "./scrolling.module.css"

export default function Scrolling() {
  return (
    <section className={styles.scrollingSection}>
      <div className={styles.marquee}>
      <Image
        className={styles.logo}
					alt='kiko-logo'
					width={237}
					height={135}
					src="/kiko/logo-kiko.svg"
					priority
			/>
     </div>
    </section>
  );
}
