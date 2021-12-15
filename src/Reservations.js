import { getReservations } from "./dataAccess.js";

export const Reservations = () => {
    const reservations = getReservations()

    let html = "<ul>"
        const convertReservationToListElement = reservations.map(reservation => {
            return `
            <li>
            ${reservation.parentName} has booked a party for their child, ${reservation.childName}. 
            There will be ${reservation.numOfChildren} in attendance at ${reservation.address} on 
            ${reservation.dateOfParty} for ${reservation.reservationLength}hrs.
            <button class="reservation__delete" 
                    id="reservation--${reservation.id}">
                 Delete
            </button>
            </li>`
        })

        html += convertReservationToListElement.join("")
        html += "</ul>"

        return html
}