const applicationState = {
        reservations: []
}
const completedBookings = {
    partyCompletions: []
}
const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (partyReservations) => {
                applicationState.reservations = partyReservations
            }
        )
}


export const getReservations = () => {
    return applicationState.reservations.map((reservation) => ({ ...reservation}))
}

const mainContainer = document.querySelector("#container")

export const sendReservation = (userPartyReservation) => {
    const fetchDetails = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyReservation)
    }
    return fetch(`${API}/reservations`, fetchDetails)
        .then((response) => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchPartyCompletions = () => {
    return fetch(`${API}/partyCompletions`)
        .then(response => response.json())
        .then(
            (partyDone) => {
                completedBookings.partyCompletions = partyDone
            }
        )
}

export const getPartyCompletions = () => {
    return completedBookings.partyCompletions.map((partyCompleted) => ({ ...partyCompleted}))
}