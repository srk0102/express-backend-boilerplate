require('dotenv').config()

//COMPANY DETAILS
export const APP_NAME = process.env.APP_NAME

//LOCALS
export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT ? process.env.PORT : 8000

//CRYPTO KEYS
export const CRYPTO_KEY = process.env.CRYPTO_KEY
export const CRYPTO_IV = process.env.CRYPTO_IV
export const CRYPTO_ALGO = process.env.CRYPTO_ALGO

//JWT
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY
export const JWT_EXPIRY_TOKEN_TIME = process.env.JWT_EXPIRY_TOKEN_TIME
export const JWT_EXPIRY_REFRESH_TIME = process.env.JWT_EXPIRY_REFRESH_TIME
export const JWT_ALGO = process.env.JWT_ALGO
export const JWT_VALIDATION_KEY = process.env.JWT_VALIDATION_KEY
