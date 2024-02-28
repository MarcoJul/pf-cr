import Image from 'next/image'
import styles from './storyLine.module.css'
import type { TextContent } from '@/types';

interface IStoryLine {
	sectionTitle?: string;
	imageUrl: string;
	column?: number;
	textContent: TextContent;
}

export default function StoryLine({sectionTitle, imageUrl, column, textContent}: IStoryLine) {

	return (
		<div className={styles.container} id={sectionTitle ?? ''}>
			<Image
				className={styles.coverImage}
				alt="kiko intro image"
				width={864}
				height={512}
				src={imageUrl}
			/>
			{column && 
				<div 
					className={column === 3 ? styles.threeTextColumn: styles.twoTextColumn}>
					{textContent.map(col => 
						<div key={Math.random()} className={styles.column}>
						<h4 className={styles.title}>{col.title}</h4>
							<ul  className={styles.text}>
								{col.content?.map(txt=> 
										<li key={Math.random()}><span>{txt}</span></li>
									)}
							</ul>
							{col.contentImage && 
							<Image
								alt="kiko intro image"
								width={217}
								height={76}
								src={col.contentImage}
							/>}
						</div>
						)}
				</div>
			}
		</div>
	)
}