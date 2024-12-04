// vite.config.js
import { defineConfig } from "file:///C:/Users/Angy/Documents/reactCourse/10-calendar/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Angy/Documents/reactCourse/10-calendar/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/Angy/Documents/reactCourse/10-calendar/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      // Utilizar estrategia injectManifest
      srcDir: "src",
      filename: "sw.js",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg}"]
        // Archivos que serán precacheados
      },
      devOptions: {
        enabled: true,
        type: "module"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbmd5XFxcXERvY3VtZW50c1xcXFxyZWFjdENvdXJzZVxcXFwxMC1jYWxlbmRhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQW5neVxcXFxEb2N1bWVudHNcXFxccmVhY3RDb3Vyc2VcXFxcMTAtY2FsZW5kYXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FuZ3kvRG9jdW1lbnRzL3JlYWN0Q291cnNlLzEwLWNhbGVuZGFyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIHN0cmF0ZWdpZXM6IFwiaW5qZWN0TWFuaWZlc3RcIiwgLy8gVXRpbGl6YXIgZXN0cmF0ZWdpYSBpbmplY3RNYW5pZmVzdFxuICAgICAgc3JjRGlyOiBcInNyY1wiLFxuICAgICAgZmlsZW5hbWU6IFwic3cuanNcIixcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbXCIqKi8qLntqcyxjc3MsaHRtbCxwbmcsanBnLHN2Z31cIl0sIC8vIEFyY2hpdm9zIHF1ZSBzZXJcdTAwRTFuIHByZWNhY2hlYWRvc1xuICAgICAgfSxcbiAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJtb2R1bGVcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxvQkFBb0I7QUFDeFcsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUE7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLGNBQWMsQ0FBQyxnQ0FBZ0M7QUFBQTtBQUFBLE1BQ2pEO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
