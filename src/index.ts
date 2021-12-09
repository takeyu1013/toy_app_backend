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
});

app.get(`/users/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
});

app.delete(`/users/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(user);
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

app.get(`/microposts`, async (_, res) => {
  const microposts = await prisma.micropost.findMany();
  res.json(microposts);
});

app.get(`/microposts/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const micropost = await prisma.micropost.findUnique({
    where: { id: Number(id) },
  });
  res.json(micropost);
});

app.post(`/microposts`, async (req, res) => {
  const result = await prisma.micropost.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
});

app.patch(`/microposts/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const micropost = await prisma.micropost.update({
    where: { id: Number(id) },
    data: {
      ...req.body,
    },
  });
  res.json(micropost);
});

app.delete(`/microposts/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  const micropost = await prisma.micropost.delete({
    where: { id: Number(id) },
  });
  res.json(micropost);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
