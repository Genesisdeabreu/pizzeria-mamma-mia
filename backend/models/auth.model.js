import { readFile, writeFile } from "node:fs/promises";
import path from 'path';

const DB_PATH = path.join(process.cwd(), "db", "users.json");

const getUserByEmail = async (email) => {
  try {
    const data = await readFile(DB_PATH, "utf-8");
    const users = JSON.parse(data);
    console.log('Usuarios en DB:', users.length); // Debug
    return users.find((user) => user.email === email);
  } catch (error) {
    console.error('Error leyendo usuarios:', error);
    // Si el archivo no existe, inicializarlo
    if (error.code === 'ENOENT') {
      await writeFile(DB_PATH, JSON.stringify([], null, 2));
      return null;
    }
    throw error;
  }
};

const addUser = async (newUser) => {
  try {
    let users = [];
    try {
      const data = await readFile(DB_PATH, "utf-8");
      users = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    
    users.push(newUser);
    await writeFile(DB_PATH, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error añadiendo usuario:', error);
    throw error;
  }
};

export const authModel = {
  getUserByEmail,
  addUser,
};