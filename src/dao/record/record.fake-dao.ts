import { FakeDao } from '../fake-dao';
import { RecordEntity } from './record.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecordFakeDao extends FakeDao<RecordEntity> {}
