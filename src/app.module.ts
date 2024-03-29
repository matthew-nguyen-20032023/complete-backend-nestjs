import { Module } from "@nestjs/common";
import { ConsoleModule } from "nestjs-console";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from "src/configs/database.config";
import { AuthModule } from "src/modules/authentication/auth.module";
import { JwtStrategy } from "src/modules/authentication/jwt.strategy";
import { JwtAuthGuard } from "src/modules/authentication/jwt-auth.guard";
import { MathModule } from "src/modules/math/math.module";
import { ValidateModule } from "src/modules/validate/validate.module";

@Module({
    imports: [
        AuthModule,
        ConsoleModule,
        MathModule,
        ValidateModule,
        TypeOrmModule.forRoot(DATABASE_CONFIG as TypeOrmModuleOptions)
    ],
    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
        JwtStrategy,
    ],

})
export class AppModule {}
