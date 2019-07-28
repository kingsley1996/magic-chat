export const transValidation = {
    email_incorrect: "Email Incorrect",
    gender_incorrect: "Please close F12 window",
    password_incorrect: "Password Incorrect",
    password_confirmation_incorrect: "Password Confirmation Incorrect"
}

export const transErrors = {
    account_in_use: "Email is exsist",
    account_removed: "Account is removed",
    account_not_active: "Email is exsist but not active"
}

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Account <strong>${userEmail}</strong> is created. Please check your email for active account!`
    }
}