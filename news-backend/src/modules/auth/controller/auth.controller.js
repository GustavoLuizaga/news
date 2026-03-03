import { loginUserService, logoutUserService } from "../services/auth.service.js";

export const loginUser = (req, res) => {
    const { username, password } = req.body;
    const userData = { username, password };
    const result = loginUserService(userData);
    if(result.success) {
        res.status(200).json({ message: result.message, ok: true });
    } else {
        res.status(401).json({ message: result.message, ok: false });
    }
};

export const logoutUser = (req, res) => {
    const result = logoutUserService();
    res.status(200).json({ message: result.message, ok: true });
}