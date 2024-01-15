const bcrypt = require('bcrypt');
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ValidateFailedMessage } from "src/modules/validate/validate.const";

@Injectable()
export class ValidateService {

    constructor() {}

    public async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, await bcrypt.genSalt(Number(process.env.SALT_OR_ROUNDS)));
    }

    public async comparePasswordHashed(verifyPassword: string, passwordHashed: string): Promise<boolean> {
        const result = await bcrypt.compare(verifyPassword, passwordHashed);
        if (!result) {
            throw new HttpException({
                message: ValidateFailedMessage.ValidateFailMessage
            }, HttpStatus.BAD_REQUEST);
        }
        return true;
    }
}
