import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './actor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])]
})
export class ActorModule {}
