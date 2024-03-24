'use client'
import Link from "next/link";
import styles from "./page.module.css";
import ContainerWrapper from "./sections/containerWrapper";
import { useState } from "react";
import OutroImage from "@/components/projects/outroImage";
import Image from "next/image";


export default function Home() {
	const [introImage, setIntroImage] = useState(1);

	function setImage (event:any) {
		setIntroImage(event)
	}
	
	return (
		<main className={styles.main}>
			<section 
				id="hero" 
				className={`${styles.hero} ${introImage === 0 ? '' : introImage === 1 ? styles.firstImage : styles.secondImage}`}
			>
				{introImage === 1 ?
					<div className={styles.heroTextBox}>
						<h1 className={styles.title}>KIKO Milano</h1>
						<p className={styles.kicker}>Composable Commerce:<br/> a continuous evolution</p>
					</div>
					:
					<div className={styles.heroTextBox}>
						<h1 className={styles.title}>Game7 Athletics</h1>
						<Link className={styles.navLink}  href="/project/g7a">
							<span>View Project</span>
							<Image
								src="/shared/icon-arrow-right.svg"
								className={styles.linkIcon}
								alt="Go to homepage"
								width={24}
								height={24}
								priority
							/>
						</Link>
					</div>
				}
				{introImage === 2 && 
					<OutroImage />
				}
			</section>
			<ContainerWrapper onSetImage={setImage}/>
		</main>
	);
}
