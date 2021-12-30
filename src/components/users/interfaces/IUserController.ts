import { Request, Response } from 'express'

interface IUserController {
  listAllUsers: (_request: Request, response: Response) => Promise<Response>
}

export default IUserController
