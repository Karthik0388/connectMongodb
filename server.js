const mongodb = require("mongodb").MongoClient;
let mongodbURL = "mongodb://localhost:27017";

// The MongodbClient class is a class that allows for making Connections to MongoDB
// connect method is connecting mongodb url
// connect to MongoDB using a url
// Using promises
// mongodb.connect(mongodbURL).then(db => {
//     console.log("DataBase Connected");
//     // creating a database name
//     // create a new Db instance sharing the current socket connection
//     let Mern = db.db('Mern');
//     Mern.createCollection('studentsCollection')

// }).catch(err => {
//     console.log(err)
// })


// Using a Async And await
let mongodbConnection = async () => {
    try {
        let connections = await mongodb.connect(mongodbURL);
        // createdb name
        let dbName = connections.db('MERN');

        // insert data into collection
        let students_obj = {
            students_name: "Karthik",
            students_id: "type1",
            students_class: "10th std",
            students_marks:"70%",
        }
        // create collection
        let data = await (await dbName.createCollection('students')).insertOne(students_obj);
        console.log("successfully db Connected");
        console.log("successfully data inserted",data)
    } catch (error) {
        console.log(error)
    }
}
mongodbConnection();