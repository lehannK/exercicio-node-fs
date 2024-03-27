import { createFile, updateFile, readFile, deleteFile } from "./fs-handler.mjs";

createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
readFile();
updateFile("Conteúdo modificado!");
readFile();
deleteFile();
