
import Note from '../Note/Note'

const Note_Container = ({ notes, deleteNote, updateText }) => {
	const reversednNote = notes.toReversed();
	return (
		<div>
			<h1 className="text-4xl my-5 p-4 font-bold ">Note list</h1>
			<div className="grid grid-cols-4 gap-5 ">
				{reversednNote.map((note, index) => (
					<Note
						key={note.id}
						deleteNote={deleteNote}
						id={note.id}
						text={note.text}
						time={note.time}
						color={note.color}
						updateText={updateText}
					/>
				))}
			</div>
		</div>
	);
};

export default Note_Container
