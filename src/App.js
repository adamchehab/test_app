import { useState } from "react";
import { fruitsList } from "./data.js";
import "./App.css";

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
		<ul>
			{list.map((item) => (
				<li key={item.id}>
					{/* <input type="checkbox" /> */}
					{item.name}
				</li>
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
		<div className="searchPanel">
			<SearchBar
				title="Fruits:"
				placeholder="fruit name"
				value={searchItem}
				handler={handleSearchItem}
				style={{ marginLeft: "20px" }}
			/>
			<ItemsList list={filteredFrutList} />
		</div>
	);
}

export default function Page() {
	return (
		<>
			<SearchItemsList />
		</>
	);
}
