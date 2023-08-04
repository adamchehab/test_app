export function getImageUrl(imageId, size = "s") {
	return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export function Profile(props) {
	return (
		<section className="profile">
			<h2>{props.name}</h2>
			{props.children}
			<ul>
				<li>
					<b>Profession: </b>
					{props.profession}
				</li>
				<li>
					<b>Awards: {props.awards.length} </b>
					({props.awards.join(', ')})
				</li>
				<li>
					<b>Discovered: </b>
					{props.discovered}
				</li>
			</ul>
		</section>
	);
}

export function Avatar({ person, size = "90" }) {
	return (
		<img
			className="avatar"
			src={getImageUrl(person.imgUrl)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}
