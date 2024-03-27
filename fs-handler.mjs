import fs from "node:fs";

export function createFile(content) {
  try {
    fs.writeFileSync("./meuarquivo.txt", content, "utf-8");
    console.log("Arquivo criado com sucesso");
  } catch (error) {
    console.error(`Erro ao escrever arquivo: ${error.message}`);
  }
}

export function updateFile(content) {
  try {
    fs.writeFileSync("./meuarquivo.txt", content, "utf-8");
    console.log("Arquivo atualizado com sucesso");
  } catch (error) {
    console.error(`Erro ao atualizar arquivo: ${error.message}`);
  }
}

export function readFile() {
  try {
    const data = fs.readFileSync("./meuarquivo.txt", "utf-8");
    console.log("Lendo arquivo ...");
    const entries = data.split(",");
    entries.forEach((entry) => console.log(entry));
  } catch (error) {
    console.error(`Erro ao ler arquivo: ${error.message}`);
  }
}

export function deleteFile() {
  try {
    fs.unlinkSync("./meuarquivo.txt");
    console.log("Arquivo excluído com sucesso");
  } catch (error) {
    console.error(`Erro ao escrever arquivo: ${error.message}`);
  }
}
