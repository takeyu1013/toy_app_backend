import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post(`/users`, async (req, res) => {
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

app.get(`/users/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
  console.log(user);
});

app.delete(`/users/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(user);
  console.log(user);
});

app.patch(`/users/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      ...req.body,
    },
  });
  res.json(user);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
