import { baseUrl } from "../scripts/variables/variables.js";

async function getApiUserGitHub(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json()
}

export { getApiUserGitHub }