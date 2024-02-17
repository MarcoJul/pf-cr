
import styles from "./data.module.css"
import DataCard from "@/components/projects/dataCard";

export default function Data() {
	return (
		<section className={styles.dataSection}>
			<div className={styles.container}>
				<ul className={styles.grid}>
					<DataCard title="Year" icon="/shared/icon-calendar.svg" text="2019-2023" />
					<DataCard title="Market" icon="/shared/icon-bag.svg" text="Beauty & Cosmetics" />
					<DataCard title="Activities" icon="/shared/icon-activities.svg" text="Market trend analysis; CX analisys; Creative Concept; UX/UI design; Development support" />
					<DataCard title="Commerce Platform" icon="/shared/icon-platform.svg" text="Sap Hybris; EVA Unified Commerce" />
					<DataCard title="Online Website" icon="/shared/icon-link.svg" isTextWebsite={true} text="kikocosmetic.com" href="https://www.kikocosmetics.com/" />
					<DataCard title="Soundtrack" icon="/shared/icon-music.svg" isMusic={true}/>
				</ul>
			</div>
		</section>
	);
}
