export const CHANGE_AUTH = "change_auth";

export function authenticate(isLoggedIn: boolean) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}