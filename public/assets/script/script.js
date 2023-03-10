var counter = 0;

function testColor(){
    var color = document.querySelector(".history-container input").value
    document.querySelector(".history-container p").innerHTML = color
    console.log(color)
}

function settings(){
    counter++;
    if(counter%2 == 0 )
    {
        document.querySelector(".settings-block").style="visibility:hidden;transition-duration: 0.4s;width:0%;"
        document.querySelector(".settings-container").style="border-left: solild 2px white;transition-delay: 0.4s;"
    }
    else if(counter%2 == 1)
    {
        document.querySelector(".settings-block").style="visibility:visible;transition-duration: 0.4s;width:60%;"
        document.querySelector(".settings-container").style="border:none;"
    }
}

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
};




function settingsReveal(){}
function functionsReveal(){}
function calculateReveal(){}
function historyReveal(){
    document.querySelector(".history").style="display: block;"
}
