import 'reflect-metadata'
import { container } from 'tsyringe'
import ListUsersQuery from '../users/ListUsersQuery'
import UserController from '../users/UserController'
import UserService from '../users/UserService'
import { MariaDbConnection, IMariaDbConfig } from './MariaDbConnection'

class Container {
  register(): void {
    const config: IMariaDbConfig = {
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'my_database',
      port: 3306,
      waitForConnections: true,
      charset: 'utf8mb4_unicode_ci'
    }

    container.register('IMariaDbConfig', {
      useValue: config
    })

    container.register('IDatabase', {
      useClass: MariaDbConnection
    })

    container.register('IListUsersQuery', {
      useClass: ListUsersQuery
    })

    container.register('IUserService', {
      useClass: UserService
    })

    container.register('IUserController', {
      useClass: UserController
    })
  }
}

export default new Container()
