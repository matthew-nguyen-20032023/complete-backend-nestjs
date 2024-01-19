import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Username for register",
        required: true,
        example: "dongtuananh",
    })
    userName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Password for register",
        required: true,
        example: "dong@@tuananh",
    })
    password: string;
}
