import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";


class CreateTagController {

    async handle(request: Request, response: Response) {
        //para pegar direto pelo parametro referenciado (name)
        const { name } = request.body
        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}

export { CreateTagController }