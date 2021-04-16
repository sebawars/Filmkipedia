import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { DirectorService } from "./director.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ApiBearerAuth, ApiOkResponse } from "@nestjs/swagger";
import { Director } from "./director.entity";
import { DirectorDto } from "./dto/director.dto";

@Controller("directors")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class DirectorController {
  constructor(
    private readonly directorService: DirectorService,
    @Inject(CACHE_MANAGER) private cacheManager
  ) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60)
  @Get()
  @ApiOkResponse({ description: "Retrieved directors." })
  async findAll(): Promise<DirectorDto[]> {
    const directorEntities: Director[] = await this.directorService.findAll();

    return directorEntities.map((directorEntity) =>
      directorEntity.toDirectorDto()
    );
  }
}
