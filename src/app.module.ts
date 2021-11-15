// modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { AppController } from './app.controller';
import { TestController } from './controllers/test.controller';

//services
import { AppService } from './app.service';
import { TestService } from './services/test.service';

//models
import { testSchema } from './models/test.model';
import { teacherSchema } from './models/teacher.model';
import { choiceSchema } from './models/choice.model';

// config
import { variables, environment } from './config/environment';




@Module({
  imports: [
    environment,
    MongooseModule.forRoot(`mongodb://${variables.db_host}/${variables.db_name}`),
    MongooseModule.forFeature([{ name: 'Test', schema: testSchema}]),
    MongooseModule.forFeature([{ name: 'Teacher', schema: teacherSchema}]),
    MongooseModule.forFeature([{ name: 'Choice', schema: choiceSchema}])
  ],
  controllers: [
    AppController,
    TestController
  ],
  providers: [
    AppService,
    TestService
  ],
})
export class AppModule {}
