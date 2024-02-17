import Image from "next/image";
import styles from "./dataCard.module.css"

interface IDataCardProps {
	icon: string;
	title: string;
	text?: string;
	isTextWebsite?: boolean;
	href?: string;
	isMusic?: boolean;
}

export default function DataCard({icon, title, text, isTextWebsite, href, isMusic}: IDataCardProps) {

	const textList: string[] = text?.includes(';') ? text.split(';'): [];

	return (
		<li className={styles.item}>
			<div className={styles.icon}>
				<Image
					alt={title}
					width={35}
					height={35}
					src={icon}
					priority
			/></div>
			<h3 className={styles.title}>{title}</h3>
			{isTextWebsite ? 
				<a className={styles.link} href={href}>{text}</a>
				: <div className={styles.body}>
				{textList.length > 0 ? 
					<ul>{textList.map(item => <li className={styles.listItem} key={item}>{item}</li>)}</ul> : <p>{text}</p>
				}
				</div>
			}
			{isMusic && 
				<iframe style={{borderRadius: "12px", border: "0px"}} src="https://open.spotify.com/embed/track/5vaOdnTldKw74qWjezLfRO?utm_source=generator&theme=0" width="80%" height="100" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			}
		</li>
	);
}
