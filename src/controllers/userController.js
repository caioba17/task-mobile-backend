import userService from "../services/userService.js";

async function Register(req, res) {
  try {
    const user_name = req.body.user_name;
    const user_email = req.body.user_email;
    const user_password = req.body.user_password;

    const user = await userService.Register(
      user_name,
      user_email,
      user_password
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Login(req, res) {
  try {
    const user_email = req.body.user_email;
    const user_password = req.body.user_password;
    const user = await userService.Login(user_email, user_password);

    if (user.length == 0)
      res.status(401).json({ error: "E-mail ou senha inválida" });
    else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default { Register, Login };
