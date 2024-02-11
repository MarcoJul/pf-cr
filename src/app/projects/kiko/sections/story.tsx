import styles from "./story.module.css";
import  StoryImage  from "@/components/projects/StoryImage";

export default function Story() {

  return (
    <>
      <section id="story" className={`${styles.storySection} `}>
        <div id="content" className={styles.contentBox}>
          <div className={styles.textImage}>
            <p className={styles.textParagraph}>
              KIKO Milano is an Italian professional cosmetics brand that features a range of cutting-edge makeup, face and body treatments. Safe and effective products of the highest quality, created to satisfy the beauty requirements of women of any age.
            </p>
          </div >
          <div className={styles.imageSection}>
            <StoryImage/>
          </div>
          <div className={styles.secondParagraph}>
              <p>
                Their call to never stopping evolution and innovation led them to collaborate with my team to give birth, improve, evolve and expand their digital experience through years and markets.
              </p>
            </div >
        </div>
    </section>
</>
  );
}