import Image from 'next/image'
import styles from './storyLine.module.css'

interface IStoryLine {
	imageUrl: string;
	column?: number;
	textContent: {
		title: string;
		content: string[];
	}[]
}

export default function StoryLine({imageUrl, column, textContent}: IStoryLine) {

	return (
		<div className={styles.container}>
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
							{column.content.map(txt=> 
									<li key={txt}><span>{txt}</span></li>
								)}
						</ul>
					</div>
					)}
			</div>}
		</div>
	)
}