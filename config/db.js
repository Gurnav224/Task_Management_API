
import mongoose from "mongoose"

const initializeDatabase = async() => {
    try {
         await mongoose.connect(process.env.DB_URI, {dbName:'Task_API'});
        console.log('successfully connected to database')
    } catch (error) {
        console.error('failed to connect database', error)
    }
}


export default initializeDatabase;