import { RecordEntity } from '../../dao/dao/record.dao';

export type RecordResponse = RecordEntity & {
  id: string;
};
