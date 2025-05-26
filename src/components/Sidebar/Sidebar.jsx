import styles from './Sidebar.module.css';

function Sidebar({ profile, contact, skills, social, certificates }) {
	return (
		<aside className={styles.sidebar}>

			{profile && (
				<div className={styles.profile}>
					<img
						src={profile.avatar}
						alt="Avatar"
						className={styles.avatar}
					/>
					<h2>{profile.name}</h2>
					<p>{profile.title}</p>
				</div>
			)}

			{contact && (
				<div className={styles.contact}>
					<h3>Contact</h3>
					<ul>
						<li>{contact.email}</li>
						<li>{contact.phone}</li>
						<li>{contact.location}</li>
					</ul>
				</div>
			)}

			{skills && skills.length > 0 && (
				<div className={styles.skills}>
					<h3>Skills</h3>
					<ul>
						{skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>

			)}

			{social && social.length > 0 && (
				<div className={styles.social}>
					<h3>Social</h3>
					<ul>
						{social.map((item, index) => (
							<li key={index}>
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
								>{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}

			{certificates && certificates.length > 0 && (
				<div className={styles.certificates}>
					<h3>Certificates</h3>
					<ul>
						{certificates.map((certificate, index) => (
							<li key={index}>{certificate}</li>
						))}
					</ul>
				</div>
			)}

		</aside>
	);
}

export default Sidebar;