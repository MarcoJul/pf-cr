import Image from "next/image";
import styles from "./storyImage.module.css"

export default function StoryImage() {
  return (
    <>
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
    </>
  );
}