import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  @MaxLength(3000)
  quote: string;

  @IsString()
  @MaxLength(120)
  author: string;

  @IsString()
  @MaxLength(160)
  role: string;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  avatar?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  stars?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}

export class UpdateTestimonialDto {
  @IsOptional()
  @IsString()
  @MaxLength(3000)
  quote?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  author?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  role?: string;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  avatar?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  stars?: number;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
