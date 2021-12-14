import { getReservations } from "./dataAccess.js";

export const Reservations = () => {
    const reservations = getReservations()

    let html = "<ul>"
        const convertReservationsToListElement = reservations.map(reservation => {
            return `
            <li>
            ${reservation.id}
            </li>`
        })
    "</ul>"
}