import { containerInfoUser, insertInput, inputsNumbersEvents, inputsNumbersRepository } from "../variables/variables.js"
import { getApiUserGitHub } from "../../services/user.js";

function getUserProfile(userName) {
    getApiUserGitHub(userName).then(userDetails => {
        const userProfile = {
            userImgUrl: userDetails.avatar_url,
            userFullName: userDetails.name,
            userName: userDetails.login,
            userBio: userDetails.bio,
            userFollowers: userDetails.followers,
            userFollowing: userDetails.following
        }

        if (!insertInput.value && !inputsNumbersEvents.value && !inputsNumbersRepository.value) return alert("Insira o nome do usuário que deseja buscar.")

        let user = `
            <div class="box-img-name">
                <img src="${userProfile.userImgUrl}" alt="Imagem do usuário" class="img-user">
                <h2 class="full-name-user">${userProfile.userFullName ?? 'Sem nome no perfil 🤐'}</h2>
            </div>
            <div class="box-info-profile">
                <p class="name-user-git"><span>Usuário:</span>${userProfile.userName ?? 'Sem nome de usuário 🤐'}</p>
                <p class="bio-user-git"><span>Biografia:</span>${userProfile.userBio ?? 'Sem cadastro de Bio 🤐'}</p>
                <p class="followers-user-git"><span>Seguidores:</span>${userProfile.userFollowers}</p>
                <p class="following-user-git"><span>Seguindo:</span>${userProfile.userFollowing}</p>
            </div>
        `
        containerInfoUser.innerHTML = user;
        insertInput.value = ""
        inputsNumbersEvents.value = ""
        inputsNumbersRepository.value = ""
    })
}

export { getUserProfile }