import createHttpError from "http-errors"
import { RequestHandler } from "express"
import { UserRequest } from "../api/users/index"

export const hostOnlyMiddleware: RequestHandler = (req, res, next) => {
  const request = req as UserRequest
  if (request.user.role === "Host") {
    next()
  } else {
    next(createHttpError(403, "Hosts only endpoint!"))
  }
}
