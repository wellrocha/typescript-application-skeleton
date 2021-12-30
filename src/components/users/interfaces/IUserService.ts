import UserDto from '../dtos/UserDto'
import ServiceResponse from '../models/ServiceResponse'

interface IUserService {
  listAllUsers: () => Promise<ServiceResponse<UserDto>>
}

export default IUserService
