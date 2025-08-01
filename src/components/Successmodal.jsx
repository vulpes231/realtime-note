import React from "react";

const Successmodal = ({ text, onClose }) => {
	return (
		<div className="fixed top-[80px] right-[15px] border-l-4 border-green-500  bg-white rounded-tr-[5px] rounded-br-[5px] shadow-md flex flex-col w-[250px] h-[110px] p-2">
			<div className="flex flex-col w-full">
				<button onClick={onClose} className="flex justify-end cursor-pointer">
					<MdClose className="w-5 h-5" />
				</button>
			</div>
			<div className="p-4 flex flex-col items-center justify-center gap-1 leading-5">
				<BiSolidErrorAlt className="text-green-500 w-6 h-6" />
				<h3 className="text-[14px] font-medium text-green-500">{text}</h3>
			</div>
		</div>
	);
};

export default Successmodal;
