const bcrypt = require('bcrypt');
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthMessageFailed } from "src/modules/authentication/auth.const";
import { UserRepository } from "src/models/repositories/user.repository";
import { UserEntity } from "src/models/entities/user.entity";

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    public async register(userName: string, password: string): Promise<UserEntity> {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_OR_ROUNDS));
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserEntity();
        newUser.username = userName;
        newUser.password = hashedPassword;
        return await this.userRepository.save(newUser);
    }

    public async login(userName: string, password: string): Promise<boolean> {
        const user = await this.userRepository.getUserByUsername(userName);

        if (!user) {
            throw new HttpException({ message: AuthMessageFailed.UsernameOrPasswordIncorrect }, HttpStatus.BAD_REQUEST);
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            throw new HttpException({ message: AuthMessageFailed.UsernameOrPasswordIncorrect }, HttpStatus.BAD_REQUEST);
        }

        return true;
    }
}
