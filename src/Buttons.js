import { Reservations } from "./Reservations.js";

export const Buttons = () => {
    return `
        <h1>Buttons the Clown's Pity Party</h1>
            <section class="partyReservations">
                ${Reservations()}
            </section>
    `
}