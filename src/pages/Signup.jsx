import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaX, FaTelegram } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Errormodal, Loader, Successmodal } from "../components";
import { createUser, resetSignup } from "../features/signupSlice";

const Signup = () => {
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const { createUserLoading, createUserError, userCreated } = useSelector(
		(state) => state.register
	);

	const inputs = [
		{
			id: "username",
			label: "username",
			type: "text",
			value: form.username,
			name: "username",
		},
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
		{
			id: "confirm",
			label: "confirm password",
			type: "password",
			value: form.confirmPassword,
			name: "confirmPassword",
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
				setError(`${key[0].toUpperCase() + key.slice(1)} is required!`);
				return;
			}
		}
		console.log(form);
		dispatch(createUser(form));
	};

	useEffect(() => {
		if (createUserError && createUserError !== null) {
			setError(createUserError.message);
		}
	}, [createUserError]);

	useEffect(() => {
		let timeout;
		if (error) {
			timeout = setTimeout(() => {
				dispatch(resetSignup());
				setError("");
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [error, dispatch]);

	useEffect(() => {
		let timeout;
		if (userCreated) {
			timeout = setTimeout(() => {
				dispatch(resetSignup());
				window.location.href = "/signin";
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [userCreated, dispatch]);

	return (
		<section className="mt-[70px] bg-slate-50 min-h-screen p-[15px] flex flex-col gap-6">
			<form
				action=""
				className="flex flex-col gap-4 bg-white p-6 shadow-sm rounded-[10px] mt-[20px] sm:w-[390px] sm:mx-auto"
			>
				<h3 className="font-black text-[18px] lg:text-[22px] py-[10px]">
					Create new account.
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
					sign up
				</button>
			</form>
			<div className="flex items-center justify-center flex-col gap-2 md:w-[380px] md:mx-auto">
				<small className="font-normal text-[12px] text-[505050] text-center">
					Already have an account?{" "}
					<Link className="underline" to={"/signin"}>
						Login now
					</Link>
				</small>
				<div className="flex items-center justify-center gap-2">
					<FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
					<FaX className="w-6 h-6 cursor-pointer hover:text-black/80" />
					<FaTelegram className="w-6 h-6 cursor-pointer hover:text-blue-500" />
				</div>
			</div>
			{error && <Errormodal error={error} onClose={() => setError("")} />}
			{createUserLoading && <Loader text={"Creating account..."} />}
			{userCreated && <Successmodal text={"Account created."} />}
		</section>
	);
};

export default Signup;
