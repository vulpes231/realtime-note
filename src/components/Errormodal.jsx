import React from "react";
import { MdCancel } from "react-icons/md";

const Errormodal = ({ error, onClose }) => {
	return (
		<div className="fixed top-[80px] right-[15px] border-t-2 border-red-500">
			<button onClick={onClose}>
				<MdCancel />
			</button>
			<h3>{error}</h3>
		</div>
	);
};

export default Errormodal;
