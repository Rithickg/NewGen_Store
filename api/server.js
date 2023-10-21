import { app } from './app.js';
import { DbConnection } from './configs/db.js';

const PORT = process.env.PORT || 5000; // 5000 is the default port for Express

const Server = async () => {
    try {
        await DbConnection();
        app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
    } catch (error) {
        console.log("Error connecting to server :", error);
    }
}

Server();