// Load environment variables from .env file
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGODB_URI //|| "mongodb+srv://alderdeveloper:JTUE9XdNeorrg8rp@revplancluster.wh4fn.mongodb.net/?retryWrites=true&w=majority&appName=RevPlanCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// To run the test, go to root folder and use "node config/test-mongo-connection.js" in terminal