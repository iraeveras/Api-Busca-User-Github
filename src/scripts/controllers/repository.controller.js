import { tbodyRepositories, inputsNumbersEvents, inputsNumbersRepository, checkboxInput } from "../variables/variables.js";
import { getRepositoriesGithub } from "../../services/repository.js";

function getRepositoriesUser(userName) {
    tbodyRepositories.innerHTML = ""
    getRepositoriesGithub(userName).then(reposData => {
        let reposItens = "";

        reposData.forEach(repo => {
            reposItens += `
                <tr>                        
                    <td class="text-center"><a href="${repo.html_url}" target="_blank" class="link-repository">${repo.name}</a></td>
                    <td class="text-center td-repository">${repo.forks}</td>
                    <td class="text-center td-repository">${repo.stargazers_count}</td>
                    <td class="text-center td-repository">${repo.watchers_count}</td>
                </tr>
            `
        })

        tbodyRepositories.innerHTML += reposItens        
    })
}

function habilitarQtdEventsRepository() {
    if (!checkboxInput.checked) {        
        inputsNumbersEvents.setAttribute("disabled", "disabled")
        inputsNumbersRepository.setAttribute("disabled", "disabled")
    } else {        
        inputsNumbersEvents.removeAttribute("disabled")
        inputsNumbersRepository.removeAttribute("disabled")
    }
}

export { getRepositoriesUser, habilitarQtdEventsRepository }
