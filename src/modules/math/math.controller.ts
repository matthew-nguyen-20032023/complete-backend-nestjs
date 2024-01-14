import {Body, Controller, Get, HttpStatus, Post} from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { IResponseToClient } from "src/configs/response-to-client.config";
import { Public } from "../authentication/auth.const";
import {MathService} from "./math.service";

@Controller("math")
export class MathController {
  constructor(private readonly mathService : MathService) {}

  @Get("sum")
  @Public()
  async sumTwoNumber() {
    let first = 1
    let second = 3
    return await this.mathService.sumTwoNumber(first, second)
  }

  @Post("minus")
  @Public()
  async minusTwoNumber() {
    let first = 1
    let second = 3
    return await this.mathService.minusTwoNumber(first, second)
  }
}
