import cors from "cors";
import "dotenv/config";
import express from "express";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import pizzaRoute from "./routes/pizza.route.js";

const app = express();

app.use(express.json());

// Configuración específica de CORS
app.use(cors({
  origin: ['http://localhost:5175', 'https://pizzeria-mamma-mia.vercel.app'], // Actualizado al puerto 5175
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
}));

// Middleware para logging
app.use((req, _, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizzaRoute);
app.use("/api/checkouts", checkoutRoute);

// Mejor manejo de rutas no encontradas
app.use((_, res) => {
  res.status(404).json({ 
    error: "Not Found",
    message: "La ruta solicitada no existe"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});