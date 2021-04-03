export class PageDto<Entity>{
    constructor(results: Entity[], totalCount: number){
        this.results = results;
        this.totalCount = totalCount;
    }

    results: Entity[];
    totalCount: number;
}