import { UserEntity } from '../../dao/dao/user.dao';

export type UserResponse = UserEntity & {
  id: string;
}
