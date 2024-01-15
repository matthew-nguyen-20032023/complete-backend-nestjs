import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetHashPasswordDto {
    @IsString()
    @Type(() => String)
    @IsNotEmpty()
    @ApiProperty({
        description: "Your password",
        required: true,
        example: "your_password",
    })
    password: string;
}
