import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
//Especificar que vai utilizar o repositorio de User
class UsersRepositories extends Repository<User> {

}
export { UsersRepositories };