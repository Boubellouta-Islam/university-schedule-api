import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { Period, PeriodSchema } from './period.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Period.name, schema: PeriodSchema }]),
  ],
  controllers: [PeriodController],
  providers: [PeriodService],
})
class PeriodModule {}

export default PeriodModule;
