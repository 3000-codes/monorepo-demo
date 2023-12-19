# monorepo

### 1. 创建项目

```bash
mkdir monorepo
cd monorepo
pnpm init
```

### 3. 设置工作区

在根目录下创建`pnpm-workspace.yaml`文件，设置工作区

```yaml
packages: # 此名称必须为packages，下面的值为对应路径数组
  - "packages/*" # *表示packages下的直属文件夹， 也可以写成packages/a packages/b
  - "examples/**" # **表示examples下的所有文件夹
```

### 4. 创建子项目

在根目录下创建`packages`文件夹，用于存放子项目

```bash
mkdir packages
cd packages
mkdir package-a
cd package-a
pnpm init
# 按上述步骤创建package-b
```

### 5. 安装依赖

#### 5.1 安装根目录依赖

```bash
pnpm install vue@next -w # -w表示安装到根目录
pnpm install typescript -D -w # -D表示安装到开发依赖
```

#### 5.2 安装子项目依赖

```bash
pnpm --filter package-a install lodash # --filter表示安装到指定子项目
```

### 5.3 项目中依赖相互引用

```bash
pnpm --filter package-a install package-b # --filter表示安装到指定子项目
```

### 6. 运行项目

```bash
pnpm --filter package-a run serve # --filter表示运行指定子项目

# 运行所有子项目
pnpm run serve --filter . # .表示所有子项目

# 运行所有子项目中的serve命令
pnpm run serve --filter . --parallel # --parallel表示并行运行

# 运行所有子项目中的serve命令，且在运行前先安装依赖
pnpm run serve --filter . --parallel --recursive # --recursive表示递归安装依赖
```

### 6. 编译工程

安装 rollup

- esbuild 1.0 还没发布，配置文件还没支持(也可以搭配`execa`,全命令行传入)，简单说不好用（高情商，低情商：不会）

```bash
pnpm install rollup -Dw
pnpm install @rollup/plugin-commonjs -Dw  # 用于将CommonJS模块转换为 ES2015 供 Rollup 处理
pnpm install @rollup/plugin-node-resolve -Dw # 用于将第三方模块从 node_modules 中加载
pnpm install @rollup/plugin-typescript2 -Dw # 用于将TypeScript转换为JavaScript
pnpm install @rollup/plugin-terser -Dw # 用于压缩代码
pnpm install @rollup/plugin-json -Dw # 用于加载json文件
pnpm install @rollup/plugin-alias -Dw # 用于配置别名
```

### 7. 规范

#### 7.1 格式化规范（eslint）

## TODO

- 编译子项目（esbuild or rollup）
- 规范(试试新的 oxlint,不知道怎么用，abandoned)
- 单元测试
