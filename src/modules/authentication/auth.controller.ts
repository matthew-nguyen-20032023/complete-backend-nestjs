import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
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

    @Post("register")
    @ApiOperation({
        summary: 'Api to register'
    })
    @Public()
    async getHashPassword(@Body() registerDto: RegisterDto): Promise<IResponseToClient> {
        const data = await this.authService.register(registerDto.userName, registerDto.password);
        return {
            message: RegisterSuccessMessage.RegisterSuccess,
            data,
            statusCode: HttpStatus.CREATED,
        }
    }

    @Post("login")
    @Public()
    @ApiOperation({
        summary: 'Api to login'
    })
    async verifyHashPassword(@Body() loginDto: LoginDto): Promise<IResponseToClient> {
        const data = await this.authService.login(loginDto.userName, loginDto.password);
        return {
            message: LoginSuccessMessage.LoginSuccessMessage,
            data,
            statusCode: HttpStatus.OK,
        }
    }
}
