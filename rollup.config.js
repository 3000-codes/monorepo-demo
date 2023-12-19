import commonjs from "@rollup/plugin-commonjs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url); // 用于导入commonjs模块

// 可以传入一个数组，打包多个文件
// 也可以传入一个对象，打包一个文件
export default [
  {
    input: "src/index.js",
    output: {
      dir: "output",
      format: "cjs",
    },
    plugins: [commonjs()],
  },
];
