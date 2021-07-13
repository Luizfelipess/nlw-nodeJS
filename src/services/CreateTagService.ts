import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        // SELECT * FROM TAGS WHERE NAME = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        //Retorna o erro se a tag ja existir 
        if (tagAlreadyExists) {
            throw new Error("Tag Already Exists!");
        }

        //Se não existir ela cria
        const tag = tagsRepositories.create({
            name,
        });

        //Se não existir ela salva
        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService };