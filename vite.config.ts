import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

export default defineConfig({
  // 官方文档有提,因为使用了Attributify Mode
  // react必须放在Unocss的后面(踩了坑┭┮﹏┭┮)
  plugins: [Unocss(), react()],
});
