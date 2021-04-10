import {
  CacheInterceptor,
  CacheTTL,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Param,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { ActorService } from "./actor.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ApiBearerAuth, ApiOkResponse } from "@nestjs/swagger";
import { Actor } from "./actor.entity";
import { ActorDto } from "./dto/actor.dto";

@Controller("actor")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ActorController {
  constructor(
    private readonly actorService: ActorService,
    @Inject(CACHE_MANAGER) private cacheManager
  ) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60)
  @Get()
  @ApiOkResponse({ description: "Retrieved actors." })
  async findAll(): Promise<ActorDto[]> {
    const actorEntities: Actor[] = await this.actorService.findAll();

    return actorEntities.map((actorEntity) => actorEntity.toActorDto());
  }
}
