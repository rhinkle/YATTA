import { FastifyRequest, FastifyReply } from "fastify";

const rootController = async (req: FastifyRequest, res: FastifyReply)  => {
    res.status(200).send();
}

export default rootController;