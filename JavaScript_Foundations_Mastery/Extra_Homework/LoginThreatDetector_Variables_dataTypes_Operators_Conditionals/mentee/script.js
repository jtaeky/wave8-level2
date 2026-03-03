// ✅ LOGIN THREAT DETECTOR
// Goal: Decide if a login attempt is safe, suspicious, or should be locked.
// Decision rules must use ONLY: variables, data types, operators, conditionals.
// DOM + event listeners are allowed for UI interaction.

// Step 1: Get references to the DOM elements using document.getElementById()
// Store references for:
// - failed attempts input        → id="failedAttempts"
// - unusual location dropdown    → id="unusualLocation"
// - recognized device dropdown   → id="recognizedDevice"
// - scan button                  → id="scanBtn"
// - message paragraph            → id="message"
// - status text output           → id="statusText"
// - status details output        → id="statusDetails"
// - attempts output              → id="attemptsOut"
// - location output              → id="locationOut"
// - device output                → id="deviceOut"

const ids = [
"failedAttempts",
"unusualLocation",
"recognizedDevice",
"scanBtn",
"message",
"statusText",
"statusDetails",
"attemptsOut",
"locationOut",
"deviceOut"
]

const el = {}

ids.forEach(id => {
    el[id] = document.getElementById(id)
})

el.scanBtn.addEventListener("click", decisionLogic)

function decisionLogic(){
    let status = ""
    let details = ""

    const failedAttempts = Number(el.failedAttempts.value)
    const unusualLocation = el.unusualLocation.value
    const recognizedDevice = el.recognizedDevice.value

    const unusual = unusualLocation === "yes"
    const recognized = recognizedDevice === "yes"

    el.attemptsOut.textContent = failedAttempts
    el.locationOut.textContent = unusual ? "Yes" : "No"
    el.deviceOut.textContent = recognized ? "Yes" : "No"

    if(isNaN(failedAttempts) || failedAttempts<0){
        console.log("naw")
        return
    } 

    if(failedAttempts >= 5){
        status = "Account Locked"
        details = "too many fails"
    }else if(unusual && !recognized){
    status = "Suspicious"
    details = "Login from an unusual location on an unrecognized device."
    }else if(failedAttempts >= 3 && unusual){
    status = "Suspicious"
    details = "Multiple failed attempts from an unusual location."
    }else{
    status = "Approved"
    details = "Login attempt appears safe."
    }

    el.statusText.textContent = status
    el.statusDetails.textContent = details

    el.statusText.classList.remove("safe", "warn", "danger")

    if (status === "Approved") {
    el.statusText.classList.add("safe")
    el.message.textConten ="Tip: Keep your device recognized for faster logins."

    } else if (status === "Suspicious") {
    el.statusText.classList.add("warn")
    el.message.textContent ="Tip: Turn on 2FA."


    } else if (status === "Account Locked") {
    el.statusText.classList.add("danger")
    el.message.textContent ="Tip: Use 'Forgot Password' to recover account."

}
}


// - If suspicious: "Tip: Turn on 2FA."
// - If locked: "Tip: Use 'Forgot Password' to recover account."
// - If approved: "Tip: Keep your device recognized for faster logins."


// ## Decision rules (order matters)

// 1. If **failedAttempts >= 5** → **ACCOUNT LOCKED**
// 2. Else if **unusual location = true** AND **recognized device = false** → **SUSPICIOUS**
// 3. Else if **failedAttempts >= 3** AND **unusual location = true** → **SUSPICIOUS**
// 4. Else → **LOGIN APPROVED**

// ## Learning constraint

// The _decision logic_ uses only:

// - Variables
// - Data types (number/string/boolean)
// - Operators
// - Conditionals

// Step 2: Add a click event listener to the Scan button
// When clicked, run your security decision logic

// Step 3: Read user inputs inside the click function
// - failedAttempts should become a NUMBER (not a string)
// - unusualLocation will be a STRING ("yes" or "no")
// - recognizedDevice will be a STRING ("yes" or "no")
// Convert unusualLocation into a BOOLEAN:
//    unusual = true if unusualLocation === "yes"
// Convert recognizedDevice into a BOOLEAN:
//    recognized = true if recognizedDevice === "yes"

// Step 4: Validation using conditionals
// If failedAttempts is empty OR failedAttempts < 0:
// - show a warning message
// - stop the function early (return)

// Step 5: Update the “what you selected” outputs
// - attemptsOut textContent should show the number
// - locationOut should show "Yes" or "No"
// - deviceOut should show "Yes" or "No"

// Step 6: Create variables for your final decision
// - status (string)
// - details (string)

// Step 7: Use conditionals to decide the threat result (REALISTIC RULES)
// Use these rules (in this order):
// A) If failedAttempts >= 5 → status = "ACCOUNT LOCKED"
// B) Else if unusual is true AND recognized is false → status = "SUSPICIOUS"
// C) Else if failedAttempts >= 3 AND unusual is true → status = "SUSPICIOUS"
// D) Else → status = "LOGIN APPROVED"

// Step 8: Use conditionals to create a helpful details message
// Examples:
// - Locked: "Too many failed attempts. Please reset your password."
// - Suspicious: "Unusual sign-in detected. Verify identity."
// - Approved: "No major risk indicators detected."

// Step 9: Update the UI with the decision
// - statusText.textContent = status
// - statusDetails.textContent = details
// Also update color by adding ONE class to statusText:
// - safe (green), warn (yellow), danger (red)
// TIP: Remove the other classes first so colors don’t stack.

// Step 10: Update the message paragraph with guidance
// Examples:
// - If suspicious: "Tip: Turn on 2FA."
// - If locked: "Tip: Use 'Forgot Password' to recover account."
// - If approved: "Tip: Keep your device recognized for faster logins."
