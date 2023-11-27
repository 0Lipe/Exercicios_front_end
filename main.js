document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followrsElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/0Lipe')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            userNameElement.innerText =json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followrsElement.innerText = json.followers;
            repos.innerText =json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function() {
            alert("Ocorreu um erro ao buscar os dados.")
        })
})