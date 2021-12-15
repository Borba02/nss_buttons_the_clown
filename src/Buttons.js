import { Completions } from "./Completions.js";
import { PartyForm } from "./partyForm.js";
import { Reservations } from "./Reservations.js";

export const Buttons = () => {
    return `
        <h1>Buttons the Clown's Pity Party</h1>
            <section class="partyInput">
                 ${PartyForm()}
            </section>
        <h3>Reservations Booked</h3>
            <section class="partyReservations">
                 ${Reservations()}
            </section>
        <h3>Reservations Completed</h3>
            <section class="partyCompletions">
                 ${Completions()}
            </section>
    `
}