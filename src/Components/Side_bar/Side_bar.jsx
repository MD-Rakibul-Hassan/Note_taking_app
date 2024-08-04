import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Side_bar = ({addNotes}) => {
	const colors = ["gray", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
	const [toggler, setToggler] = useState(true);
	return (
		<div>
			<div>
				<BsFillPlusCircleFill
					className="text-7xl "
					onClick={() => setToggler(!toggler)}
				/>
				<ul className={`${toggler ? "block" : "hidden"} transition-all flex flex-col justify-center items-center mt-5 gap-5`}>
					{colors.map((color, index) => {
						console.log(color);
						return (
							<li
								onClick={() => addNotes(color)}
								key={index}
								className={`w-12 h-12 rounded-full `}
								style={{ backgroundColor: color }}
							></li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Side_bar;
