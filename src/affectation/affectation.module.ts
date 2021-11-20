import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AffectationService } from './affectation.service';
import { AffectationController } from './affectation.controller';
import { Affectation, AffectationSchema } from './affectation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Affectation.name, schema: AffectationSchema },
    ]),
  ],
  controllers: [AffectationController],
  providers: [AffectationService],
})
class AffectationModule {}

export default AffectationModule;
