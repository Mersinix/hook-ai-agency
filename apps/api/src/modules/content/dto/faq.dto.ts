import { IsBoolean, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateFaqDto {
  @IsString()
  @MaxLength(300)
  question: string;

  @IsString()
  @MaxLength(5000)
  answer: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}

export class UpdateFaqDto {
  @IsOptional()
  @IsString()
  @MaxLength(300)
  question?: string;

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  answer?: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
