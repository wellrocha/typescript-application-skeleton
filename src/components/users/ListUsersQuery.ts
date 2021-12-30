import { injectable, inject } from 'tsyringe'
import { IDatabase } from '../config/MariaDbConnection'
import UserDto from './dtos/UserDto'
import IListUserQUery from './interfaces/IListUsersQuery'

@injectable()
class ListUsersQuery implements IListUserQUery {
  private readonly _connection

  constructor(@inject('IDatabase') readonly database: IDatabase) {
    this._connection = database.getConnection()
  }

  async execute(): Promise<UserDto[]> {
    const [rows] = await this._connection.query<[]>('SELECT id, name, email, created_at FROM users')

    return rows.map((row: any) => {
      const userDto: UserDto = {
        name: row.name,
        email: row.email
      }
      return userDto
    })
  }
}

export default ListUsersQuery
