import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class MinusDto {
    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    @ApiProperty({
        description: "First number parameter",
        required: true,
        example: 1,
    })
    firstNumber: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    @ApiProperty({
        description: "Second number parameter",
        required: true,
        example: 1,
    })
    secondNumber: number;
}
