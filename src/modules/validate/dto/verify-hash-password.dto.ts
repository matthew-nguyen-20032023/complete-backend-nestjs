import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class VerifyHashPasswordDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Input password",
    required: true,
    example: 'dongtuananh',
  })
  verifyPassword: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Hashed password",
    required: true,
    example: '146',
  })
  passwordHashed: string;
}
