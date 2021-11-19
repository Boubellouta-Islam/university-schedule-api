// modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { AppController } from './app.controller';
import { TestController } from '../test/test.controller';

//services
import { AppService } from './app.service';
import { TestService } from '../test/test.service';

//models
import { testSchema } from '../test/test.model';
import { Subject, SubjectSchema } from 'src/subject/subject.schema';
// import { teacherSchema } from './models/teacher.model';
// import { choiceSchema } from './models/choice.model';
import { adminSchema } from '../models/admin.model';

// config
import { variables, environment } from '../config/environment';
import { AuthModule } from '../auth/auth.module';
import TeacherModule from 'src/teacher/teacher.module';
// import { ChoiceController } from './choice/choice.controller';
// import { ChoiceService } from './choice/choice.service';
// import { TeacherService } from './teacher/teacher.service';
// import { TeacherController } from './teacher/teacher.controller';

@Module({
  imports: [
    // dotenv environment variables
    environment,
    // mongodb connection
    MongooseModule.forRoot(
      `mongodb://${variables.db_host}/${variables.db_name}`,
    ),
    // mongoose schemas
    MongooseModule.forFeature([{ name: 'Test', schema: testSchema }]),
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
    // our modules
    AuthModule,
    TeacherModule,
  ],
  controllers: [
    AppController,
    TestController,
    // ChoiceController,
    // TeacherController,
  ],
  providers: [AppService, TestService], //ChoiceService, TeacherService],
})
export class AppModule {}
