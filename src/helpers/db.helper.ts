import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const db = (model: "airQuality") => {
  const table = prisma[model];
  const create = async (data: any) => {
    return await table.create({ data: { ...data } });
  };
  return { create };
};

export default db;
