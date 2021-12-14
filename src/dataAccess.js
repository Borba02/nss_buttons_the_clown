const applicationState = {

}
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (partyReservations) => {
                // Store the external state in application state
                applicationState.reservations = partyReservations
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map((reservation) => ({ ...reservation}))
}

const mainContainer = document.querySelector("container")

export const sendReservation = (userPartyReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyReservation)
    }
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}