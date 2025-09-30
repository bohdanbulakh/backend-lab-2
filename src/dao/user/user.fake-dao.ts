import { FakeDao } from '../fake-dao';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserFakeDao extends FakeDao<UserEntity> {}
