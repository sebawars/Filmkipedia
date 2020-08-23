import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { getIdColumnType } from "src/orm.config";

export class InsertInitialData1597159404240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {


        // DIRECTORS

        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("director")
                .values({ name: 'George', surname: 'Lucas' })
                .execute();
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("director")
                .values({ name: 'Ridley', surname: 'Scott' })
                .execute();
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("director")
                .values({ name: 'Christopher', surname: 'Nolan' })
                .execute();
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("director")
                .values({ name: 'Robert', surname: 'Zemeckis' })
                .execute();
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("director")
                .values({ name: 'Quentin', surname: 'Tarantino' })
                .execute();

        // ACTORS


        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Harrison', surname: 'Ford' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Mark', surname: 'Hamill' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Ridley', surname: 'Scott' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'John', surname: 'Hurt' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Christian', surname: 'Bale' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Heath', surname: 'Ledger' })                      
                .execute();                                                        
                                                                                        
        await queryRunner                                                          
                .manager                                                           
                .createQueryBuilder()                                              
                .insert()                                                          
                .into("actor")
                .values({ name: 'Tom', surname: 'Hanks' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Robin', surname: 'Wright' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Leonardo', surname: 'DiCaprio' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Ellen', surname: 'Page' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()                                          
                .insert()                                                      
                .into("actor")                                                 
                .values({ name: 'Uma', surname: 'Thurman' })                   
                .execute();                                                    
                                                                                        
        await queryRunner                                                      
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'John', surname: 'Travolta' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Matthew', surname: 'McConaughey' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("actor")
                .values({ name: 'Jessica', surname: 'Chastain' })
                .execute();

        // FILMS


        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'Star wars', country: 'USA', release: '1977', director: 1, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'})
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'Alien', country: 'USA', release: '1989', director: 2, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg'})
                .execute();

        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'The Dark Knight', country: 'USA', release: '2008', director: 3, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg' })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'Forrest Gump', country: 'USA', release: '1994', director: 4, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg'    })
                .execute();

        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'Inception', country: 'USA', release: '2010', director: 3, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'       })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'Pulp Fiction', country: 'USA', release: '1994', director: 4, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yAaf4ybTENKPicqzsAoW6Emxrag.jpg'    })
                .execute();
                        
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film")
                .values({ filmname: 'Interestellar', country: 'USA', release: '2014', director: 3, image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'   })
                .execute();

        // FILM_ACTOR

        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '1', actor_id: '1' })
                .execute();

        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '1', actor_id: '2' })
                .execute();

        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '2', actor_id: '3' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '2', actor_id: '4' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '3', actor_id: '5' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '3', actor_id: '6' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '4', actor_id: '7' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '4', actor_id: '8' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '5', actor_id: '9' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '5', actor_id: '10' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '6', actor_id: '11' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '6', actor_id: '12' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '7', actor_id: '13' })
                .execute();
				
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into("film_actor")
                .values({ film_id: '7', actor_id: '14' })
                .execute();
            
    }

    
    
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}


