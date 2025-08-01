function sendError(error) {
	if (error.response) {
		const errMsg = error.response.message.data;
		throw new Error(errMsg);
	} else {
		throw error;
	}
}

export { sendError };
