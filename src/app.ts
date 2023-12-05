import Fastify from "fastify";
import healthCheckController from "./routes/health-check";
import rootController from "./routes/root";

const app = Fastify({
  logger: true,
});

app.get("/", rootController);
app.get("/health-check", healthCheckController);

export default app;