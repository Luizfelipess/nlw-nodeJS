import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

//v4 because it generates random numbers
import { v4 as uuid } from "uuid";

//define the database
@Entity("users")
class User {
    /** just put data inside the (), if the name of the
     * column in the bank is different from the name you put in the file
    **/
    @PrimaryColumn()
    //uuid in typescript is string.
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    //in typescript declares timestamp as Date.
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { User };