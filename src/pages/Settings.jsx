import React, { useState } from "react";
import {
	FiUser,
	FiLock,
	FiBell,
	FiTrash2,
	FiCreditCard,
	FiGlobe,
} from "react-icons/fi";

const Settings = () => {
	const [activeTab, setActiveTab] = useState("account");
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	const tabs = [
		{ id: "account", icon: <FiUser />, label: "Account" },
		{ id: "security", icon: <FiLock />, label: "Security" },
		{ id: "notifications", icon: <FiBell />, label: "Notifications" },
		{ id: "billing", icon: <FiCreditCard />, label: "Billing" },
		{ id: "language", icon: <FiGlobe />, label: "Language" },
	];

	return (
		<div className="min-h-screen bg-gray-50 mt-[70px]">
			<div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row gap-8">
					{/* Sidebar Navigation */}
					<div className="w-full md:w-64">
						<h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
						<nav className="space-y-1">
							{tabs.map((tab) => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`flex items-center px-4 py-3 w-full text-left rounded-lg transition ${
										activeTab === tab.id
											? "bg-indigo-50 text-indigo-700"
											: "text-gray-600 hover:bg-gray-100"
									}`}
								>
									<span className="mr-3">{tab.icon}</span>
									{tab.label}
								</button>
							))}
						</nav>
					</div>

					{/* Main Content */}
					<div className="flex-1 bg-white rounded-xl shadow-sm p-6">
						{activeTab === "account" && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold">Account Information</h2>
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Name
										</label>
										<input
											type="text"
											defaultValue="John Doe"
											className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Email
										</label>
										<input
											type="email"
											defaultValue="john@example.com"
											className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
											readOnly
										/>
									</div>
									<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
										Update Profile
									</button>
								</div>
							</div>
						)}

						{activeTab === "security" && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold">Security Settings</h2>
								<div className="space-y-4">
									<div className="p-4 border border-gray-200 rounded-lg">
										<h3 className="font-medium mb-2">Change Password</h3>
										<div className="space-y-3">
											<input
												type="password"
												placeholder="Current password"
												className="w-full px-4 py-2 border border-gray-300 rounded-lg"
											/>
											<input
												type="password"
												placeholder="New password"
												className="w-full px-4 py-2 border border-gray-300 rounded-lg"
											/>
											<input
												type="password"
												placeholder="Confirm new password"
												className="w-full px-4 py-2 border border-gray-300 rounded-lg"
											/>
										</div>
										<button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
											Update Password
										</button>
									</div>
								</div>
							</div>
						)}

						{activeTab === "notifications" && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold">
									Notification Preferences
								</h2>
								<div className="space-y-4">
									<div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
										<div>
											<h3 className="font-medium">Email Notifications</h3>
											<p className="text-sm text-gray-500">
												Receive updates via email
											</p>
										</div>
										<label className="relative inline-flex items-center cursor-pointer">
											<input
												type="checkbox"
												checked={notificationsEnabled}
												onChange={() =>
													setNotificationsEnabled(!notificationsEnabled)
												}
												className="sr-only peer"
											/>
											<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
										</label>
									</div>

									<div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
										<div>
											<h3 className="font-medium">Dark Mode</h3>
											<p className="text-sm text-gray-500">
												Switch between light and dark theme
											</p>
										</div>
										<label className="relative inline-flex items-center cursor-pointer">
											<input
												type="checkbox"
												checked={darkMode}
												onChange={() => setDarkMode(!darkMode)}
												className="sr-only peer"
											/>
											<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
										</label>
									</div>
								</div>
							</div>
						)}

						{activeTab === "billing" && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold">Billing Information</h2>
								<div className="p-4 border border-gray-200 rounded-lg">
									<div className="flex items-center justify-between mb-4">
										<h3 className="font-medium">Current Plan</h3>
										<span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
											Free Tier
										</span>
									</div>
									<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
										Upgrade Plan
									</button>
								</div>
							</div>
						)}

						{activeTab === "language" && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold">Language Preferences</h2>
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											App Language
										</label>
										<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400">
											<option>English</option>
											<option>Spanish</option>
											<option>French</option>
											<option>German</option>
										</select>
									</div>
									<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
										Save Preferences
									</button>
								</div>
							</div>
						)}

						{/* Danger Zone */}
						<div className="mt-12 border-t border-gray-200 pt-6">
							<h2 className="text-xl font-semibold text-red-600">
								Danger Zone
							</h2>
							<div className="mt-4 p-4 border border-red-200 rounded-lg bg-red-50">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium">Delete Account</h3>
										<p className="text-sm text-red-600">
											Permanently remove your account and all data
										</p>
									</div>
									<button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
										<FiTrash2 className="mr-2" />
										Delete Account
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
