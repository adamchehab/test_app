import { useState } from "react";
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

const initialItems = [
	{ id: 0, title: "Warm socks", packed: true },
	{ id: 1, title: "Travel journal", packed: false },
	{ id: 2, title: "Watercolors", packed: false },
	{ id: 3, title: "Test item", packed: false },
];
let nextId = initialItems.length;

export default function TravelPlan() {
	const [items, setItems] = useState(initialItems);
	const [total, setTotal] = useState(initialItems.length);

	function handleAddItem(title) {
		setTotal(total + 1);
		setItems([
			...items,
			{
				id: nextId++,
				title: title,
				packed: false,
			},
		]);
	}

	function handleChangeItem(nextItem) {
		setItems(
			items.map((item) => {
				if (item.id === nextItem.id) {
					return nextItem;
				} else {
					return item;
				}
			})
		);
	}

	function handleDeleteItem(itemId) {
		setTotal(total - 1);
		setItems(items.filter((item) => item.id !== itemId));
	}

	return (
		<>
			<AddItem onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onChangeItem={handleChangeItem}
				onDeleteItem={handleDeleteItem}
			/>
			<hr />
			<b>
				{items.reduce((packedItemsCount, current) => (current.packed ? packedItemsCount + 1 : packedItemsCount + 0),0)}
              {" "} out of {total} packed!
			</b>
		</>
	);
}
