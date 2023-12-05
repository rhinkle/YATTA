import { FastifyRequest, FastifyReply } from "fastify";

const healthCheckController = async (req: FastifyRequest, res: FastifyReply) => {
  res.status(200).send({status: 'up', uptime: process.uptime()});
}


export default healthCheckController;