import Image from "next/image";
import styles from "./introImage.module.css"

export default function introImage() {
  return (
    <div className={styles.imageContent}>
      <div className={styles.boxImage} >
        <Image
          className={styles.coverImage}
          alt="kiko intro image"
          width={525}
          height={525}
          src="/kiko/intro-kiko.jpg"
          priority
        />
      </div>
        <Image className={styles.oval} src="/shared/oval.svg" alt="" width={525} height={525} />
    </div>
  );
}
