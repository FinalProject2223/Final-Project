import React from "react";
import s from "./modal.module.scss";

const Modal = ({ isVisible, setIsVisible}) => {

	return (
		<div
			className={isVisible ? s.root : s.root + " " + s.hide}
			onClick={() => setIsVisible(false)}
		>
			<div onClick={(e) => e.stopPropagation()} className={s.inner}>
				
			</div>

		</div>
	);
};

export default Modal;
