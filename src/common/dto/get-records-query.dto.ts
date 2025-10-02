import { IsOptional, IsUUID } from 'class-validator';

export class GetRecordsQueryDto {
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
