const  mongoose  = require("mongoose");

const dbConnection = async() => {

    try {

        console.log('Init DB Config');

        await mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos hable con el amin');

    }

}

module.exports = {
    dbConnection
}