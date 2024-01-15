import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetHashPasswordDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Your password",
        required: true,
        example: "your_password",
    })
    password: string;
}
