import "dotenv/config";
import express from "express";
import { router } from "./routes";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(express.json());
app.use(router);

`--unhandled-rejections=strict`;

app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

export { serverHttp, io };
