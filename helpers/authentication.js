import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";

export function generateToken(email) {
  return jsonwebtoken.sign({ email }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}

export function verifyToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ error: "Token requerido." });
  }

  try {
    const dataToken = jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log(dataToken.email);
    next();
  } catch (e) {
    res.status(401).json({ error: "Token no válido." });
  }
}
