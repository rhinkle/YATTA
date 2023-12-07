import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const hinkle = await prisma.organization.create({
    data: {
      name: "Hinkle",
    },
  });
  const ryan = await prisma.user.upsert({
    where: { email: "ryan.hinkle@gmail.com" },
    update: {},
    create: {
      email: "ryan.hinkle@gmail.com",
      name: "Ryan Hinkle",
      organizationId: hinkle.id,
    },
  });
  const client = await prisma.client.create({
    data: {
      name: "Generic Electric",
      organizationId: hinkle.id,
      Project: {
        create: [
          {
            name: "Project 1",
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
