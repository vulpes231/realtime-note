import React from "react";
import { FiPlus, FiClock, FiUsers, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const logTime = sessionStorage.getItem("logTime");
	const userName = "Team Member"; // Would come from auth in real app

	return (
		<section className="min-h-screen bg-gray-50 p-6 mt-[70px]">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<header className="mb-8">
					<div className="flex justify-between items-start">
						<div>
							<h1 className="text-3xl font-bold text-gray-800">
								Welcome, {userName}
							</h1>
							<div className="flex items-center text-gray-500 mt-1">
								<FiClock className="mr-2" />
								<span>Last active: {logTime || "Just now"}</span>
							</div>
						</div>
						<Link
							to={"/create"}
							className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
						>
							<FiPlus className="mr-2" />
							New Note
						</Link>
					</div>
				</header>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-center">
							<div className="p-3 rounded-full bg-indigo-50 text-indigo-600 mr-4">
								<FiUsers size={20} />
							</div>
							<div>
								<h3 className="text-gray-500 text-sm">Collaborators</h3>
								<p className="text-2xl font-semibold">12</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-center">
							<div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
								<FiPlus size={20} />
							</div>
							<div>
								<h3 className="text-gray-500 text-sm">Your Notes</h3>
								<p className="text-2xl font-semibold">5</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-center">
							<div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
								<FiTrendingUp size={20} />
							</div>
							<div>
								<h3 className="text-gray-500 text-sm">Active Sessions</h3>
								<p className="text-2xl font-semibold">3</p>
							</div>
						</div>
					</div>
				</div>

				{/* Recent Notes Section */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-xl font-semibold text-gray-800">
							Recent Notes
						</h2>
						<button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
							View All
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{/* Note Card - Would be mapped in real app */}
						<div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
							<div className="flex justify-between items-start mb-2">
								<h3 className="font-medium text-gray-800">
									Project Brainstorm
								</h3>
								<span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
									3 collaborators
								</span>
							</div>
							<p className="text-gray-500 text-sm mb-3 line-clamp-2">
								Ideas for the new marketing campaign and target demographics...
							</p>
							<div className="flex justify-between items-center text-xs text-gray-400">
								<span>Updated 2h ago</span>
								<span>12 edits</span>
							</div>
						</div>

						{/* Empty State */}
						{false && ( // Change to your condition
							<div className="col-span-full text-center py-12">
								<div className="mx-auto max-w-md">
									<FiPlus className="mx-auto h-12 w-12 text-gray-400" />
									<h3 className="mt-2 text-sm font-medium text-gray-900">
										No notes yet
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										Get started by creating a new note
									</p>
									<div className="mt-6">
										<button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
											<FiPlus className="-ml-1 mr-2 h-5 w-5" />
											New Note
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
