import Image from 'next/image'
import styles from './storyLine.module.css'
import type { TextContent } from '@/types';

interface IStoryLine {
	sectionTitle?: string;
	mediaUrl: string;
	column?: number;
	textContent?: TextContent;
	secondMedia?: boolean;
	secondMediaUrl?: string;
}

export default function StoryLine({sectionTitle, mediaUrl, column, textContent, secondMedia, secondMediaUrl}: IStoryLine) {

	return (
		<div className={styles.container} id={sectionTitle ?? ''}>
			<div className={`${secondMedia && styles.column}`}>
				{mediaUrl.includes('.mp4') ? 
					<video 
						className={styles.coverImage}
						width={864}
						height={512}
						controls
						poster={"/kiko/storyLine/2023_conceptD.png"}
						preload="none"
						>
						<source src={mediaUrl}
						type="video/mp4"
						/>Your browser does not support the video tag.
					</video>
				:
				<Image
				className={`${secondMedia ? styles.columnImage :styles.coverImage}`}
				alt="kiko intro image"
				width={864}
				height={512}
				src={mediaUrl}
			/>}
			{secondMedia && secondMediaUrl && <Image
				className={`${secondMedia && styles.columnImage}`}
				alt="kiko intro image"
				width={864}
				height={512}
				src={secondMediaUrl}
			/>}
			</div>
			{column && 
				<div 
					className={column === 3 ? styles.threeTextColumn: styles.twoTextColumn}>
					{textContent?.map(col => 
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