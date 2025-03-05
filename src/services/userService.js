import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";

async function Register(user_name, user_email, user_password) {
  const validateUser = await userRepository.FindByEmail(user_email);

  if (validateUser.user_id) throw "Já existe um usuário com esse e-mail";

  const hashPassword = await bcrypt.hash(user_password, 10);

  const user = await userRepository.Register(
    user_name,
    user_email,
    hashPassword
  );
  return user;
}

async function Login(user_email, user_password) {
  const user = await userRepository.FindByEmail(user_email);

  if (user.length == 0) {
    return [];
  } else {
    if (await bcrypt.compare(user_password, user.user_password)) {
      delete user.user_password;
      user.token = jwt.CreateJWT(user.user_id);
      return user;
    } else return [];
  }
}
export default { Register, Login };
