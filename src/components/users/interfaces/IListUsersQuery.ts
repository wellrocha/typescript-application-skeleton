import UserDto from '../dtos/UserDto'

interface IListUserQUery {
  execute: () => Promise<UserDto[]>
}

export default IListUserQUery
