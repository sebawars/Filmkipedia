import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmService } from './film.service';
import { Film } from './film.entity';
import { FilmController } from './film.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  controllers: [FilmController],
  providers: [FilmService],
  exports: [FilmService],
})
export class FilmModule {}
