import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class MathService {

    constructor() {}

    /**
     * @description: This function use to calculate two number input from client
     * @param firstNumber
     * @param secondNumber
     */
    public async sumTwoNumber(firstNumber: number, secondNumber: number): Promise<number> {
        if (firstNumber < 0 || secondNumber < 0) {
            throw new HttpException({
                message: 'Input number must be greater than 0'
            }, HttpStatus.BAD_REQUEST);
        }
        return firstNumber + secondNumber
    }

    public async minusTwoNumber(firstNumber: number, secondNumber: number) {
        return firstNumber - secondNumber
    }
}
