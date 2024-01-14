import {Body, Controller, Get, HttpStatus, Post} from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { IResponseToClient } from "src/configs/response-to-client.config";
import { Public } from "../authentication/auth.const";

@Controller("math")
export class MathController {
  constructor() {}

  @Get("sum")
  @Public()
  async sumTwoNumber() {
    return 'Api worked';
    // return {
    //   message: 'API',
    //   data: result,
    //   statusCode: HttpStatus.OK,
    // };
  }
}
