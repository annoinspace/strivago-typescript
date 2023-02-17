import express from "express"
import { createServer } from "http"
import cors from "cors"
import passport from "passport"
import {
  badRequestHandler,
  notFoundHandler,
  genericErrorHandler,
  unauthorizedErrorHandler,
  forbiddenErrorHandler
} from "./errorHandlers"
import usersRouter from "./api/users"
import accommodationRouter from "./api/accommodation"

// import googleStrategy from "./lib/auth/google.js"

const expressServer = express()
const httpServer = createServer(expressServer)

// passport.use("google", googleStrategy)

// ---------------- WHITELIST FOR CORS ------------------

expressServer.use(express.json())
expressServer.use(cors())
expressServer.use(passport.initialize())
// ****************** ENDPOINTS ********************
expressServer.use("/users", usersRouter)
expressServer.use("/accommodations", accommodationRouter)

// ****************** ERROR HANDLERS ****************
expressServer.use(badRequestHandler) // 400
expressServer.use(unauthorizedErrorHandler)
expressServer.use(forbiddenErrorHandler)
expressServer.use(notFoundHandler) // 404
expressServer.use(genericErrorHandler) // 500

export { httpServer, expressServer }
