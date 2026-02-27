import Server from "./config/server.config.js";

(() => {
    try {
        Server.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
})();