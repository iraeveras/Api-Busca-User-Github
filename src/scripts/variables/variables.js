const baseUrl = "https://api.github.com/users";
const eventsQtd = 10;
const repositoryQtd = 10;

const insertInput = document.querySelector(".insert-input");
const btnBuscar = document.querySelector(".btn");
const containerInfoUser = document.querySelector('.container-info-user');
const tbodyEvents = document.querySelector("tbody");
const tbodyRepositories = document.querySelector(".tbody-repositories");
const checkboxInput = document.getElementById("input-checkbox");
const inputsNumbersEvents = document.getElementById("input-number-events");
const inputsNumbersRepository = document.getElementById("input-number-repository");

export {
    baseUrl, 
    eventsQtd, 
    repositoryQtd, 
    insertInput, 
    btnBuscar, 
    containerInfoUser, 
    tbodyEvents, 
    tbodyRepositories,
    checkboxInput,
    inputsNumbersEvents,
    inputsNumbersRepository
}