import { sendReservation } from "./dataAccess.js";

export const PartyForm = () => {
    let html = `
            <div class="field">
            <label class="label" for="reservationParent">Parent Name</label>
            <input type="text" name="reservationParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationChild">Child Name</label>
            <input type="text" name="reservationChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAttending">How Many Children Attending</label>
            <input type="number" name="reservationAttending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAddress">Address Of Party</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date Of Reservation</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDuration">Duration Of Reservation</label>
            <input type="number" name="reservationDuration" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>

    `
    return html
}


//* building user input form html export

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const reservationParent = document.querySelector("input[name='reservationParent']").value
        const reservationChild = document.querySelector("input[name='reservationChild']").value
        const reservationAttending = document.querySelector("input[name='reservationAttending']").value
        const reservationAddress = document.querySelector("input[name='reservationAddress']").value
        const reservationDate = document.querySelector("input[name='reservationDate']").value
        const reservationDuration = document.querySelector("input[name='reservationDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: reservationParent,
            childName: reservationChild,
            numOfChildren: reservationAttending,
            address: reservationAddress,
            dateOfParty: reservationDate,
            reservationLength: reservationDuration
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})