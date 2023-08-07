import { useState } from "react";

export default function EditProfile() {
	const [editMode, setEditMode] = useState(false);
	const [firstName, setFirstName] = useState("Adam");
	const [lastName, setLastName] = useState("Shehab");

	function handleEditToggle(e) {
		e.preventDefault();
		setEditMode(!editMode);
	}

	function handleFirstNameChange(e) {
		setFirstName(e.target.value);
	}

	function handleLastNameChange(e) {
		setLastName(e.target.value);
	}

	return (
		<form style={{ marginLeft: "500px" }}>
			<label style={{ display: "block" }}>
				First name:{" "}
				{editMode ? (
					<input value={firstName} onChange={handleFirstNameChange} />
				) : (
					<b>{firstName}</b>
				)}
			</label>

			<label style={{ display: "block" }}>
				Last name:{" "}
				{editMode ? (
					<input value={lastName} onChange={handleLastNameChange} />
				) : (
					<b>{lastName}</b>
				)}
			</label>

			<button type="submit" onClick={handleEditToggle}>
				{editMode ? "Save changes" : "Edit Profile"}
			</button>

			<p>
				Hello, {firstName} {lastName}!
			</p>
		</form>
	);
}
