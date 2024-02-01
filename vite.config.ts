import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'


const isProduction = process.env.NODE_ENV === 'production';
const shouldExtract =  isProduction|| process.env.EXTRACT === '1'
const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling"
}
const tamaguiConfig = {
  components: ['tamagui'],
  config: 'src/tamagui.config.ts',
}

export default defineConfig({
  resolve: {
    alias: {
      ...profiling
    }
  },
  clearScreen: true,
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
})
