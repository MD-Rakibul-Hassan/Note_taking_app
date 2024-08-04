import { useEffect, useState } from "react";
import Note_Container from "./Components/Note_Container/Note_Container";
import Side_bar from "./Components/Side_bar/Side_bar";



function App() {
	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
	const date = new Date(Date.now());
	const fullDate = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`
	const addNotes = (color) => {
		const copyNotes = [...notes];
		console.log(copyNotes)
		copyNotes.push({id:Date.now() + Math.floor(Math.random() * 90), text: '', time: fullDate, color });
		setNotes(copyNotes);
	}

	const deleteNote = (id) => {
		const deletedNote = notes.filter(note => note.id !== id);
		setNotes(deletedNote)
	}

	const updateText = (text, id) => {
		const updatedTextNotes = [...notes];

		const index = updatedTextNotes.findIndex((item) => item.id === id);
		updatedTextNotes[index].text = text;
		setNotes(updatedTextNotes);
	}
	useEffect(() => {
		localStorage.setItem('notes',JSON.stringify(notes))
	},[notes])
  return (
		<div className="container mx-auto flex gap-5 p-10 j">
			<Side_bar addNotes={addNotes} />

			<div className="flex-1">
				<Note_Container notes={notes} deleteNote={deleteNote} updateText={updateText} />
			</div>
		</div>
	);
}

export default App
