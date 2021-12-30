import { injectable, inject } from 'tsyringe'
import { Request, Response } from 'express'
import logger from '../config/logger'
import HttpException from '../exceptions/HttpException'
import IUserService from './interfaces/IUserService'
import IUserController from './interfaces/IUserController'

@injectable()
class UserController implements IUserController {
  constructor(@inject('IUserService') private readonly _userService: IUserService) {
  }

  async listAllUsers(_request: Request, response: Response): Promise<Response> {
    logger.info('UserController - Efetuando a chamada para a camada de serviço')
    const users = await this._userService.listAllUsers()

    if (users.success) {
      logger.info('UserController - Sucesso na resposta da camada de serviço, será retornado os usuários para a API')
      return response.status(users.status).json(users.data)
    }

    logger.info('UserController - Ocorreu um erro inesperado, será retornado um status code diferente de 200 com a mensagem de erro')
    const errorMessage = users.errorMesage === undefined ? '' : users.errorMesage
    throw new HttpException(users.status, errorMessage)
  }
}

export default UserController
