import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';


const main = async () => {
    const orm = await MikroORM.init(microConfig);

    //Creates a new post in the database, only creates an instance of post
    const post = orm.em.create(Post, {title: 'my first post'});
    await orm.em.persistAndFlush(post);
    console.log('----------sql 2----------')
    await orm.em.nativeInsert(Post, {title: 'my first post'})
};

//Catches the error and prints out the error
main().catch(err => {
    console.error(err);
});