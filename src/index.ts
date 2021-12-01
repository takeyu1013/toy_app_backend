import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
});

app.get(`/users`, async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
  console.log(users);
});

app.listen(3001, () =>
  console.log("🚀 Server ready at: http://localhost:3001")
);
