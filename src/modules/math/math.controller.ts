import { Controller, Get, HttpStatus, Post, Query } from "@nestjs/common";
import { Public } from "src/modules/authentication/auth.const";
import { MathService } from "src/modules/math/math.service";
import { IResponseToClient } from "src/configs/response-to-client.config";
import { SumDto } from "src/modules/math/dto/sum.dto";
import { MathSuccessMessage } from "src/modules/math/math.const";

@Controller("math")
export class MathController {
  constructor(private readonly mathService : MathService) {}

  @Get("sum")
  @Public()
  async sumTwoNumber(@Query() sumDto: SumDto): Promise<IResponseToClient> {
    const data = await this.mathService.sumTwoNumber(sumDto.firstNumber, sumDto.secondNumber);
    return {
      message: MathSuccessMessage.SumTwoNumberSuccess,
      data,
      statusCode: HttpStatus.OK,
    }
  }

  @Post("minus")
  @Public()
  async minusTwoNumber() {
    let first = 1
    let second = 3
    return await this.mathService.minusTwoNumber(first, second)
  }
}
