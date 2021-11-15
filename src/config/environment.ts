import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
      ConfigModule.forRoot()
    ],
    controllers: [],
    providers: [],
})
export class environment {
}

export const variables = {
    db_name : process.env.DB_NAME,
    db_host : process.env.DB_HOST
}