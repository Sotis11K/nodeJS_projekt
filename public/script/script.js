var submit = document.querySelector(".submit")
    submit.addEventListener("click", inputReader)

function inputReader(){

    if(document.querySelector('#graphFunction').value == ""){
        return
    }
    else{
        let p = document.createElement("p");
        p.innerHTML = document.querySelector("#graphFunction").value
        document.querySelector(".history-container").append(p);
    }
    
}

var settings = document.querySelector("#dropdown")
settings.addEventListener("click", settings)

function settings(){
    document.querySelector(".settings-block").style="display:block;"
}