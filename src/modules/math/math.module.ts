import { Module } from "@nestjs/common";
import { MathController } from "src/modules/math/math.controller";
import { MathService } from "src/modules/math/math.service";

@Module({
  imports: [],
  controllers: [MathController],
  providers: [MathService],
})
export class MathModule {}
