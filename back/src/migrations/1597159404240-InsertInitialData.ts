import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInitialData1597159404240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // DIRECTORS

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("director")
      .values([
        {
          name: "George",
          surname: "Lucas",
        },
        {
          name: "Ridley",
          surname: "Scott",
        },
        {
          name: "Christopher",
          surname: "Nolan",
        },
        {
          name: "Robert",
          surname: "Zemeckis",
        },
        {
          name: "Quentin",
          surname: "Tarantino",
        },
        {
          name: "Chris",
          surname: "Columbus",
        },
        {
          name: "Chuck",
          surname: "Russell",
        },
      ])
      .execute();

    // ACTORS

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("actor")
      .values([
        {
          name: "Harrison",
          surname: "Ford",
        },
        {
          name: "Mark",
          surname: "Hamill",
        },
        {
          name: "Ridley",
          surname: "Scott",
        },
        {
          name: "John",
          surname: "Hurt",
        },
        {
          name: "Christian",
          surname: "Bale",
        },
        {
          name: "Heath",
          surname: "Ledger",
        },
        {
          name: "Tom",
          surname: "Hanks",
        },
        {
          name: "Robin",
          surname: "Wright",
        },
        {
          name: "Leonardo",
          surname: "DiCaprio",
        },
        {
          name: "Ellen",
          surname: "Page",
        },
        {
          name: "Uma",
          surname: "Thurman",
        },
        {
          name: "John",
          surname: "Travolta",
        },
        {
          name: "Matthew",
          surname: "McConaughey",
        },
        {
          name: "Jessica",
          surname: "Chastain",
        },
      ])
      .execute();
    // FILMS

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("film")
      .values([
        {
          filmname: "Star wars",
          country: "USA",
          release: "1977",
          director: 1,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial El Halcón Milenario, y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.",
        },
        {
          filmname: "Alien",
          country: "USA",
          release: "1989",
          director: 2,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "De regreso a la Tierra, la nave de carga Nostromo interrumpe su viaje y despierta a sus siete tripulantes. El ordenador central, MADRE, ha detectado la misteriosa transmisión de una forma de vida desconocida, procedente de un planeta cercano aparentemente deshabitado. La nave se dirige entonces al extraño planeta para investigar el origen de la comunicación.",
        },
        {
          filmname: "The Dark Knight",
          country: "USA",
          release: "2008",
          director: 3,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Batman/Bruce Wayne regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.",
        },
        {
          filmname: "Forrest Gump",
          country: "USA",
          release: "1994",
          director: 4,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Forrest Gump es un chico con deficiencias mentales no muy profundas y con alguna incapacidad motora que, a pesar de todo, llegará a convertirse, entre otras cosas, en un héroe durante la Guerra del Vietnam. Su persistencia y bondad le llevarán a conseguir una gran fortuna, ser objeto del clamor popular y a codearse con las más altas esferas sociales y políticas del país. Siempre sin olvidar a Jenny, su gran amor desde que era niño.",
        },
        {
          filmname: "Inception",
          country: "USA",
          release: "2010",
          director: 3,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Dom Cobb es un ladrón hábil, el mejor de todos, especializado en el peligroso arte de extracción: el robo de secretos valiosos desde las profundidades del subconsciente durante el estado de sueño cuando la mente está más vulnerable. Esta habilidad excepcional de Cobb le ha hecho un jugador codiciado en el traicionero nuevo mundo de espionaje corporativo, pero al mismo tiempo, le ha convertido en un fugitivo internacional y ha tenido que sacrificar todo que le importaba. Ahora a Cobb se le ofrece una oportunidad para redimirse. Con un último trabajo podría recuperar su vida anterior, pero solamente si logra lo imposible.",
        },
        {
          filmname: "Pulp Fiction",
          country: "USA",
          release: "1994",
          director: 4,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yAaf4ybTENKPicqzsAoW6Emxrag.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
        },
        {
          filmname: "Interestellar",
          country: "USA",
          release: "2014",
          director: 3,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.",
        },
        {
          filmname: "Harry Potter y la piedra Filosofal",
          country: "USA",
          release: "2001",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7xXJ15VEf7G9GdAuV1dO769yC73.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Harry Potter es un huérfano que vive con sus desagradables tíos, los Dursley, y su repelente primo Dudley. Se acerca su undécimo cumpleaños y tiene pocas esperanzas de recibir algún regalo, ya que nunca nadie se acuerda de él. Sin embargo, pocos días antes de su cumpleaños, una serie de misteriosas cartas dirigidas a él y escritas con una estridente tinta verde rompen la monotonía de su vida: Harry es un mago y sus padres también lo eran.",
        },
        {
          filmname: "Harry Potter y la camara secreta",
          country: "USA",
          release: "2002",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bhCfAzeMMg7GyLDT11yVM2i1NPh.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Harry regresa a su segundo año a Hogwarts, pero descubre que cosas malas ocurren debido a que un sitio llamado la Cámara de los Secretos ha sido abierto por el heredero de Slytherin y hará que los hijos de muggles, los impuros, aparezcan petrificados misteriosamente por un animal monstruoso.",
        },
        {
          filmname: "Harry Potter y el prisionero de azkaban",
          country: "USA",
          release: "2004",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wF9aoo4YZmpKP4bZPSy4Zwwek6G.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Harry está deseando que termine el verano para comenzar un nuevo curso en Hogwarts, y abandonar lo antes posible la casa de sus despreciables tíos, los Dursley. Lo que desconoce Harry es que va a tener que abandonar Privet Drive antes de tiempo e inesperadamente después de convertir a su tía Marge en un globo gigante. Un autobús noctámbulo, y encantado por supuesto, le llevará a la taberna El Caldero Chorreante, donde le espera nada menos que Cornelius Fudge, el Ministro de Magia.",
        },
        {
          filmname: "Harry Potter y el caliz de fuego",
          country: "USA",
          release: "2005",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "En el cuarto año en Hogwarts, Harry se enfrenta al mayor de los desafíos y peligros de la saga. Cuando es elegido bajo misteriosas circunstancias como el competidor que representará a Hogwarts en el Torneo Triwizard, Harry deberá competir contra los mejores jóvenes magos de toda Europa. Pero mientras se prepara, aparecen pruebas que manifiestan que Lord Voldemort ha regresado. Antes de darse cuenta, Harry no solo estará luchando por el campeonato sino también por su vida",
        },
        {
          filmname: "Harry Potter y la orden del fenix",
          country: "USA",
          release: "2007",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z5bL1z1ZOAKBkvbOhVQp6GfBv4u.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Harry Potter regresa por quinto año a Hogwarts aún sacudido por la tragedia ocurrida en el Torneo de los Tres Magos. Debido a que el Ministro de la Magia niega el regreso de Lord Voldemort, Harry se convierte en el centro de atención de la comunidad mágica. Mientras lucha con sus problemas en el colegio, incluyendo a la nueva profesora Dolores Umbridge, intentará aprender más sobre la misteriosa Orden del Fénix.",
        },
        {
          filmname: "Harry Potter y el misterio del príncipe",
          country: "USA",
          release: "2009",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nSb3nNiL6pOEDK34T0U6RKTGzlJ.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "En medio de los desastres que azotan a Inglaterra, Harry y sus compañeros vuelven a Hogwarts para cursar su sexto año de estudios; y aunque las medidas de seguridad han convertido al colegio en una fortaleza, algunos estudiantes son víctimas de ataques inexplicables. Harry sospecha que Draco Malfoy es el responsable de los mismos y decide averiguar la razón. Mientras tanto, Albus Dumbledore y el protagonista exploran el pasado de Lord Voldemort mediante recuerdos que el director ha recolectado. Con esto, Dumbledore planea preparar al muchacho para el día de la batalla final.",
        },
        {
          filmname: "Harry Potter y las Reliquias de la Muerte - Parte 1",
          country: "USA",
          release: "2010",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fYyoJ4Yadk0MCBHZPFrgvMDl50o.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Una tarea casi imposible cae sobre los hombros de Harry: deberá encontrar y destruir los horrocruxes restantes para dar fin al reinado de Lord Voldemort. En el episodio final de la saga, el hechicero de 17 años parte junto con sus amigos Hermione Granger y Ron Weasley en un peligroso viaje por Inglaterra para encontrar los objetos que contienen los fragmentos del alma del Señor Tenebroso, los cuales garantizan su longevidad. Pero el camino no será fácil pues el lado oscuro adquiere más poder con cada minuto que pasa y las lealtades serán puestas a prueba. Harry deberá usar todos los conocimientos que gracias a Dumbledore ha adquirido sobre su enemigo para poder encontrar la forma de sobrevivir a esta última aventura.",
        },
        {
          filmname: "Harry Potter y las Reliquias de la Muerte - Parte 2",
          country: "USA",
          release: "2011",
          director: 6,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aM1TuUiPtV8OAZyu61CTdy9Ymtk.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "La segunda parte de la batalla final entre las fuerzas del bien y el mal. El juego nunca ha sido tan peligroso y nadie está a salvo. Se acerca el momento de la confrontación final entre Harry Potter y Lord Voldemort. Todo termina aquí…",
        },
        {
          filmname: "La máscara",
          country: "USA",
          release: "1994",
          director: 7,
          image:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8SmzepMp7glh5cZRDGsbleZWiZQ.jpg",
          video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          description:
            "Stanley es un ingenuo empleado de banca incapaz de enterarse de cuándo se aprovechan de él, al que su jefe mangonea, al que su casera humilla, y al que solamente su perro parece ser capaz de aguantar. Charlie, un amigo suyo, le invita a ir al cabaret Coco Bongo para intentar estimularle y conseguir que espabile. Pero antes de que eso ocurra, aparece la bella Tina Carlyle, que entra en el banco para hablar con Stanley y de paso fotografiar la caja fuerte con una mini cámara. Es entonces cuando Stanley encuentra una máscara que le da grandes poderes, pero que también le quita todos sus miedos: ahora es libre de actuar como quiera..",
        },
      ])
      .execute();
    // FILM_ACTOR
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("film_actor")
      .values([
        {
          film_id: "1",
          actor_id: "1",
        },
        {
          film_id: "1",
          actor_id: "2",
        },
        {
          film_id: "2",
          actor_id: "3",
        },
        {
          film_id: "2",
          actor_id: "4",
        },
        {
          film_id: "3",
          actor_id: "5",
        },
        {
          film_id: "3",
          actor_id: "6",
        },
        {
          film_id: "4",
          actor_id: "7",
        },
        {
          film_id: "4",
          actor_id: "8",
        },
        {
          film_id: "5",
          actor_id: "9",
        },
        {
          film_id: "5",
          actor_id: "10",
        },
        {
          film_id: "6",
          actor_id: "11",
        },
        {
          film_id: "6",
          actor_id: "12",
        },
        {
          film_id: "7",
          actor_id: "13",
        },
        {
          film_id: "7",
          actor_id: "14",
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
