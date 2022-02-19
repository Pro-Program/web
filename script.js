let button = document.getElementById("button");
button.addEventListener("click", handleclick);
let lightswitch = false;









function handleclick(){
    console.log("Clicked!");
    lightswitch = !lightswitch;
    if(lightswitch == true){
        let root = document.querySelector(":root");
        root.style.setProperty("--stupidbgcolor", "#00BFB3");
        root.style.setProperty("--stupid-text-color", "#023436");
    }
    else{
        let root = document.querySelector(":root");
        root.style.setProperty("--stupidbgcolor", "#023436");
        root.style.setProperty("--stupid-text-color", "#00BFB3");
    }
}