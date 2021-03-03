import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
//Tells mikro-orm that this is and entity and corresponds to the database table
@Entity()
export class Post {
   //id, createdAt, updated, and title are 4 columuns
    @PrimaryKey()
    id!: number;
    //createdAt and updatedAt are good things to have, just standard fields, gives the date of when the row was inserted(when the object was creates)
    @Property()
    createdAt = new Date();
    //onUpdate creates a new date everytime we update
    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    title!: string;
}