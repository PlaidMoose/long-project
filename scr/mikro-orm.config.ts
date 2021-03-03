
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constant";
import { Post } from "./entities/Post";


export default{
        //Will correspond to all our database tables
        entities: [Post],
        //Connects to the Database
        dbName: 'long-project',
        //Database password
        password: process.env.POSTRES_PWD,
        //Database type
        type: 'postgresql',
        //takes prod from constant and makes it easier to type
        debug: !__prod__,
    } as Parameters<typeof MikroORM.init>[0];

