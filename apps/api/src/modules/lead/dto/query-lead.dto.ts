import { Transform } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class QueryLeadDto {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsIn(['NEW', 'CONTACTED', 'QUALIFIED', 'WON', 'LOST'])
  status?: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'WON' | 'LOST';
}
