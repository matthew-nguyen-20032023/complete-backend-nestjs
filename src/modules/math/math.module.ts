import { Module } from "@nestjs/common";
import { AuthService } from "src/modules/authentication/auth.service";
import { AuthController } from "src/modules/authentication/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthConsole } from "src/modules/authentication/auth.console";
import {MathController} from "./math.controller";

@Module({
  imports: [],
  controllers: [MathController],
  providers: [],
})
export class MathModule {}
