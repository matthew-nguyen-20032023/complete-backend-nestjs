import { Injectable } from '@nestjs/common';
import { EntityManager, Repository} from 'typeorm';
import { UserEntity } from "src/models/entities/user.entity";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(private entityManager: EntityManager) {
        super(UserEntity, entityManager);
    }

    public async getAllUser(): Promise<UserEntity[]> {
        return this.find();
    }

    public async getUserByUsername(username: string): Promise<UserEntity> {
         return this.findOne({
             where: {
                 username: username,
             },
         });
    }
}
