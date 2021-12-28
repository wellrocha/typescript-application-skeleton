import { Request, Response } from 'express'

class UserController {
  execute(_request: Request, response: Response): Response {
    return response.status(200).json({
      name: 'Bruno'
    })
  }
}

export default UserController
