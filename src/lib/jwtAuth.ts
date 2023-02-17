import createHttpError from "http-errors"
import { RequestHandler, Request } from "express"
import { verifyAccessToken } from "./tools"
import { TokenPayload } from "./tools"

interface UserRequest extends Request {
  user?: TokenPayload
}

export const jwtAuthMiddleware: RequestHandler = async (req, res, next) => {
  if (!req.headers.authorization) {
    next(createHttpError(401, "Please provide Bearer token in authorization header"))
  } else {
    try {
      const accessToken = req.headers.authorization.replace("Bearer ", "")
      const payload = await verifyAccessToken(accessToken)
      req.user = {
        _id: payload._id,
        role: payload.role
      }
      next()
    } catch (error) {
      next(createHttpError(401, "Token not valid."))
    }
  }
}
