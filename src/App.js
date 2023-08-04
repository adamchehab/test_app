import { Profile, Avatar } from "./utils.js";

export default function Gallery() {
	return (
		<div>
			<h1>Notable Scientists</h1>
			<Profile
				name="Maria Skłodowska-Curie"
				profession="physicist and chemist"
				awards={[
					"Nobel Prize in Physics",
					"Nobel Prize in Chemistry",
					"Davy Medal",
					"Matteucci Medal",
				]}
				discovered="polonium (element)"
			>
				<Avatar
					person={{
						name: "Maria Skłodowska-Curie",
						imgUrl: "szV5sdG",
					}}
				/>
			</Profile>
			<Profile
				name="Katsuko Saruhashi"
				profession="geochemist"
				awards={[
					"Miyake Prize for geochemistry",
					"Tanaka Prize",
				]}
				discovered="a method for measuring carbon dioxide in seawater"
			>
				<Avatar
					person={{
						name: "Katsuko Saruhashi",
						imgUrl: "YfeOqp2",
					}}
				/>
			</Profile>
		</div>
	);
}
