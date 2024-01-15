import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";

export class VerifyHashPasswordDto {
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  @ApiProperty({
    description: "Input password",
    required: true,
    example: 'dongtuananh',
  })
  verifyPassword: string;

  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  @ApiProperty({
    description: "Hashed password",
    required: true,
    example: '146',
  })
  passwordHashed: string;
}
