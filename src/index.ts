import listEndpoints from "express-list-endpoints"
import mongoose from "mongoose"
import { httpServer, expressServer } from "./server"

const port = process.env.PORT || 3001
// const whitelist = [process.env.FE_DEV_URL, process.env.FE_PROD_URL]

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL!)

mongoose.connection.on("connected", () => {
  console.log("connectd to mongo!")
  httpServer.listen(port, () => {
    console.table(listEndpoints(expressServer))
    console.log("server is running on port:", port)
  })
})
