import { Buttons } from "./Buttons.js";
import { fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(() => {
    mainContainer.innerHTML = Buttons()
    }
    ) 
}

mainContainer.addEventListener(
    "stateChanged",
     CustomEvent => {
        render()
        
    }
)
render()