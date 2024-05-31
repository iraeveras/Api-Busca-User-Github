import { tbodyEvents } from "../variables/variables.js";
import { getApiEventsUserGitHub } from "../../services/events.js"

function getEventsUser(userName) {
    getApiEventsUserGitHub(userName).then(events => {

        let eventItens = ""

        for (const iterator of events) {
            const eventsObj = {
                id: iterator.id,
                type: iterator.type,
                imgUrl: iterator.avatar_url,
                repo: iterator.repo,
                messageCommit: ""
            }
            
            if (eventsObj.type !== "DeleteEvent") {
                eventsObj.type === "PushEvent" 
                ? eventsObj.messageCommit = iterator.payload.commits[0].message 
                : eventsObj.messageCommit = "Sem mensagem de commits";            
                
                eventItens += `
                    <tr>
                        <td>${eventsObj.repo.name}</td>
                        <td>${eventsObj.type}</td>
                        <td>${eventsObj.messageCommit}</td>
                    </tr>
                `                
            }
        }

        tbodyEvents.innerHTML = eventItens;
    })
}

function getValueEvents(quantityEvents) {
    return quantityEvents
}


export { getEventsUser, getValueEvents }