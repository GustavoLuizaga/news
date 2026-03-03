import ENV from "../../../config/env.config.js";

export const loginUserService = (userData) => {
    if ( userData.username === ENV.ADMIN_USERNAME && userData.password === ENV.ADMIN_PASSWORD ) {
        return { success: true, message: "Login successful" };
    } else {
        return { success: false, message: "Invalid credentials" };
    }
};

export const logoutUserService = () => {
    return { success: true, message: "Logout successful" };
};