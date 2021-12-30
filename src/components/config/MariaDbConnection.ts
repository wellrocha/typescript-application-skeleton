import mysql, { Pool } from 'mysql2/promise'
import { injectable, inject } from 'tsyringe'

interface IDatabase {
  getConnection: () => Pool
}

interface IMariaDbConfig {
  connectionLimit: number
  host: string
  user: string
  password: string
  database: string
  port: number
  waitForConnections: true
  charset: string
}

@injectable()
class MariaDbConnection implements IDatabase {
  private readonly _connection: Pool

  constructor(@inject('IMariaDbConfig') readonly config: IMariaDbConfig) {
    this._connection = mysql.createPool(config)
  }

  getConnection(): Pool {
    return this._connection
  }
}

export {
  MariaDbConnection,
  IMariaDbConfig,
  IDatabase
}
