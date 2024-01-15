import { Injectable } from "@nestjs/common";


@Injectable()
export class ValidateService {

    constructor() {}

    public async hashPassword(password: string): Promise<string> {
        const bcrypt = require('bcrypt');
        const saltRounds = 10

        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, function(err: any, salt: any) {
                bcrypt.hash(password, salt, function(err: any, hash: any) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(hash);
                    }
                });
            });
        })
    }

    public async comparePasswordHashed(verifyPassword: string, passwordHashed: string): Promise<boolean> {
        const bcrypt = require('bcrypt');

        return new Promise((resolve) => {
            bcrypt.compare(verifyPassword, passwordHashed, function(err: any, result: any) {
                if (err) {
                    console.error(err);
                } else {
                    if (result) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            });
        })
    }
}
