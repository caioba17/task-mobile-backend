import jwt from "jsonwebtoken";

const secretToken = "MYSECRET@123";

function CreateJWT(user_id) {
  const token = jwt.sign({ user_id }, secretToken, {
    expiresIn: 999999,
  });

  return token;
}

function ValidateJWT(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).send({ error: "Token não informado" });
  }

  const [aux, token] = authToken.split(" ");

  jwt.verify(token, secretToken, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Token inválido" });
    }

    req.user_id = decoded.user_id;

    next();
  });
}

export default { CreateJWT, ValidateJWT };
