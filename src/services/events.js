import { baseUrl, eventsQtd, inputsNumbersEvents } from "../scripts/variables/variables.js";

async function getApiEventsUserGitHub(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${inputsNumbersEvents.value}`);
    return await response.json();
}


export { getApiEventsUserGitHub }