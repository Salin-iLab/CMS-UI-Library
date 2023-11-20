import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/index.ts", // 진입 경로
  output: [
    {
      file: pkg.main,
      sourcemap: true,
      format: "cjs",
    },
    {
      file: pkg.module,
      sourcemap: true,
      format: "esm",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions,
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**/*.(ts|tsx|js|jsx)",
      include: "src/**/*.(ts|tsx|js|jsx)",
      extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    terser(),
  ],
};
