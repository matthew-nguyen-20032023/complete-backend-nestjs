import { Module } from "@nestjs/common";
import { AuthController } from "src/modules/authentication/auth.controller";
import { AuthService } from "src/modules/authentication/auth.service";
import { User } from "src/entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
