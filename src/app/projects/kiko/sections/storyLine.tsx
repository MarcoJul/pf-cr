import Image from 'next/image'
import styles from './storyLine.module.css'

export default function StoryLine() {
  return <div className={styles.container}>
    <Image
          className={styles.coverImage}
          alt="kiko intro image"
          width={864}
          height={512}
          src="/kiko/storyLine/2019_stylegudeD.png"
          priority
        />
  </div>
}