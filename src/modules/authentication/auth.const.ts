import { SetMetadata } from "@nestjs/common";

export enum RegisterSuccessMessage {
    RegisterSuccess = "Register success",
}

export enum RegisterFailMessage {
    RegisterFail = "Username has been taken",
}

export enum LoginSuccessMessage {
    LoginSuccessMessage = "Login success",
}

export enum LoginFailMessage {
    LoginFailMessage = "Username or Password is incorrect",
}

export const Public = () => SetMetadata(process.env.PUBLIC_KEY_JWT, true);