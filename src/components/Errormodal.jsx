import React from "react";
import { MdClose } from "react-icons/md";
import { BiSolidErrorAlt } from "react-icons/bi";

const Errormodal = ({ error, onClose }) => {
	return (
		<div className="fixed top-[80px] right-[15px] border-l-4 border-red-500  bg-white rounded-tr-[5px] rounded-br-[5px] shadow-md flex flex-col w-[250px] h-[110px] p-2">
			<div className="flex flex-col w-full">
				<button
					onClick={onClose}
					className="flex justify-end cursor-pointer mr-2"
				>
					<MdClose className="w-5 h-5" />
				</button>
			</div>
			<div className="p-4 flex flex-col items-center justify-center gap-1 leading-5">
				<BiSolidErrorAlt className="text-red-500 w-5 h-5" />
				<h3 className="text-[14px] font-normal text-red-500">{error}</h3>
			</div>
		</div>
	);
};

export default Errormodal;
