import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director])]
})
export class DirectorModule {}
