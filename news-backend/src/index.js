import ENV from "./config/env.config.js";
import Server from "./config/server.config.js";


(() => {
    try {
        Server.listen(ENV.PORT, () => {
            console.log(`Server is running on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
})();