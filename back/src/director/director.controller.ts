import { Controller,Get, Param, UseGuards } from '@nestjs/common';
import { DirectorService } from './director.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Director } from './director.entity';
import { DirectorDto } from './dto/director.dto';

@Controller('director')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  @Get()
  @ApiOkResponse({ description: 'Retrieved directors.'})
  async findAll(): Promise<DirectorDto[]> {

    const directorEntities: Director[] = await this.directorService.findAll();

    return directorEntities.map((directorEntity) => directorEntity.toDirectorDto());

  }
}
