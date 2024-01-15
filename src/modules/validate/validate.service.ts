import {HttpException, HttpStatus, Injectable} from "@nestjs/common";

const bcrypt = require('bcrypt');
const saltRounds = 10

@Injectable()
export class ValidateService {

    constructor() {}

    public async hashPassword(password: string): Promise<string> {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            return await bcrypt.hash(password, salt);
        } catch (error) {
            throw new HttpException({
                message: error
            }, HttpStatus.BAD_REQUEST);
        }
    }

    public async comparePasswordHashed(verifyPassword: string, passwordHashed: string): Promise<boolean> {
        try {
            return await bcrypt.compare(verifyPassword, passwordHashed);
        } catch (error) {
            return false;
        }
    }
}
