
import { RiDeleteBin6Line } from "react-icons/ri";
import './note.css'
const Note = ({ id, text, time, color, deleteNote, updateText }) => {
	const timer = 500;
	let timeOut;
	const debounce = (fn) => {
		clearTimeout(timeOut);
		timeOut = setTimeout(fn, timer);
	};

	const update_Text = (text,id) => {
		debounce(() => updateText(text,id));
	};

	return (
		<div
			style={{ backgroundColor: color }}
			className={` note
            p-[25px] h-[300px] w-full flex flex-col rounded-[30px]
			`}
		>
			<textarea
				className="flex-1 resize-none bg-transparent text-[1rem] leading-[1.875] border-0 outline-none"
				defaultValue={text}
				onChange={(event) => update_Text(event.target.value, id)}
			></textarea>

			<div className="flex justify-between items-center">
				<p>{time}</p>
				<RiDeleteBin6Line
					onClick={() => deleteNote(id)}
					className={`icon  text-red-500 text-2xl`}
				/>
			</div>
		</div>
	);
};

export default Note;
