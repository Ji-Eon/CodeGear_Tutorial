import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions } from "typeorm";
import { UserDTO } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import * as bcrypt from "bcrypt";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    async findByFields(options: FindOneOptions<UserDTO>): Promise<User | undefined> {
        return await this.userRepository.findOne(options);
    }

    async save(userDTO: UserDTO): Promise<UserDTO | undefined> {
        await this.transfromPassword(userDTO);
        console.log(userDTO);
        return await this.userRepository.save(userDTO);
    }
    async transfromPassword(user: UserDTO): Promise<any>{
        user.password = await bcrypt.hash(
            user.password, 10,
        );
        return Promise.resolve();
    }   
}