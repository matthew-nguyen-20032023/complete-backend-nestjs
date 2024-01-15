import { Module } from "@nestjs/common";
import { ValidateController } from "src/modules/validate/validate.controller";
import { ValidateService } from "src/modules/validate/validate.service";

@Module({
  imports: [],
  controllers: [ValidateController],
  providers: [ValidateService],
})
export class ValidateModule {}
