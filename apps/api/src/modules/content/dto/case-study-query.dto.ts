import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from './pagination-query.dto';

export class CaseStudyQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  service?: string;

  @IsOptional()
  @IsString()
  industry?: string;
}
