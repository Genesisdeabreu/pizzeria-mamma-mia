import "dotenv/config";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { authModel } from "../models/auth.model.js";
import { isValidEmail } from "../utils/validators/email.validate.js";

const login = async (req, res) => {
  try {
    console.log('Recibiendo request de login:', req.body);

    const { email = "", password = "" } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const user = await authModel.getUserByEmail(email);
    console.log('Usuario encontrado:', user ? 'sí' : 'no');

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { email, id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });

    console.log('Login exitoso para:', email);
    return res.json({ 
      user: { email, id: user.id },
      token 
    });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const existingUser = await authModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = { email, password, id: nanoid() };
    await authModel.addUser(newUser);

    const token = jwt.sign({ email, id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return res.json({ 
      user: { email, id: newUser.id },
      token 
    });
  } catch (error) {
    console.error('Error en registro:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const me = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await authModel.getUserByEmail(email);
    return res.json({ email, id: user.id });
  } catch (error) {
    console.error('Error en me:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const authController = {
  login,
  register,
  me,
};