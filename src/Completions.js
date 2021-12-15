import { getPartyCompletions } from "./dataAccess.js"

export const Completions = () => {
    const completions = getPartyCompletions()

    let html = "<ul>"
        const convertCompletionsToListElement = completions.map(completed => {
            return `
            <li>
            ${completed.parentName} has booked a party for their child, ${completed.childName}. 
            There will be ${completed.numOfChildren} in attendance at ${completed.address} on 
            ${completed.dateOfParty} for ${completed.completionsLength}hrs.
            <button class="completions__delete" 
                    id="completions--${completed.id}">
                 Delete
            </button>
            </li>`
        })

        html += convertCompletionsToListElement.join("")
        html += "</ul>"

        return html
}