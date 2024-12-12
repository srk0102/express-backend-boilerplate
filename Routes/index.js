import { APP_NAME } from '../Config'

import { Logger } from '../Utils'

import { TestRouter } from './test'

const Routes = [
	{ path: '', router: TestRouter },
]

Routes.init = (app) => {
	try {
		Routes.forEach(route => {
			app.use([`/${APP_NAME}`, route.path].join(''), route.router)
		})
	}
	catch (err) {
		Logger.error(err)
	}
}

export { Routes }