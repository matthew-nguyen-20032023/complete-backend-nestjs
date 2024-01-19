import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { LoginFailMessage} from "src/modules/authentication/auth.const";

const bcrypt = require('bcrypt');
const saltRounds = 10

@Injectable()
export class AuthService {

    constructor() {}

    public async authRegister(userName: string, password: string): Promise<string> {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            return await bcrypt.hash(password, salt);
        } catch (error) {
            throw new HttpException({
                message: error
            }, HttpStatus.BAD_REQUEST);
        }
    }

    public async authLogin(userName: string, password: string): Promise<boolean> {
        const passwordHashed = 'dong@tuananh'
        const passwordCompareResult = await bcrypt.compare(password, passwordHashed);
        const usernameCompareResult = true
        if (!passwordCompareResult || !usernameCompareResult) {
            throw new HttpException({
                message: LoginFailMessage.LoginFailMessage
            }, HttpStatus.BAD_REQUEST);
        }
        return true;
    }
}
