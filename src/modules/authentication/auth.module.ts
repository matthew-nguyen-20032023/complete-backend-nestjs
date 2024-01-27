import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from "src/modules/authentication/auth.controller";
import { AuthService } from "src/modules/authentication/auth.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from "src/models/repositories/user.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXP },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
