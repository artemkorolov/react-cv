import styles from './MainContent.module.css';

function MainContent({ about, experience, projects, education }) {
	return (
		<div className={styles.mainContent}>

			{about && (
				<section className={styles.section}>
					<h2>About Me</h2>
					<p>{about}</p>
				</section>
			)}

			{experience && experience.length > 0 && (
				<section className={styles.section}>
					<h2>Experience</h2>
					<ul>
						{experience.map((item, index) => (
							<li key={index}>
								<strong>{item.position} ({item.period}) </strong>
								{item.description}
							</li>
						))}
					</ul>
				</section>
			)}

			{projects && projects.length > 0 && (
				<section className={styles.section}>
					<h2>Projects</h2>
					<ul>
						{projects.map((project, index) => (
							<li key={index}>
								<strong>{project.name} </strong>
								{project.description}
								{project.link && (
									<>
										<br />
										<a href={project.link} target="_blank" rel="noopener noreferrer">Github</a>
									</>
								)}
							</li>
						))}
					</ul>
				</section>
			)}

			{education && (
				<section className={styles.section}>
					<h2>Education</h2>
					<p>{education}</p>
				</section>
			)}

		</div>
	)
}

export default MainContent;