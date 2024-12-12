import { Router } from 'express'

import { ping, testUpload } from '../Controllers'

// import { } from '../Validations'

import { asyncWrapper, multerUpload } from '../Utils'

export const TestRouter = Router()

TestRouter.get('/ping', asyncWrapper(ping))
TestRouter.post('/uploadTestFile', multerUpload.single('file'), asyncWrapper(testUpload))