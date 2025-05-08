import { readdirSync } from 'fs'
import { Bot } from 'grammy'
import { join } from 'path'

export async function loadModules(bot: Bot, folderName: string, dirname: string) {
  const folderPath = join(dirname, folderName)

  const files = readdirSync(folderPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'))

  for (const file of files) {
    const modulePath = join(folderPath, file)
    const setup = (await import(modulePath)).default

    if (typeof setup === 'function') {
      setup(bot)
    }
  }

  console.log(`🔃 Loaded ${folderName}`)
}
