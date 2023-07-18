import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        // keyFilename: configService.get<string>('SERVICE_ACCOUNT_KEY_FILE'),
        projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
        credentials: {
          client_email: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
          private_key: configService.get<string>('FIREBASE_PRIVATE_KEY'),
        }
      }),
      inject: [ConfigService]
    }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
