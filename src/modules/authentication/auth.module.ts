import { Module } from "@nestjs/common";
import { AuthController } from "src/modules/authentication/auth.controller";
import { AuthService } from "src/modules/authentication/auth.service";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
