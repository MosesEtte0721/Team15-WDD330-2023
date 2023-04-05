import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product1: resolve(__dirname, "src/product_pages/index.html"),
<<<<<<< HEAD
        product2: resolve(__dirname, "src/product-listing/index.html"),
=======
        product2: resolve(
          __dirname,
          "src/product-listing/product-listing.html"
        ),
        project: resolve(__dirname, "src/project/index.html"),
>>>>>>> e0f51c0086a80c969b1a434526bd7556ddd868bf
      },
    },
  },
});
