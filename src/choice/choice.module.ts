import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChoiceService } from './choice.service';
import { ChoiceController } from './choice.controller';
import { Choice, ChoiceSchema } from './choice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Choice.name, schema: ChoiceSchema }]),
  ],
  controllers: [ChoiceController],
  providers: [ChoiceService],
})
class ChoiceModule {}

export default ChoiceModule;
