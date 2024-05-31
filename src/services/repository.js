import { baseUrl, repositoryQtd, inputsNumbersRepository } from "../scripts/variables/variables.js";

async function getRepositoriesGithub(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${inputsNumbersRepository.value}`);
    return await response.json();
}


export { getRepositoriesGithub }