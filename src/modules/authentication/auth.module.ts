import { Module } from "@nestjs/common";
import { AuthService } from "src/modules/authentication/auth.service";
import { AuthController } from "src/modules/authentication/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthConsole } from "src/modules/authentication/auth.console";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXP },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthConsole],
})
export class AuthModule {}
