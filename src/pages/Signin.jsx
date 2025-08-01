import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaX, FaTelegram } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { resetSignin, signinUser } from "../features/signinSlice";
import { format } from "date-fns";

const Signin = () => {
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const { signinLoading, signinError, token } = useSelector(
		(state) => state.login
	);

	const inputs = [
		{
			id: "email",
			label: "email",
			type: "text",
			value: form.email,
			name: "email",
		},
		{
			id: "password",
			label: "password",
			type: "password",
			value: form.password,
			name: "password",
		},
	];

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		for (const key in form) {
			if (form[key] === "") {
				setError(`${form[key]} is required!`);
				return;
			}
		}
		console.log(form);
		dispatch(signinUser(form));
	};

	useEffect(() => {
		if (signinError && signinError !== null) {
			setError(signinError);
		}
	}, [signinError]);

	useEffect(() => {
		let timeout;
		if (error) {
			timeout = setTimeout(() => {
				dispatch(resetSignin());
				setError("");
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [error, dispatch]);

	useEffect(() => {
		let timeout;
		if (token) {
			const logTime = format(new Date(), "dd MMM, yyyy\thh:mm a");
			timeout = setTimeout(() => {
				dispatch(resetSignin());
				sessionStorage.setItem("logTime", logTime);
				sessionStorage.setItem("token", token);
				window.location.href = "/dashboard";
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [token, dispatch]);

	return (
		<section className="mt-[70px] bg-slate-50 min-h-screen p-[15px] flex flex-col gap-6">
			<form
				action=""
				className="flex flex-col gap-4 bg-white p-6 shadow-sm rounded-[10px] mt-[20px] md:w-[390px] md:mx-auto"
			>
				<h3 className="font-semibold text-[18px] lg:text-[22px] py-[10px]">
					Sign in to access features.
				</h3>
				{inputs.map((input) => {
					return (
						<div key={input.id} className="flex flex-col gap-1">
							<label
								htmlFor=""
								className="text-[14px] text-[#979797] capitalize"
							>
								{input.label}
							</label>
							<input
								className="border-[1.5px] h-[39px] border-[#505050] rounded-[3px] p-2 outline-none focus:border-2"
								type={input.type}
								onChange={handleInput}
								value={input.value}
								name={input.name}
								autoComplete="off"
							/>
						</div>
					);
				})}
				<button
					className="h-[40px] text-[14px] lg:text-[16px] bg-black text-[#fff] font-bold capitalize rounded-[5px] my-[15px]"
					onClick={handleSubmit}
				>
					sign in
				</button>
			</form>
			<div className="flex items-center justify-center flex-col gap-2 md:w-[380px] md:mx-auto">
				<small className="font-normal text-[12px] text-[505050] text-center">
					Dont have an account?{" "}
					<Link className="underline capitalize" to={"/signup"}>
						create account
					</Link>
				</small>
				<div className="flex items-center justify-center gap-2">
					<FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
					<FaX className="w-6 h-6 cursor-pointer hover:text-black/80" />
					<FaTelegram className="w-6 h-6 cursor-pointer hover:text-blue-500" />
				</div>
			</div>
		</section>
	);
};

export default Signin;
