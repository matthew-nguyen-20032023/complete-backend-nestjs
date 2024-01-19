import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { Public } from "src/modules/authentication/auth.const";
import { IResponseToClient } from "src/configs/response-to-client.config";
import { LoginDto } from "src/modules/authentication/dto/login.dto";
import { RegisterDto } from "src/modules/authentication/dto/register.dto";
import { AuthService } from "src/modules/authentication/auth.service";
import { LoginSuccessMessage, RegisterSuccessMessage } from "src/modules/authentication/auth.const";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Get("register")
    @ApiOperation({
        summary: 'Api to register'
    })
    @Public()
    async getHashPassword(@Query() registerDto: RegisterDto): Promise<IResponseToClient> {
        const data = await this.authService.authRegister(registerDto.userName, registerDto.password);
        return {
            message: RegisterSuccessMessage.RegisterSuccess,
            data,
            statusCode: HttpStatus.OK,
        }
    }

    @Get("login")
    @Public()
    @ApiOperation({
        summary: 'Api to login'
    })
    async verifyHashPassword(@Query() loginDto: LoginDto): Promise<IResponseToClient> {
        const data = await this.authService.authLogin(loginDto.userName, loginDto.password);
        return {
            message: LoginSuccessMessage.LoginSuccessMessage,
            data,
            statusCode: HttpStatus.OK,
        }
    }
}
