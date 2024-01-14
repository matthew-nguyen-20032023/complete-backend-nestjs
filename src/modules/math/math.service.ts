import { Injectable } from "@nestjs/common";

@Injectable()
export class MathService {

    constructor(
    ) {
    }

    public async sumTwoNumber(firstNumber, secondNumber) {
        return firstNumber + secondNumber
    }

    public async minusTwoNumber(firstNumber, secondNumber) {
        return firstNumber - secondNumber
    }
}
