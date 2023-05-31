import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config(); // Load environment variables from .env

export default ({ mode }) => {
  const isDev = mode === 'development';
  const base = isDev ? '/' : '/Floral-Fiesta-UI/';

  return defineConfig({
    base,
    plugins: [react()],
  });
};
