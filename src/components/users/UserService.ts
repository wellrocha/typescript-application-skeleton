import { injectable, inject } from 'tsyringe'
import logger from '../config/logger'
import UserDto from './dtos/UserDto'
import IListUsersQuery from './interfaces/IListUsersQuery'
import IUserService from './interfaces/IUserService'
import ServiceResponse from './models/ServiceResponse'

@injectable()
class UserService implements IUserService {
  constructor(@inject('IListUsersQuery') private readonly _listUsersQuery: IListUsersQuery) {
  }

  async listAllUsers(): Promise<ServiceResponse<UserDto>> {
    try {
      logger.info('UserService - Efetuando a chamada para obter os usuários do banco de dados')
      const users = await this._listUsersQuery.execute()

      const response: ServiceResponse<UserDto> = {
        success: true,
        status: 200,
        data: users
      }

      logger.info(response, 'UserService - Obtido os usuários com sucesso')
      return response
    } catch (error) {
      logger.error(error, 'UserService - Ocorreu um erro inesperado por favor verificar os logs')

      const response: ServiceResponse<UserDto> = {
        success: true,
        status: 500,
        errorMesage: 'Ocorreu um erro inesperado, caso continue acontencendo por favor entre em contato.'
      }
      return response
    }
  }
}

export default UserService
