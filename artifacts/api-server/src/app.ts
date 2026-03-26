import express, { type Express } from "express";
import cors from "cors";
import { createRequire } from "module";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http uses `export =` CJS syntax which conflicts with ESM moduleResolution: bundler,
// so we load it via createRequire to avoid the TypeScript callable type error.
const require = createRequire(import.meta.url);

const app: Express = express();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttp = require("pino-http") as (opts: Record<string, unknown>) => any;

app.use(
  pinoHttp({
    logger,
    serializers: {
      req: (req: { id: unknown; method: string; url?: string }) => ({
        id: req.id,
        method: req.method,
        url: req.url?.split("?")[0],
      }),
      res: (res: { statusCode: number }) => ({
        statusCode: res.statusCode,
      }),
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
