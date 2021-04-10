import { Module, CacheModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { connectionOptions } from "./orm.config";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { FilmModule } from "./film/film.module";
import { ActorModule } from "./actor/actor.module";
import { DirectorModule } from "./director/director.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: connectionOptions,
    }),
    DirectorModule,
    ActorModule,
    UserModule,
    AuthModule,
    FilmModule,
  ],
})
export class AppModule {}
