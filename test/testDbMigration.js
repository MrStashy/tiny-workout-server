import { exec } from 'node:child_process'
import { config } from 'dotenv';
config(); 

try {
  process.env['DATABASE_URL'] = process.env['TEST_DATABASE_URL']

  console.log(`Connected to DB instance: ${process.env['DATABASE_URL']}`)

  exec('npx prisma migrate reset --force', { encoding: 'utf-8' })
  exec('npx prisma generate', { encoding: 'utf-8' })
} catch (err) {
  console.error(`Migration failed! \r\n ${err}`)
  process.exit()
}