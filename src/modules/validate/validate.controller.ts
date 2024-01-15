import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Get, HttpStatus, Query } from "@nestjs/common";

import { Public } from "src/modules/authentication/auth.const";
import { IResponseToClient } from "src/configs/response-to-client.config";
import { MinusDto } from "src/modules/math/dto/minus.dto";
import { GetHashPasswordDto } from "src/modules/validate/dto/get-hash-password.dto";
import { ValidateService } from "src/modules/validate/validate.service";

@Controller("validate")
@ApiTags("Validate")
export class ValidateController {
  constructor(private readonly validateService: ValidateService) {}

  @Get("hash-password")
  @ApiOperation({
    summary: 'Api to get hash password from a string'
  })
  @Public()
  /**
   * @Require: Using bcrypt
   * @Query password: String
   * @Output: password hashed
   */
  async getHashPassword(@Query() getHashPasswordDto: GetHashPasswordDto): Promise<IResponseToClient> {
    return {
      message: '',
      data: 'ok',
      statusCode: HttpStatus.OK,
    }
  }

  @Get("verify-hash-password")
  @Public()
  /**
   * @Require: Using bcrypt
   * @Query: verifyPassword: string
   * @Query: passwordHashed: string
   * @Output: bool (true if password match, false if not)
   */
  async verifyHashPassword(@Body() minusDto: MinusDto): Promise<IResponseToClient> {
    return {
      message: '',
      data: 'ok',
      statusCode: HttpStatus.OK,
    }
  }
}
