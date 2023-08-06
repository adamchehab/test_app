import { useState } from "react";
import { fruitsList } from "./data.js";

function SearchBar({ title, placeholder, value, handler, style }) {
	return (
		<label>
			{title}
			<input
				placeholder={placeholder}
				value={value}
				onChange={handler}
				style={style}
			/>
		</label>
	);
}

function ItemsList({ list }) {
	return (
		<ul style={{ marginLeft: "34px" }}>
			{list.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);
}

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
			<SearchBar
				title="Fruits:"
				placeholder="fruit name"
				value={searchItem}
				handler={handleSearchItem}
				style={{ marginLeft: "20px" }}
			/>
			<ItemsList list={filteredFrutList} />
		</>
	);
}

export default function SearchFruits() {
	return (
		<>
			<div style={{ marginLeft: "800px", marginTop: "100px" }}>
				<SearchItemsList />
			</div>
		</>
	);
}
