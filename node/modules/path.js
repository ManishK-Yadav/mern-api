import path from 'path'
import url from 'url'

const filePath="folder/folder1/folder2/test.txt";
const fileName=path.basename(filePath)
console.log(fileName)
console.log(path.extname(filePath))
console.log(path.dirname(filePath))
const _fileName=url.fileURLToPath(import.meta.url)
console.log(_fileName)