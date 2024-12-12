import { sendResponse } from '../Utils'

export const ping = (req, res) => {
	try {
		return sendResponse(res, SUCCESS, 'pong')
	}
	catch (err) {
		return sendResponse(res, INTERNALSERVERERROR, '', {}, 'Internal server error')
	}
}

export const testUpload = (req, res) => {
	try {
		if (req.file) {
			const originalFileName = req.file.originalname
			return sendResponse(res, SUCCESS, `${originalFileName} received to server`)
		}
	}
	catch (err) {
		return sendResponse(res, INTERNALSERVERERROR, '', {}, 'Internal server error')
	}
}