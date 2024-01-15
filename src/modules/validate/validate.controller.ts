import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Query } from "@nestjs/common";

import { Public } from "src/modules/authentication/auth.const";
import { IResponseToClient } from "src/configs/response-to-client.config";
import { GetHashPasswordDto } from "src/modules/validate/dto/get-hash-password.dto";
import { ValidateService } from "src/modules/validate/validate.service";
import {ValidateFailedMessage, ValidateSuccessMessage} from "src/modules/validate/validate.const";
import { VerifyHashPasswordDto } from "src/modules/validate/dto/verify-hash-password.dto";

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
    const data = await this.validateService.hashPassword(getHashPasswordDto.password);
    return {
      message: ValidateSuccessMessage.HashPasswordSuccessfully,
      data,
      statusCode: HttpStatus.OK,
    }
  }

  @Get("verify-hash-password")
  @Public()
  @ApiOperation({
    summary: 'Api to compare hash password & hashed password'
  })
  /**
   * @Require: Using bcrypt
   * @Query: verifyPassword: string
   * @Query: passwordHashed: string
   * @Output: bool (true if password match, false if not)
   */
  async verifyHashPassword(@Query() verifyHashPasswordDto: VerifyHashPasswordDto): Promise<IResponseToClient> {
    const data = await  this.validateService.comparePasswordHashed(verifyHashPasswordDto.verifyPassword, verifyHashPasswordDto.passwordHashed);
    return {
      message: data ? ValidateSuccessMessage.ValidateSuccessMessage : ValidateFailedMessage.ValidateFailMessage,
      data,
      statusCode: HttpStatus.OK,
    }
  }
}
