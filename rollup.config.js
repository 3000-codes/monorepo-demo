import commonjs from "@rollup/plugin-commonjs";

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
