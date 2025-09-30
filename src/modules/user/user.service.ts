import { UserEntity } from './user-entity';

export class UserService {
  private readonly data = new Map<string, UserEntity>();
}
