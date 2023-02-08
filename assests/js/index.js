const btnE1 = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")
const apiKey = "wLT6/A5yiVEgZrCQxz/apA==ovYNfZSIzsGJmVPl"
const option = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getjoke(){
    try{
        jokeE1.innerText = "Updating...";
        btnE1.disabled = true;
        btnE1.innerText = 'Loading...';
        const response = await fetch(apiURL,option);
        const data = await response.json();
        btnE1.disabled = false;
        btnE1.innerText = 'Tell me a joke';
        jokeE1.innerText = data[0].joke;
    }catch (error)
    {
        console.log(error);
        jokeE1.innerText = "An error happened, try again later";
        btnE1.disabled = false;
        btnE1.innerText = 'Tell me a joke';
    }
}

btnE1.addEventListener("click", getjoke);