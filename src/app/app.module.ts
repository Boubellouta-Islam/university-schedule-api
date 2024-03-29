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
import { adminSchema } from '../admin/admin.schema';

// config
import { variables, environment } from '../config/environment';
import { AuthModule } from '../auth/auth.module';
import TeacherModule from 'src/teacher/teacher.module';
import SubjectModule from 'src/subject/subject.module';
import ChoiceModule from 'src/choice/choice.module';
import AffectationModule from 'src/affectation/affectation.module';
import ClassroomModule from 'src/classroom/classroom.module';
import LevelModule from 'src/level/level.module';
import SectionModule from 'src/section/section.module';
import GroupModule from 'src/group/group.module';
import SubgroupModule from 'src/sub-group/sub-group.module';
import PeriodModule from 'src/period/period.module';
import ScheduleModule from 'src/schedule/schedule.module';
import SessionModule from 'src/session/session.module';

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
    // our modules
    AuthModule,
    TeacherModule,
    SubjectModule,
    ChoiceModule,
    AffectationModule,
    ClassroomModule,
    LevelModule,
    SectionModule,
    GroupModule,
    SubgroupModule,
    PeriodModule,
    ScheduleModule,
    SessionModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService, TestService], //ChoiceService, TeacherService],
})
export class AppModule {}
