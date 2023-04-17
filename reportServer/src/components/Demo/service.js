const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function findOriginDestination(superType, startDate, endDate) {
  const existingObjects = await prisma.$queryRaw`
    SELECT "origin", "destination", "superType", COUNT(*)::int AS "_count"
    FROM "bortsBase"
    WHERE  "superType" = ${superType} AND "departure" >= ${startDate} AND "departure" <= ${endDate}
    GROUP BY "origin", "destination", "superType"
    ORDER BY "_count" DESC;
  `;

  return existingObjects;
};

async function findOrigin(superType, startDate, endDate) {
  const existingObjects = await prisma.$queryRaw`
    SELECT "origin", "superType", COUNT(*)::int AS "_count"
    FROM "bortsBase"
    WHERE  "superType" = ${superType} AND "departure" >= ${startDate} AND "departure" <= ${endDate}
    GROUP BY "origin", "superType"
    ORDER BY "_count" DESC;
  `;

  return existingObjects;
};

async function findDestination(superType, startDate, endDate) {
  const existingObjects = await prisma.$queryRaw`
    SELECT "destination", "superType", COUNT(*)::int AS "_count"
    FROM "bortsBase"
    WHERE  "superType" = ${superType} AND "departure" >= ${startDate} AND "departure" <= ${endDate}
    GROUP BY "destination", "superType"
    ORDER BY "_count" DESC;
  `;

  return existingObjects;
};

module.exports = {
  findOriginDestination,
  findOrigin,
  findDestination,
};

