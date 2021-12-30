import 'reflect-metadata'
import { container as TsyringeContainer } from 'tsyringe'
import express from 'express'
import UserController from './UserController'
import container from '../config/container'

const router = express.Router()

container.register()

const userController = TsyringeContainer.resolve(UserController)

const listAllUsers = userController.listAllUsers.bind(userController)
router.get('/users', listAllUsers)

export default router
