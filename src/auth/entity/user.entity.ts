import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserAuthority } from "./user-authority.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    //eager -> join 된 데이터도 같이 가져와줌
    @OneToMany(type=>UserAuthority, userAuthority => userAuthority.user{eager: true})
    authorities?: any[];
}