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
	const [searchItem, setSearchItem] = useState("");

	const filteredFrutList = fruitsList.filter((item) =>
		item.name.toLowerCase().includes(searchItem.toLowerCase())
	);

	function handleSearchItem(e) {
		setSearchItem(e.target.value);
	}

	return (
		<>
			<label>
				Fruit:
				<input
					placeholder="fruit name"
					value={searchItem}
					onChange={handleSearchItem}
					style={{ marginLeft: "20px" }}
				/>
			</label>
			<ul style={{ marginLeft: "34px" }}>
				{filteredFrutList.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
}

export default function SearchFruits() {
	return (
		<>
			<div style={{ marginLeft: "800px", marginTop: "100px" }}>
				{/* <SearchBar /> */}
				<SearchItemsList />
			</div>
		</>
	);
}
