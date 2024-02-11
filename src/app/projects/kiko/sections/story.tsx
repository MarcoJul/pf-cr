import styles from "./story.module.css";
import  StoryImage  from "@/components/projects/StoryImage";

export default function Story() {

  return (
      <section className={styles.storySection}>
          <div  className={styles.textBox}>
            <div id="content">
              <p className={styles.text}>
                KIKO Milano is an Italian professional cosmetics brand that features a range of cutting-edge makeup, face and body treatments. Safe and effective products of the highest quality, created to satisfy the beauty requirements of women of any age.
              </p>
              <p className={`${styles.text} ${styles.secondText}`}>
                Their call to never stopping evolution and innovation led them to collaborate with my team to give birth, improve, evolve and expand their digital experience through years and markets.
              </p>
            </div>
          </div >
          <div className={styles.dataBox}>
            ContainerData
          </div>
          <div id="image-content" className={styles.imageSection}>
            <StoryImage/>
          </div>
    </section>
  );
}