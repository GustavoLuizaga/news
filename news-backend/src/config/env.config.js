import dotenv from "dotenv";
dotenv.config();

const ENV = {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123',
    FILEPATH_NEWS: process.env.FILEPATH_NEWS || "./src/modules/news/content",
    PORT: process.env.PORT || 3000,
};

export default ENV;