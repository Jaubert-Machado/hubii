import { promises as fs } from 'fs'

export async function readJsonFile(filePath: string) {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
}
