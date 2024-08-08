const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

if (process.env.NODE_ENV === 'test') {
    process.env['DATABASE_URL'] = process.env['TEST_DATABASE_URL']
    console.log(`Connected to DB instance: ${process.env['DATABASE_URL']}`)
}


module.exports = prisma