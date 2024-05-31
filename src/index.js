import { containerInfoUser, insertInput, btnBuscar, tbodyEvents, checkboxInput, inputsNumbersEvents, inputsNumbersRepository } from "./scripts/variables/variables.js";
import { getUserProfile } from "./scripts/controllers/user.controller.js"
import { getEventsUser, getValueEvents } from "./scripts/controllers/events.controller.js";
import { getRepositoriesUser, habilitarQtdEventsRepository } from "./scripts/controllers/repository.controller.js";


if (containerInfoUser.innerHTML || containerInfoUser.innerHTML =="" || containerInfoUser.innerHTML == null) {
    containerInfoUser.innerHTML = `<div class="box-img-name">
        <img src="./src/img/img-vazia.png" alt="Imagem do usuário" class="img-user">
            <h2 class="full-name-user"></h2>
        </div>
        <div class="box-info-perfil">
            <p class="name-user-git"><span>Usuário:</span></p>
            <p class="bio-user-git"><span>Biografia:</span></p>
            <p class="followers-user-git"><span>Seguidores:</span></p>
            <p class="following-user-git"><span>Seguindo:</span></p>
        </div>
    `
}

if (tbodyEvents.innerHTML == "") {
    tbodyEvents.innerText = `  
    
    Nenhum evento  
    
    `
}

checkboxInput.addEventListener("click", habilitarQtdEventsRepository);

if (!checkboxInput.checked) {
    btnBuscar.addEventListener("click", () => {
        getUserProfile(insertInput.value);
        getEventsUser(insertInput.value);
        getRepositoriesUser(insertInput.value);
    })

    insertInput.addEventListener("keyup", (e) => {
        const userName = e.target.value;
        const key = e.which || e.keyCode;
        const isEnterKeyPressed = key === 13;
    
        if (isEnterKeyPressed) {
            getUserProfile(userName);
            getEventsUser(userName);
            getRepositoriesUser(userName);
        }
        
    })

} else {
    alert("insira a quantidade de enventos e repositorios a serem exibidos.")
    btnBuscar.addEventListener("click", () => {
        getUserProfile(insertInput.value);
        getEventsUser(insertInput.value);
        getRepositoriesUser(insertInput.value);
        getValueEvents(inputsNumbersEvents.value)
    })

    insertInput.addEventListener("keyup", (e) => {
        const userName = e.target.value;
        const key = e.which || e.keyCode;
        const isEnterKeyPressed = key === 13;
    
        if (isEnterKeyPressed) {
            getUserProfile(userName);
            getEventsUser(userName);
            getRepositoriesUser(userName);
            getValueEvents(inputsNumbersEvents.value);
        }
        
    })
}