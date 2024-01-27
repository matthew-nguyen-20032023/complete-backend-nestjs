import { Module } from "@nestjs/common";
import { AuthController } from "src/modules/authentication/auth.controller";
import { AuthService } from "src/modules/authentication/auth.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from "src/models/repositories/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
