import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  entry: "./dist/server/server.js",
  publicAssets: [
    {
      dir: "./dist/client",
    },
  ],
});
