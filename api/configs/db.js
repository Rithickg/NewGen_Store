import mongoose from 'mongoose';

const uri = process.env.MONGO_DB;

const DbConnection = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error("Unable to connect to the database", error.message);
    }
}

export { DbConnection }