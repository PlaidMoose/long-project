
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import path from 'path';

console.log("dirname: ", __dirname);
export default{
        migrations: {
            path: path.join(__dirname, './migrations'), // path to the folder with migrations
            pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
        },
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
//Let's us pass more into default

