import { useState } from "react";
import { fruitsList } from "./data.js";

// function SearchBar() {
// 	return (
// 		<label>
// 			Fruit:
// 			<input onChange={null} style={{ marginLeft: "20px" }} />
// 		</label>
// 	);
// }

// function ItemsList() {
// 	return (
// 		<ul>
// 			{fruitsList.map((item) => (
// 				<li key={item.id}>{item.name}</li>
// 			))}
// 		</ul>
// 	);
// }

function SearchItemsList() {
	// const [searchItem, setSearchItem] = useState('');

	let value = "Apple";

	const filteredFrutList = fruitsList.filter((item) =>
		item.name.toLowerCase().includes(value.toLowerCase())
	);

	return (
		<>
			<label>
				Fruit:
				<input onChange={null} style={{ marginLeft: "20px" }} />
			</label>
			<ul>
				{filteredFrutList.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
}

export default function Gallery() {
	return (
		<>
			<div style={{ marginLeft: "800px", marginTop: "100px" }}>
				{/* <SearchBar /> */}
				<SearchItemsList />
			</div>
		</>
	);
}
