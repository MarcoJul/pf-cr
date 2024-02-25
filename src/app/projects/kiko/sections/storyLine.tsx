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
			{column && <div className={column === 3 ? styles.threeTextColumn: styles.twoTextColumn}>
				{textContent.map(column => 
					<div className={styles.column} key={column.title}>
					<h4 className={styles.title}>{column.title}</h4>
						<ul  className={styles.text}>
							{column.content?.map(txt=> 
									<li key={txt}><span>{txt}</span></li>
								)}
						</ul>
						{column.contentImage && 
						<Image
							alt="kiko intro image"
							width={217}
							height={76}
							src={column.contentImage}
						/>}
					</div>
					)}
			</div>}
		</div>
	)
}