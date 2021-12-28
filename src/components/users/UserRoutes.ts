import express from 'express'
import UserController from './UserController'

const router = express.Router()

const userController = new UserController()
router.get('/users', userController.execute)

export default router
