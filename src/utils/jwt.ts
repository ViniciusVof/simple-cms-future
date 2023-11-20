import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "secret";

interface JWTPayload {
  id: string;
  email: string;
  fullName: string;
}

export default {
  sign: (payload: JWTPayload) => jwt.sign(payload, SECRET, { expiresIn: "1d" }),
  verify: (token: string) => jwt.verify(token, SECRET) as JWTPayload,
};
