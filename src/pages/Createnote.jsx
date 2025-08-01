import React, { useState } from "react";
import { FiPlus, FiUsers, FiLock, FiLink, FiSend } from "react-icons/fi";

const CreateNote = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isPublic, setIsPublic] = useState(true);

	return (
		<div className="min-h-screen bg-gray-50 p-6 mt-[70px]">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-2xl font-bold text-gray-800">
							Create New Collaboration
						</h1>
						<p className="text-gray-500">
							Start writing and invite others to collaborate
						</p>
					</div>
					<div className="flex gap-3">
						<button className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition">
							<FiLink size={18} />
							<span>Copy Link</span>
						</button>
						<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
							<FiSend size={18} />
							<span>Publish</span>
						</button>
					</div>
				</div>

				{/* Main Form */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
					{/* Privacy Toggle */}
					<div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
						<div className="flex items-center gap-2">
							<FiUsers className="text-gray-600" />
							<span className="font-medium">Visibility</span>
						</div>
						<div className="flex items-center gap-2">
							<button
								onClick={() => setIsPublic(true)}
								className={`px-3 py-1 rounded-md ${
									isPublic
										? "bg-indigo-100 text-indigo-700"
										: "bg-gray-100 text-gray-600"
								}`}
							>
								Public
							</button>
							<button
								onClick={() => setIsPublic(false)}
								className={`px-3 py-1 rounded-md ${
									!isPublic
										? "bg-indigo-100 text-indigo-700"
										: "bg-gray-100 text-gray-600"
								}`}
							>
								<div className="flex items-center gap-1">
									<FiLock size={14} />
									<span>Private</span>
								</div>
							</button>
						</div>
					</div>

					{/* Title Input */}
					<div className="mb-6">
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Note title (optional)"
							className="w-full text-2xl font-medium border-none focus:ring-0 p-0 placeholder-gray-300"
						/>
						<div className="border-b border-gray-200 mt-1"></div>
					</div>

					{/* Content Editor */}
					<div className="min-h-[400px]">
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							placeholder="Start writing here... Markdown supported"
							className="w-full h-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 min-h-[400px] resize-none"
						/>
					</div>

					{/* Collaboration Section */}
					<div className="mt-8">
						<h3 className="flex items-center gap-2 text-lg font-medium mb-4">
							<FiUsers />
							<span>Invite Collaborators</span>
						</h3>
						<div className="flex items-center gap-3">
							<input
								type="email"
								placeholder="Enter email addresses"
								className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
							/>
							<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
								Invite
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateNote;
